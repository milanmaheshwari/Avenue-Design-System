/**
 * Avenue Design System - Design Tokens
 * Central export for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './utils';
export * from './cssVariables';

import { colors } from './colors';
import { typography } from './typography';
import { spacing, spacingSemantic } from './spacing';

/**
 * Complete theme object containing all design tokens
 */
export const theme = {
  colors,
  typography,
  spacing: {
    ...spacing,
    semantic: spacingSemantic,
  },
} as const;

export type Theme = typeof theme;

export default theme;
