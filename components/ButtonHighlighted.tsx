/**
 * ButtonHighlighted Component
 * A highlighted button with glow effect and complex gradients
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../tokens';

export type ButtonHighlightedType = 'primary' | 'neutral';

export interface ButtonHighlightedProps {
  /** Button text content */
  children?: React.ReactNode;
  /** Type variant (primary or neutral) */
  type?: ButtonHighlightedType;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
}

const ButtonContainer = styled.button<{ 
  $type: ButtonHighlightedType;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[1]};
  padding: ${spacing[3]} ${spacing[4]};
  border-radius: 12px;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: transform 0.2s ease, opacity 0.2s ease;
  position: relative;
  
  /* Complex background with multiple layers */
  background-image: 
    ${props => props.$type === 'primary' 
      ? `linear-gradient(90deg, ${colors.primary.alpha[5]} 0%, ${colors.primary.alpha[10]} 50.01%, ${colors.primary.alpha[5]} 100%),
         url('data:image/svg+xml;utf8,<svg viewBox="0 0 112 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(25.977 0 0 9.2776 56 40)"><stop stop-color="rgba(79,70,229,0.5)" offset="0"/><stop stop-color="rgba(79,70,229,0)" offset="0.2524"/></radialGradient></defs></svg>'),
         linear-gradient(180deg, ${colors.primary.alpha[0]} 0%, ${colors.primary.alpha[5]} 100%)`
      : `linear-gradient(90deg, ${colors.neutral.light.alpha[5]} 0%, ${colors.neutral.light.alpha[10]} 50.01%, ${colors.neutral.light.alpha[5]} 100%),
         url('data:image/svg+xml;utf8,<svg viewBox="0 0 112 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(25.977 0 0 9.2776 56 40)"><stop stop-color="rgba(250,250,250,0.25)" offset="0"/><stop stop-color="rgba(250,250,250,0)" offset="0.2524"/></radialGradient></defs></svg>'),
         linear-gradient(180deg, ${colors.neutral.light.alpha[0]} 0%, ${colors.neutral.light.alpha[5]} 100%)`
    };
  
  /* External shadow */
  box-shadow: ${props => props.$type === 'primary'
    ? `0px 2px 5px 0px ${colors.primary.alpha[5]}`
    : `0px 2px 5px 0px ${colors.neutral.light.alpha[5]}`
  };
  
  /* Typography */
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeights.bold};
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;
  color: ${colors.neutral[50]};
  white-space: nowrap;
  
  /* Pseudo-element for inset shadows */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    pointer-events: none;
    box-shadow: ${props => props.$type === 'primary'
      ? `inset 0px 0px 12px 0px ${colors.primary.alpha[5]}, inset 0px -8px 32px 0px ${colors.primary.alpha[10]}`
      : `inset 0px 0px 12px 0px ${colors.neutral.light.alpha[5]}, inset 0px -8px 32px 0px ${colors.neutral.light.alpha[5]}`
    };
  }
  
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
  position: relative;
  z-index: 1;
`;

const Arrow = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ButtonHighlighted: React.FC<ButtonHighlightedProps> = ({
  children = 'Sign Up',
  type = 'primary',
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <ButtonContainer
      $type={type}
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

