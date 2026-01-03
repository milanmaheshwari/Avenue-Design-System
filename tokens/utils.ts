/**
 * Utility functions for working with design tokens
 */

import { colors } from './colors';
import { spacing } from './spacing';

/**
 * Get a color value by path
 * @example getColor('primary', 600) // returns '#4f46e5'
 * @example getColor('comedy', 'alpha', 25) // returns '#ca8a0440'
 */
export const getColor = (...path: (string | number)[]): string => {
  let value: any = colors;
  for (const key of path) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Color path not found: ${path.join('.')}`);
      return '';
    }
  }
  return value;
};

/**
 * Get a spacing value
 * @example getSpacing(4) // returns '16px'
 * @example getSpacing('md') // returns '16px'
 */
export const getSpacing = (key: string | number): string => {
  const value = spacing[key as keyof typeof spacing];
  if (!value) {
    console.warn(`Spacing value not found: ${key}`);
    return '0px';
  }
  return value;
};

/**
 * Convert hex color to RGB values
 * @example hexToRgb('#4f46e5') // returns { r: 79, g: 70, b: 229 }
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Convert hex color to RGBA string
 * @example hexToRgba('#4f46e5', 0.5) // returns 'rgba(79, 70, 229, 0.5)'
 */
export const hexToRgba = (hex: string, alpha: number): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    console.warn(`Invalid hex color: ${hex}`);
    return 'rgba(0, 0, 0, 0)';
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};

/**
 * Get responsive value based on breakpoint
 * Useful for creating responsive styles
 */
export const responsive = <T>(values: {
  base?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}): T | undefined => {
  // This is a helper type for responsive values
  // Actual implementation would depend on your CSS-in-JS solution
  return values.base;
};

/**
 * Create a consistent button style object
 */
export const createButtonStyles = (variant: 'primary' | 'secondary' | 'outline' = 'primary') => {
  const baseStyles = {
    fontFamily: 'Satoshi',
    fontWeight: 700,
    borderRadius: '8px',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: colors.primary[600],
      color: colors.neutral[50],
      '&:hover': {
        backgroundColor: colors.primary[700],
      },
    },
    secondary: {
      backgroundColor: colors.neutral[200],
      color: colors.neutral[900],
      '&:hover': {
        backgroundColor: colors.neutral[400],
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary[600],
      border: `2px solid ${colors.primary[600]}`,
      '&:hover': {
        backgroundColor: colors.primary.alpha[5],
      },
    },
  };

  return {
    ...baseStyles,
    ...variants[variant],
  };
};

/**
 * Apply category color theme
 */
export const getCategoryColor = (
  category: 'comedy' | 'nightlife' | 'sports' | 'music' | 'movies' | 'wellness' | 'themeParks' | 'coffee',
  shade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 = 600
): string => {
  return colors[category][shade];
};
