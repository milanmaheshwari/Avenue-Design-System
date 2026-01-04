/**
 * Global Styles
 * Reset and base styles for the documentation site
 */

import { createGlobalStyle } from 'styled-components';
import { colors, typography } from '../../tokens';

export const GlobalStyles = createGlobalStyle`
  /* Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${typography.fontFamily.primary};
    line-height: 1.5;
    transition: background-color 200ms ease, color 200ms ease;
  }

  /* Theme-aware styles using data-theme attribute */
  body {
    color: ${colors.neutral[900]};
    background-color: ${colors.neutral[50]};
  }

  [data-theme="dark"] body {
    color: ${colors.neutral[50]};
    background-color: ${colors.neutral[950]};
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid ${colors.primary[600]};
    outline-offset: 2px;
  }

  /* Scrollbar styles (Webkit) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.neutral[100]};
  }

  [data-theme="dark"] ::-webkit-scrollbar-track {
    background: ${colors.neutral[900]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.neutral[400]};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.neutral[600]};
  }

  [data-theme="dark"] ::-webkit-scrollbar-thumb {
    background: ${colors.neutral[600]};
  }

  [data-theme="dark"] ::-webkit-scrollbar-thumb:hover {
    background: ${colors.neutral[400]};
  }

  /* Selection */
  ::selection {
    background-color: ${colors.primary.alpha[25]};
    color: ${colors.neutral[900]};
  }

  [data-theme="dark"] ::selection {
    background-color: ${colors.primary.alpha[25]};
    color: ${colors.neutral[50]};
  }
`;

