/**
 * Theme Toggle Component
 * Button to switch between light and dark mode
 */

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { colors, spacing, typography } from '../../tokens';
import { getTextColor, getBorderColor, getHoverBackground } from '../utils/themeColors';

const ToggleButton = styled.button<{ $theme: 'light' | 'dark' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]};
  padding: ${spacing[2]} ${spacing[3]};
  background-color: transparent;
  border: 1px solid ${props => getBorderColor(props.$theme)};
  border-radius: 8px;
  color: ${props => getTextColor(props.$theme)};
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background-color: ${props => getHoverBackground(props.$theme)};
    border-color: ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:focus {
    outline: 2px solid ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
    outline-offset: 2px;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton 
      onClick={toggleTheme}
      $theme={theme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Icon>{theme === 'light' ? '🌙' : '☀️'}</Icon>
      <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </ToggleButton>
  );
};
