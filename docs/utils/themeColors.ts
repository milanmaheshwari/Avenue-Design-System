/**
 * Theme-aware color utilities
 * Provides color tokens that adapt to light/dark mode
 */

import { colors } from '../../tokens';
import { ThemeMode } from '../contexts/ThemeContext';

/**
 * Get theme-aware background color
 */
export const getBackgroundColor = (theme: ThemeMode): string => {
  return theme === 'dark' ? colors.neutral[950] : colors.neutral[50];
};

/**
 * Get theme-aware surface color (for cards, panels, etc.)
 */
export const getSurfaceColor = (theme: ThemeMode): string => {
  return theme === 'dark' ? colors.neutral[900] : colors.neutral[50];
};

/**
 * Get theme-aware border color
 */
export const getBorderColor = (theme: ThemeMode): string => {
  return theme === 'dark' ? '#1f1f1f' : colors.neutral[200];
};

/**
 * Get theme-aware text color (primary)
 */
export const getTextColor = (theme: ThemeMode): string => {
  return theme === 'dark' ? colors.neutral[50] : colors.neutral[900];
};

/**
 * Get theme-aware text color (secondary)
 */
export const getTextColorSecondary = (theme: ThemeMode): string => {
  return theme === 'dark' ? colors.neutral[400] : colors.neutral[600];
};

/**
 * Get theme-aware code block background
 */
export const getCodeBlockBackground = (theme: ThemeMode): string => {
  return theme === 'dark' ? colors.neutral[900] : colors.neutral[100];
};

/**
 * Get theme-aware code block border
 */
export const getCodeBlockBorder = (theme: ThemeMode): string => {
  return theme === 'dark' ? '#1f1f1f' : colors.neutral[200];
};

/**
 * Get theme-aware code block text
 */
export const getCodeBlockText = (theme: ThemeMode): string => {
  return theme === 'dark' ? colors.neutral[50] : colors.neutral[900];
};

/**
 * Get theme-aware inline code background
 */
export const getInlineCodeBackground = (theme: ThemeMode): string => {
  return theme === 'dark' 
    ? colors.primary.alpha[25] 
    : colors.primary.alpha[5];
};

/**
 * Get theme-aware hover background for interactive elements
 */
export const getHoverBackground = (theme: ThemeMode): string => {
  return theme === 'dark'
    ? colors.primary.alpha[10]
    : colors.primary.alpha[5];
};
