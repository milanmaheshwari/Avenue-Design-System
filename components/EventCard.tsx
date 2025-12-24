/**
 * EventCard Component
 * A card component for displaying event information with theme-based styling
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../tokens';

export type EventTheme = 'primary' | 'music' | 'coffee' | 'comedy' | 'movies' | 'nightlife' | 'sports' | 'themeParks' | 'wellness';
export type EventCardSize = 'big' | 'medium' | 'small';
export type EventCardType = 'default' | 'trending';

export interface EventCardProps {
  /**
   * Size variant of the card
   * @default 'big'
   */
  size?: EventCardSize;
  /**
   * Card type (default or trending with number)
   * @default 'default'
   */
  type?: EventCardType;
  /**
   * Event title
   */
  title: string;
  /**
   * Location and date information
   */
  info: string;
  /**
   * Event image URL
   */
  imageUrl: string;
  /**
   * Theme for color styling
   * @default 'primary'
   */
  theme?: EventTheme;
  /**
   * Trending rank number (only shown when type='trending')
   */
  trendingRank?: number;
  /**
   * Is favorited
   */
  isFavorite?: boolean;
  /**
   * Favorite toggle handler
   */
  onFavoriteToggle?: () => void;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

// Theme configuration
const getThemeColors = (theme: EventTheme) => {
  const themeMap = {
    primary: colors.primary,
    music: colors.music,
    coffee: colors.coffee,
    comedy: colors.comedy,
    movies: colors.movies,
    nightlife: colors.nightlife,
    sports: colors.sports,
    themeParks: colors.themeParks,
    wellness: colors.wellness,
  };
  return themeMap[theme] || colors.primary;
};

const CardContainer = styled.div<{ $size: EventCardSize; $clickable: boolean; $theme: EventTheme }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  border-radius: ${props => props.$size === 'small' ? '12px' : '24px'};
  width: ${props => 
    props.$size === 'big' ? '360px' : 
    props.$size === 'medium' ? '292px' : 
    '156px'
  };
  background-image: 
    linear-gradient(
      113.68deg,
      ${props => getThemeColors(props.$theme).alpha[5]} 30.16%,
      ${props => getThemeColors(props.$theme).alpha[10]} 65.93%,
      ${props => getThemeColors(props.$theme).alpha[5]} 101.69%
    ),
    linear-gradient(90deg, ${colors.neutral[950]} 0%, ${colors.neutral[950]} 100%);
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: inset 0px 0px 0px ${props => props.$size === 'small' ? '1px' : '2px'} ${colors.neutral.light.alpha[5]};

  &:hover {
    transform: ${props => props.$clickable ? 'translateY(-4px)' : 'none'};
  }

  &:active {
    transform: ${props => props.$clickable ? 'translateY(-2px)' : 'none'};
  }
`;

const ImageContainer = styled.div<{ $size: EventCardSize }>`
  position: relative;
  width: ${props => 
    props.$size === 'big' ? '360px' : 
    props.$size === 'medium' ? '292px' : 
    '156px'
  };
  height: ${props => 
    props.$size === 'big' ? '450px' : 
    props.$size === 'medium' ? '365px' : 
    '195px'
  };
  overflow: hidden;
`;

const EventImage = styled.img<{ $theme: EventTheme }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ImageOverlay = styled.div<{ $theme: EventTheme }>`
  position: absolute;
  inset: 0;
  background-color: ${props => getThemeColors(props.$theme).alpha[5]};
  pointer-events: none;
`;

// Decorative blur circles
const BlurCircle = styled.div<{ $size: EventCardSize; $position: 'top' | 'bottom' }>`
  position: absolute;
  ${props => props.$position === 'top' ? `
    right: ${props.$size === 'big' ? '-200px' : props.$size === 'medium' ? '-148px' : '-100px'};
    top: ${props.$size === 'big' ? '-200px' : props.$size === 'medium' ? '-160px' : '-100px'};
    width: ${props.$size === 'big' ? '400px' : props.$size === 'medium' ? '320px' : '200px'};
    height: ${props.$size === 'big' ? '400px' : props.$size === 'medium' ? '320px' : '200px'};
  ` : `
    right: ${props.$size === 'big' ? '80px' : '40px'};
    bottom: ${props.$size === 'big' ? '-280px' : '-140px'};
    width: ${props.$size === 'big' ? '560px' : '280px'};
    height: ${props.$size === 'big' ? '560px' : '280px'};
  `}
  background: radial-gradient(50% 50% at 50% 50%, rgba(250, 250, 250, 0.1) 0%, rgba(250, 250, 250, 0) 100%);
  border-radius: 50%;
  pointer-events: none;
`;

const FavoriteButton = styled.button<{ $size: EventCardSize; $isFavorite: boolean }>`
  position: absolute;
  top: ${props => props.$size === 'small' ? spacing[2] : spacing[4]};
  right: ${props => props.$size === 'small' ? spacing[2] : spacing[4]};
  width: ${props => props.$size === 'small' ? '24px' : '40px'};
  height: ${props => props.$size === 'small' ? '24px' : '40px'};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 200ms ease;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TrendingNumber = styled.div<{ $size: EventCardSize; $theme: EventTheme }>`
  position: absolute;
  bottom: ${props => 
    props.$size === 'big' ? '80px' : 
    props.$size === 'medium' ? '65px' : 
    '42px'
  };
  left: ${props => 
    props.$size === 'big' ? spacing[5] : 
    props.$size === 'medium' ? spacing[4] : 
    spacing[3]
  };
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => 
    props.$size === 'big' ? '120px' : 
    props.$size === 'medium' ? '95px' : 
    '60px'
  };
  font-weight: 900;
  line-height: ${props => 
    props.$size === 'big' ? '120px' : 
    props.$size === 'medium' ? '95px' : 
    '60px'
  };
  transform: translateY(50%);
  background: linear-gradient(
    189.45deg,
    ${props => getThemeColors(props.$theme)[600]} 1.82%,
    ${props => getThemeColors(props.$theme)[950]} 97.4%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
`;

const ContentWrapper = styled.div<{ $size: EventCardSize }>`
  display: flex;
  flex-direction: column;
  padding: ${props => 
    props.$size === 'big' ? `${spacing[5]} ${spacing[5]} ${spacing[6]}` :
    props.$size === 'medium' ? `${spacing[4]} ${spacing[4]} ${spacing[5]}` :
    `${spacing[2]} ${spacing[2]} ${spacing[3]}`
  };
`;

const TextContent = styled.div<{ $size: EventCardSize }>`
  display: flex;
  flex-direction: column;
  gap: ${props => 
    props.$size === 'big' ? spacing[2] :
    props.$size === 'medium' ? spacing[1] :
    '2px'
  };
`;

const EventTitle = styled.h3<{ $size: EventCardSize; $theme: EventTheme }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => 
    props.$size === 'big' ? typography.desktop.heading[700].fontSize :
    props.$size === 'medium' ? typography.desktop.heading[800].fontSize :
    typography.mobile.heading[700].fontSize
  };
  font-weight: ${typography.fontWeights.bold};
  line-height: ${props => 
    props.$size === 'big' ? typography.desktop.heading[700].lineHeight :
    props.$size === 'medium' ? typography.desktop.heading[800].lineHeight :
    typography.mobile.heading[700].lineHeight
  };
  letter-spacing: ${props => 
    props.$size === 'big' ? typography.desktop.heading[700].letterSpacing :
    props.$size === 'medium' ? typography.desktop.heading[800].letterSpacing :
    typography.mobile.heading[700].letterSpacing
  };
  color: ${props => getThemeColors(props.$theme)[100]};
  margin: 0;
`;

const EventInfo = styled.p<{ $size: EventCardSize; $theme: EventTheme }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => 
    props.$size === 'big' ? typography.desktop.body.regular[300].fontSize :
    props.$size === 'medium' ? typography.desktop.body.regular[400].fontSize :
    typography.mobile.body.regular[400].fontSize
  };
  font-weight: ${typography.fontWeights.regular};
  line-height: ${props => 
    props.$size === 'big' ? typography.desktop.body.regular[300].lineHeight :
    props.$size === 'medium' ? typography.desktop.body.regular[400].lineHeight :
    typography.mobile.body.regular[400].lineHeight
  };
  color: ${props => getThemeColors(props.$theme)[100]};
  margin: 0;
`;

// Heart Icon Component
const HeartIcon: React.FC<{ isFilled: boolean }> = ({ isFilled }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject x="-4.44444" y="-4.44444" width="48.8889" height="48.8889">
      <div 
        xmlns="http://www.w3.org/1999/xhtml" 
        style={{
          backdropFilter: 'blur(2.22px)',
          clipPath: 'url(#bgblur_clip_path)',
          height: '100%',
          width: '100%'
        }}
      />
    </foreignObject>
    <g data-figma-bg-blur-radius="4.44444">
      <rect width="40" height="40" rx="12" fill="url(#paint0_linear_heart)"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" stroke="#FAFAFA" strokeOpacity="0.05"/>
      <path 
        d="M23.0752 13.873C23.896 13.6643 24.7585 13.7216 25.5488 14.0381C26.3395 14.3548 27.025 14.918 27.5098 15.6582C27.9947 16.3988 28.2541 17.28 28.25 18.1836V18.1865C28.25 20.0113 27.1133 21.4237 25.7578 22.8398L20.8242 27.8271L20.7812 27.874C20.6812 27.9941 20.5591 28.0884 20.4258 28.1523C20.2927 28.2161 20.1496 28.249 20.0059 28.25C19.8621 28.2509 19.7187 28.2202 19.585 28.1582C19.4511 28.0961 19.3289 28.0033 19.2275 27.8848C19.2158 27.871 19.2032 27.8576 19.1904 27.8447L14.2422 22.8398C12.8861 21.423 11.75 20.0203 11.75 18.1865L11.7627 17.8496C11.8196 17.0674 12.0731 16.3146 12.498 15.6689C12.9835 14.9314 13.6677 14.3698 14.457 14.0537C15.2458 13.7378 16.1061 13.6805 16.9258 13.8867C17.7459 14.0931 18.4925 14.5559 19.0635 15.2197C19.0666 15.2234 19.07 15.2269 19.0732 15.2305C19.1886 15.3593 19.3296 15.4647 19.4893 15.5371C19.6491 15.6096 19.8234 15.6475 20 15.6475C20.1766 15.6475 20.3509 15.6096 20.5107 15.5371C20.6704 15.4647 20.8114 15.3593 20.9268 15.2305C20.9309 15.2259 20.9355 15.2215 20.9395 15.2168C21.5085 14.5489 22.2541 14.0819 23.0752 13.873Z" 
        stroke={isFilled ? '#F5F5F5' : '#F5F5F5'} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill={isFilled ? '#F5F5F5' : 'none'}
        fillOpacity={isFilled ? 0.5 : 0}
      />
    </g>
    <defs>
      <clipPath id="bgblur_clip_path" transform="translate(4.44444 4.44444)">
        <rect width="40" height="40" rx="12"/>
      </clipPath>
      <linearGradient id="paint0_linear_heart" x1="6.5" y1="-3" x2="23.5" y2="46.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FAFAFA" stopOpacity="0.1"/>
        <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.05"/>
      </linearGradient>
    </defs>
  </svg>
);

export const EventCard: React.FC<EventCardProps> = ({
  size = 'big',
  type = 'default',
  title,
  info,
  imageUrl,
  theme = 'primary',
  trendingRank,
  isFavorite = false,
  onFavoriteToggle,
  onClick
}) => {
  const [localFavorite, setLocalFavorite] = useState(isFavorite);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onFavoriteToggle) {
      onFavoriteToggle();
    } else {
      setLocalFavorite(!localFavorite);
    }
  };

  const currentFavorite = onFavoriteToggle ? isFavorite : localFavorite;

  return (
    <CardContainer
      $size={size}
      $clickable={!!onClick}
      $theme={theme}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <ImageContainer $size={size}>
        <EventImage src={imageUrl} alt={title} $theme={theme} />
        <ImageOverlay $theme={theme} />
        <BlurCircle $size={size} $position="top" />
        {type === 'trending' && trendingRank && (
          <>
            <BlurCircle $size={size} $position="bottom" />
            <TrendingNumber $size={size} $theme={theme}>
              {trendingRank}
            </TrendingNumber>
          </>
        )}
        <FavoriteButton
          $size={size}
          $isFavorite={currentFavorite}
          onClick={handleFavoriteClick}
          aria-label={currentFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <HeartIcon isFilled={currentFavorite} />
        </FavoriteButton>
      </ImageContainer>
      <ContentWrapper $size={size}>
        <TextContent $size={size}>
          <EventTitle $size={size} $theme={theme}>
            {title}
          </EventTitle>
          <EventInfo $size={size} $theme={theme}>
            {info}
          </EventInfo>
        </TextContent>
      </ContentWrapper>
    </CardContainer>
  );
};

