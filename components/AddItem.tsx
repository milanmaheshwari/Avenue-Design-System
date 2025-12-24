/**
 * Add Item Component
 * Product card with "Add to Cart" functionality
 * Supports two sizes: Big (240x240) and Small (160x160)
 */

import React from 'react';
import styled from 'styled-components';
import { colors, typography, spacing } from '../tokens';

export interface AddItemProps {
  /** Size variant of the card */
  size?: 'Big' | 'Small';
  /** Product title */
  title: string;
  /** Product price */
  price: string;
  /** Product image URL */
  imageUrl: string;
  /** Callback when ADD button is clicked */
  onAdd?: () => void;
  /** Category for color theming (optional) */
  category?: 'comedy' | 'nightlife' | 'sports' | 'music' | 'movies' | 'wellness' | 'themeParks' | 'coffee';
}

// Container for the entire card
const CardContainer = styled.div<{ $size: 'Big' | 'Small' }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$size === 'Big' ? spacing[4] : spacing[3]};
  width: 100%;
`;

// Image card wrapper with gradient overlay
const ImageCard = styled.div<{ $size: 'Big' | 'Small'; $category?: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.$size === 'Big' ? '240px' : '160px'};
  border-radius: ${props => props.$size === 'Big' ? '20px' : '16px'};
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background: ${colors.neutral[950]};
  
  /* Category gradient overlay */
  ${props => props.$category && `
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        154.5deg,
        ${colors[props.$category as keyof typeof colors]?.alpha?.[5] || colors.movies.alpha[5]} 2.5%,
        ${colors[props.$category as keyof typeof colors]?.alpha?.[10] || colors.movies.alpha[10]} 52.7%,
        ${colors[props.$category as keyof typeof colors]?.alpha?.[5] || colors.movies.alpha[5]} 102.9%
      );
      pointer-events: none;
    }
  `}
  
  /* Border overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 0 1px ${colors.neutral.light.alpha[10]};
    pointer-events: none;
    z-index: 2;
  }
`;

// Product image
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

// Details section
const DetailsContainer = styled.div<{ $size: 'Big' | 'Small' }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$size === 'Big' ? spacing[6] : spacing[4]};
  width: 100%;
`;

// Text container
const TextContainer = styled.div<{ $size: 'Big' | 'Small' }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.$size === 'Big' ? spacing[2] : spacing[1]};
  flex: 1;
`;

// Product title
const ProductTitle = styled.h3<{ $size: 'Big' | 'Small' }>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral.light.alpha[90]};
  margin: 0;
  
  ${props => props.$size === 'Big' ? `
    font-size: ${typography.desktop.heading[800].fontSize};
    line-height: ${typography.desktop.heading[800].lineHeight};
    letter-spacing: ${typography.desktop.heading[800].letterSpacing};
  ` : `
    font-size: ${typography.mobile.heading[600].fontSize};
    line-height: ${typography.mobile.heading[600].lineHeight};
    letter-spacing: ${typography.mobile.heading[600].letterSpacing};
  `}
  
  /* Ellipsis for overflow */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

// Product price
const ProductPrice = styled.p<{ $size: 'Big' | 'Small' }>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.neutral.light.alpha[75]};
  margin: 0;
  
  ${props => props.$size === 'Big' ? `
    font-size: ${typography.desktop.body.medium[400].fontSize};
    line-height: ${typography.desktop.body.medium[400].lineHeight};
  ` : `
    font-size: ${typography.mobile.body.medium[300].fontSize};
    line-height: ${typography.mobile.body.medium[300].lineHeight};
  `}
`;

// Add button wrapper
const ButtonWrapper = styled.button`
  position: relative;
  width: 100%;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Button background with gradient
const ButtonBackground = styled.div<{ $size: 'Big' | 'Small' }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${props => props.$size === 'Big' ? spacing[4] : `${spacing[3]} ${spacing[3]}`};
  border-radius: 12px;
  
  background: linear-gradient(
      90deg,
      ${colors.neutral.light.alpha[5]} 0%,
      ${colors.neutral.light.alpha[10]} 50%,
      ${colors.neutral.light.alpha[5]} 100%
    ),
    linear-gradient(
      180deg,
      ${colors.neutral.light.alpha[0]} 0%,
      ${colors.neutral.light.alpha[5]} 100%
    );
  
  /* Inner glow shadow */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    box-shadow: 
      inset 0 0 12px 0 ${colors.neutral.light.alpha[5]},
      inset 0 -8px 32px 0 ${colors.neutral.light.alpha[5]};
    pointer-events: none;
  }
`;

// Button text
const ButtonText = styled.span<{ $size: 'Big' | 'Small' }>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.primary[50]};
  text-align: center;
  position: relative;
  z-index: 1;
  
  ${props => props.$size === 'Big' ? `
    font-size: ${typography.desktop.button[300].fontSize};
    line-height: ${typography.desktop.button[300].lineHeight};
  ` : `
    font-size: ${typography.mobile.button[200].fontSize};
    line-height: ${typography.mobile.button[200].lineHeight};
  `}
`;

/**
 * AddItem Component
 * 
 * A product card component that displays product information and an add-to-cart button.
 * 
 * @example
 * ```tsx
 * <AddItem
 *   size="Big"
 *   title="Official Cosmic Collision Cap- Dark Blue"
 *   price="$100.00"
 *   imageUrl="/path/to/image.png"
 *   category="movies"
 *   onAdd={() => console.log('Added to cart')}
 * />
 * ```
 */
export const AddItem: React.FC<AddItemProps> = ({
  size = 'Big',
  title,
  price,
  imageUrl,
  onAdd,
  category = 'movies',
}) => {
  return (
    <CardContainer $size={size}>
      <ImageCard $size={size} $category={category}>
        <ProductImage src={imageUrl} alt={title} />
      </ImageCard>
      
      <DetailsContainer $size={size}>
        <TextContainer $size={size}>
          <ProductTitle $size={size}>{title}</ProductTitle>
          <ProductPrice $size={size}>{price}</ProductPrice>
        </TextContainer>
        
        <ButtonWrapper onClick={onAdd} aria-label={`Add ${title} to cart`}>
          <ButtonBackground $size={size}>
            <ButtonText $size={size}>ADD</ButtonText>
          </ButtonBackground>
        </ButtonWrapper>
      </DetailsContainer>
    </CardContainer>
  );
};

export default AddItem;
