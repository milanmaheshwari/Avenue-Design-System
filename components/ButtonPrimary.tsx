/**
 * ButtonPrimary Component
 * A themeable button with gradient backgrounds and arrow indicator
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../tokens';

export type ButtonTheme = 
  | 'music' 
  | 'nightlife' 
  | 'coffee' 
  | 'sports' 
  | 'movies' 
  | 'comedy' 
  | 'wellness' 
  | 'themeParks';

export type ButtonSize = 'big' | 'small';

export interface ButtonPrimaryProps {
  /** Button text content */
  children?: React.ReactNode;
  /** Size variant of the button */
  size?: ButtonSize;
  /** Theme color variant */
  theme?: ButtonTheme;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
}

const themeColors = {
  music: colors.music,
  nightlife: colors.nightlife,
  coffee: colors.coffee,
  sports: colors.sports,
  movies: colors.movies,
  comedy: colors.comedy,
  wellness: colors.wellness,
  themeParks: colors.themeParks,
};

const ButtonContainer = styled.button<{ 
  $size: ButtonSize; 
  $theme: ButtonTheme;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]};
  width: ${props => props.$size === 'big' ? '160px' : '152px'};
  padding: ${props => props.$size === 'big' ? spacing[6] : spacing[4]};
  border-radius: ${props => props.$size === 'big' ? '16px' : '12px'};
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: transform 0.2s ease, opacity 0.2s ease;
  position: relative;
  overflow: hidden;
  
  /* Background gradients */
  background: 
    linear-gradient(
      ${props => props.$size === 'big' ? '95deg' : '104.68deg'},
      ${props => themeColors[props.$theme].alpha[5]} 2.6%,
      ${props => themeColors[props.$theme].alpha[50]} 50%,
      ${props => themeColors[props.$theme].alpha[0]} 100%
    );
  
  /* Inset shadow */
  box-shadow: 
    inset 0px 0px 12px 0px rgba(255, 255, 255, 0.05),
    inset 0px -8px 32px 0px ${props => themeColors[props.$theme].alpha[10]};
  
  /* Typography */
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeights.bold};
  font-size: ${props => props.$size === 'big' ? '20px' : '16px'};
  line-height: 1;
  letter-spacing: 0;
  color: ${props => themeColors[props.$theme][50]};
  white-space: nowrap;
  
  /* Hover & Active states */
  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`;

const ButtonText = styled.span`
  display: flex;
  align-items: center;
`;

const Arrow = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children = 'Button',
  size = 'big',
  theme = 'wellness',
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <ButtonContainer
      $size={size}
      $theme={theme}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type="button"
    >
      <ButtonText>{children}</ButtonText>
      <Arrow>→</Arrow>
    </ButtonContainer>
  );
};

