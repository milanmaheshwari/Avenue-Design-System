/**
 * ArtistCard Component
 * A card component for displaying artist/performer information with category-themed styling
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../tokens';

export type ArtistCategory = 'music' | 'comedy';
export type ArtistCardSize = 'big' | 'small';

export interface ArtistCardProps {
  /**
   * Size variant of the card
   * @default 'big'
   */
  size?: ArtistCardSize;
  /**
   * Artist or performer name
   */
  name: string;
  /**
   * Genre or performance type
   */
  genre: string;
  /**
   * Artist image URL
   */
  imageUrl: string;
  /**
   * Category for color theming (music or comedy)
   * @default 'music'
   */
  category?: ArtistCategory;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const CardContainer = styled.div<{ $size: ArtistCardSize; $clickable: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.$size === 'big' ? spacing[5] : spacing[3]};
  width: ${props => props.$size === 'big' ? '200px' : '120px'};
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: ${props => props.$clickable ? 'translateY(-4px)' : 'none'};
  }

  &:active {
    transform: ${props => props.$clickable ? 'translateY(-2px)' : 'none'};
  }
`;

const ImageWrapper = styled.div<{ $size: ArtistCardSize }>`
  position: relative;
  width: ${props => props.$size === 'big' ? '200px' : '120px'};
  height: ${props => props.$size === 'big' ? '200px' : '120px'};
  border-radius: ${props => props.$size === 'big' ? '40px' : '24px'};
  overflow: hidden;
  box-shadow: 0px 13.714px 27.429px 0px rgba(0, 0, 0, 0.32);
`;

const ArtistImage = styled.img<{ $size: ArtistCardSize }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${props => props.$size === 'big' ? '40px' : '24px'};
`;

const CategoryOverlay = styled.div<{ $category: ArtistCategory; $size: ArtistCardSize }>`
  position: absolute;
  inset: 0;
  background-color: ${props => {
    const cat = props.$category;
    return colors[cat]?.alpha?.[5] || colors.music.alpha[5];
  }};
  border-radius: ${props => props.$size === 'big' ? '40px' : '24px'};
  pointer-events: none;
`;

const ContentWrapper = styled.div<{ $size: ArtistCardSize }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$size === 'big' ? 'center' : 'flex-start'};
  gap: ${props => props.$size === 'big' ? spacing[2] : '0'};
  width: 100%;
  text-align: ${props => props.$size === 'big' ? 'center' : 'left'};
`;

const ArtistName = styled.h3<{ $size: ArtistCardSize; $category: ArtistCategory }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => props.$size === 'big' ? 
    typography.desktop.heading[700].fontSize : 
    typography.mobile.heading[600].fontSize
  };
  font-weight: ${typography.fontWeights.bold};
  line-height: ${props => props.$size === 'big' ? 
    typography.desktop.heading[700].lineHeight : 
    typography.mobile.heading[600].lineHeight
  };
  letter-spacing: ${props => props.$size === 'big' ? 
    typography.desktop.heading[700].letterSpacing : 
    typography.mobile.heading[600].letterSpacing
  };
  color: ${props => {
    const cat = props.$category;
    return colors[cat]?.[100] || colors.music[100];
  }};
  margin: 0;
  width: 100%;
`;

const GenreText = styled.p<{ $size: ArtistCardSize; $category: ArtistCategory }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => props.$size === 'big' ? 
    typography.desktop.body.regular[300].fontSize : 
    typography.mobile.body.regular[300].fontSize
  };
  font-weight: ${typography.fontWeights.regular};
  line-height: ${props => props.$size === 'big' ? 
    typography.desktop.body.regular[300].lineHeight : 
    typography.mobile.body.regular[300].lineHeight
  };
  color: ${props => {
    const cat = props.$category;
    return colors[cat]?.[100] || colors.music[100];
  }};
  margin: 0;
  width: 100%;
`;

export const ArtistCard: React.FC<ArtistCardProps> = ({
  size = 'big',
  name,
  genre,
  imageUrl,
  category = 'music',
  onClick
}) => {
  return (
    <CardContainer 
      $size={size} 
      $clickable={!!onClick}
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
      <ImageWrapper $size={size}>
        <ArtistImage 
          src={imageUrl} 
          alt={name}
          $size={size}
        />
        <CategoryOverlay $category={category} $size={size} />
      </ImageWrapper>
      <ContentWrapper $size={size}>
        <ArtistName $size={size} $category={category}>
          {name}
        </ArtistName>
        <GenreText $size={size} $category={category}>
          {genre}
        </GenreText>
      </ContentWrapper>
    </CardContainer>
  );
};

