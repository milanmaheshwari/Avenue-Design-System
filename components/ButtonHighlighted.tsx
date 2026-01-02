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
  border-style: none;
  border-width: 0px;
  border-color: rgba(0, 0, 0, 0);
  border-image: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: transform 0.2s ease, opacity 0.2s ease;
  position: relative;
  
  /* Complex background with multiple layers */
  background: 
    ${props => props.$type === 'primary' 
      ? `linear-gradient(90deg, rgba(79, 70, 229, 0.5) 0%, rgba(0, 0, 0, 0.25) 100%, rgba(79, 70, 229, 0.75) 70%, rgba(17, 0, 119, 1) 35%, rgba(0, 0, 0, 1) 0%)`
      : `linear-gradient(90deg, rgba(250, 250, 250, 0.3) 0%, rgba(250, 250, 250, 0.2) 35%, rgba(250, 250, 250, 0.1) 70%, rgba(0, 0, 0, 0.9) 100%, rgba(0, 0, 0, 0.9) 0%)`
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

