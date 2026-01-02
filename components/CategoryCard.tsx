/**
 * CategoryCard Component
 * Category cards with theme-based styling and 3D imagery
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../tokens';

// Category images imported from assets folder
import categoryMusic from '../assets/category-music.png';
import categoryNightlife from '../assets/category-nightlife.png';
import categoryCoffee from '../assets/category-coffee.png';
import categorySports from '../assets/category-sports.png';
import categoryMovies from '../assets/category-movies.png';
import categoryComedy from '../assets/category-comedy.png';
import categoryWellness from '../assets/category-wellness.png';
import categoryThemeParks from '../assets/category-themeparks.png';

export type CategoryTheme = 
  | 'music' 
  | 'nightlife' 
  | 'coffee' 
  | 'sports' 
  | 'movies' 
  | 'comedy' 
  | 'wellness' 
  | 'themeParks';

export type CategoryCardSize = 'big' | 'small';

export interface CategoryCardProps {
  /** Theme variant */
  theme?: CategoryTheme;
  /** Size variant */
  size?: CategoryCardSize;
  /** Card title */
  title?: string;
  /** Card subtitle/description */
  subtitle?: string;
  /** Custom icon component */
  icon?: React.ReactNode;
  /** Custom image URL */
  imageUrl?: string;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

// Theme configuration
const themeConfig: Record<CategoryTheme, {
  gradient: string;
  color: string;
  shadowColor: string;
  image: string;
  defaultTitle: string;
  defaultSubtitle: string;
}> = {
  music: {
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(162, 28, 175, 1) 0%, rgba(118, 16, 127, 1) 37%, rgba(96, 10, 102, 1) 60%, rgba(74, 4, 78, 1) 100%)',
    color: colors.music[50],
    shadowColor: colors.primary.alpha[5],
    image: categoryMusic,
    defaultTitle: 'Music',
    defaultSubtitle: 'Explore concerts, live shows and festivals near you',
  },
  nightlife: {
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(126, 34, 206, 1) 0%, rgba(93, 21, 153, 1) 50%, rgba(59, 7, 100, 1) 100%)',
    color: colors.nightlife[50],
    shadowColor: colors.nightlife.alpha[5],
    image: categoryNightlife,
    defaultTitle: 'Night Parties',
    defaultSubtitle: 'Groove and dance the night away with top DJs and parties nearby',
  },
  coffee: {
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(133, 100, 79, 1) 0%, rgba(98, 66, 48, 1) 35%, rgba(80, 48, 32, 1) 65%, rgba(62, 31, 16, 1) 100%)',
    color: colors.coffee[50],
    shadowColor: colors.coffee.alpha[5],
    image: categoryCoffee,
    defaultTitle: 'Coffee Parties',
    defaultSubtitle: 'Taste brews and enjoy the company',
  },
  sports: {
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(29, 78, 216, 1) 0%, rgba(26, 58, 150, 1) 35%, rgba(25, 47, 117, 1) 65%, rgba(23, 37, 84, 1) 100%)',
    color: colors.sports[50],
    shadowColor: colors.sports.alpha[5],
    image: categorySports,
    defaultTitle: 'Sports',
    defaultSubtitle: 'Find matches and tournaments near you',
  },
  movies: {
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(29, 78, 216, 1) 0%, rgba(26, 58, 150, 1) 35%, rgba(25, 47, 117, 1) 65%, rgba(23, 37, 84, 1) 100%)',
    color: colors.movies[50],
    shadowColor: colors.movies.alpha[5],
    image: categoryMovies,
    defaultTitle: 'Movies',
    defaultSubtitle: 'Find the latest movie releases in theatres near you',
  },
  comedy: {
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(21, 128, 61, 1) 0%, rgba(13, 87, 42, 1) 50%, rgba(5, 46, 22, 1) 100%)',
    color: colors.comedy[50],
    shadowColor: colors.comedy.alpha[5],
    image: categoryComedy,
    defaultTitle: 'Comedy',
    defaultSubtitle: 'Laugh out loud at live standup comedy shows',
  },
  wellness: {
    gradient: 'radial-gradient(ellipse 15px 33.358px at 50% 50%, rgba(21,128,61,1) 0%, rgba(13,87,42,1) 50%, rgba(5,46,22,1) 100%)',
    color: colors.wellness[50],
    shadowColor: colors.wellness.alpha[5],
    image: categoryWellness,
    defaultTitle: 'Wellness',
    defaultSubtitle: 'Find your inner peace with yoga and meditation events',
  },
  themeParks: {
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(29, 78, 216, 1) 0%, rgba(26, 58, 150, 1) 35%, rgba(25, 47, 117, 1) 65%, rgba(23, 37, 84, 1) 100%)',
    color: colors.themeParks[50],
    shadowColor: colors.themeParks.alpha[5],
    image: categoryThemeParks,
    defaultTitle: 'Theme Parks',
    defaultSubtitle: 'Experience the best rides with access to theme parks',
  },
};

const CardContainer = styled.div<{
  $theme: CategoryTheme;
  $size: CategoryCardSize;
  $clickable: boolean;
}>`
  width: ${props => props.$size === 'big' ? '300px' : '160px'};
  height: ${props => props.$size === 'big' ? '360px' : '220px'};
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.$size === 'big' ? '20px' : '12px'};
  background-image: ${props => themeConfig[props.$theme].gradient};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 20px 5px ${props => themeConfig[props.$theme].shadowColor};
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;
  
  /* Inset border effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${props => props.$size === 'big' ? '20px' : '12px'};
    box-shadow: inset 0px 1px 0px 0px ${props => themeConfig[props.$theme].shadowColor},
                inset 0px 0px 0px ${props => props.$size === 'big' ? '2px' : '1px'} ${colors.neutral.light.alpha[5]};
    pointer-events: none;
  }
  
  ${props => props.$clickable && `
    &:hover {
      transform: translateY(-4px);
    }
    
    &:active {
      transform: translateY(-2px);
    }
  `}
`;

const ContentSection = styled.div<{ $size: CategoryCardSize }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$size === 'big' ? spacing[3] : spacing[2]};
  padding: ${props => props.$size === 'big' ? spacing[5] : spacing[3]};
  flex: 1;
`;

const TitleRow = styled.div<{ $size: CategoryCardSize }>`
  display: flex;
  align-items: center;
  gap: ${props => props.$size === 'big' ? spacing[4] : spacing[2]};
`;

const IconWrapper = styled.div<{ $size: CategoryCardSize }>`
  width: ${props => props.$size === 'big' ? '40px' : '24px'};
  height: ${props => props.$size === 'big' ? '40px' : '24px'};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
    color: ${colors.neutral[50]};
    stroke: currentColor;
  }
`;

const Title = styled.div<{ $theme: CategoryTheme; $size: CategoryCardSize }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => props.$size === 'big' ? '24px' : '16px'};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${props => props.$size === 'big' ? '28px' : '20px'};
  letter-spacing: ${props => props.$size === 'big' ? '-0.48px' : '-0.32px'};
  color: ${props => themeConfig[props.$theme].color};
  flex: 1;
`;

const Subtitle = styled.div<{ $theme: CategoryTheme; $size: CategoryCardSize }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => props.$size === 'big' ? '16px' : '13px'};
  font-weight: ${typography.fontWeights.regular};
  line-height: ${props => props.$size === 'big' ? '22px' : '18px'};
  color: ${props => themeConfig[props.$theme].color};
  overflow: hidden;
`;

const ImageContainer = styled.div<{ $size: CategoryCardSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4px;
  border-radius: 8px;
  overflow: hidden;
`;

const CategoryImage = styled.img<{ $size: CategoryCardSize }>`
  width: ${props => props.$size === 'big' ? '220px' : '124px'};
  height: ${props => props.$size === 'big' ? '220px' : '124px'};
  object-fit: cover;
  object-position: center;
  box-shadow: none;
  flex-shrink: 0;
`;

// Default icon component
const DefaultIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CategoryCard: React.FC<CategoryCardProps> = ({
  theme = 'music',
  size = 'big',
  title,
  subtitle,
  icon,
  imageUrl,
  onClick,
  className,
}) => {
  const config = themeConfig[theme];
  
  return (
    <CardContainer
      $theme={theme}
      $size={size}
      $clickable={!!onClick}
      onClick={onClick}
      className={className}
    >
      <ContentSection $size={size}>
        <TitleRow $size={size}>
          <IconWrapper $size={size}>
            {icon || <DefaultIcon />}
          </IconWrapper>
          <Title $theme={theme} $size={size}>
            {title || config.defaultTitle}
          </Title>
        </TitleRow>
        <Subtitle $theme={theme} $size={size}>
          {subtitle || config.defaultSubtitle}
        </Subtitle>
      </ContentSection>
      <ImageContainer $size={size}>
        <CategoryImage
          $size={size}
          src={imageUrl || config.image}
          alt={title || config.defaultTitle}
        />
      </ImageContainer>
    </CardContainer>
  );
};
