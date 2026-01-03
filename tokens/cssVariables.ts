/**
 * CSS Variables Export
 * For use in vanilla CSS or CSS-in-JS solutions that prefer CSS custom properties
 */

import { colors } from './colors';
import { spacing, spacingSemantic } from './spacing';

/**
 * Generates a CSS string with all design tokens as CSS custom properties
 * Can be injected into a style tag or used with styled-components global styles
 */
export const generateCSSVariables = () => {
  const cssVars: string[] = [':root {'];

  // Colors - Primary
  Object.entries(colors.primary).forEach(([key, value]) => {
    if (key === 'alpha') {
      Object.entries(value).forEach(([alphaKey, alphaValue]) => {
        cssVars.push(`  --color-primary-alpha-${alphaKey}: ${alphaValue};`);
      });
    } else {
      cssVars.push(`  --color-primary-${key}: ${value};`);
    }
  });

  // Colors - Neutral
  Object.entries(colors.neutral).forEach(([key, value]) => {
    if (key === 'light' || key === 'dark') {
      Object.entries(value.alpha).forEach(([alphaKey, alphaValue]) => {
        cssVars.push(`  --color-neutral-${key}-alpha-${alphaKey}: ${alphaValue};`);
      });
    } else {
      cssVars.push(`  --color-neutral-${key}: ${value};`);
    }
  });

  // Colors - Categories
  const categories = ['comedy', 'nightlife', 'sports', 'music', 'movies', 'wellness', 'themeParks', 'coffee'];
  categories.forEach(category => {
    const categoryColors = colors[category as keyof typeof colors] as any;
    Object.entries(categoryColors).forEach(([key, value]) => {
      if (key === 'alpha') {
        Object.entries(value as object).forEach(([alphaKey, alphaValue]) => {
          cssVars.push(`  --color-${category}-alpha-${alphaKey}: ${alphaValue};`);
        });
      } else {
        cssVars.push(`  --color-${category}-${key}: ${value};`);
      }
    });
  });

  // Colors - Semantic
  cssVars.push(`  --color-semantic-success: ${colors.semantic.success};`);
  cssVars.push(`  --color-semantic-info: ${colors.semantic.info};`);
  cssVars.push(`  --color-semantic-error: ${colors.semantic.error};`);
  cssVars.push(`  --color-semantic-warning: ${colors.semantic.warning};`);

  // Spacing
  Object.entries(spacing).forEach(([key, value]) => {
    cssVars.push(`  --spacing-${key}: ${value};`);
  });

  // Spacing Semantic
  Object.entries(spacingSemantic).forEach(([key, value]) => {
    cssVars.push(`  --spacing-${key}: ${value};`);
  });

  cssVars.push('}');

  return cssVars.join('\n');
};

/**
 * CSS variables as a string, ready to be injected
 */
export const cssVariablesString = generateCSSVariables();

/**
 * Helper to create a style tag with CSS variables
 */
export const injectCSSVariables = () => {
  if (typeof document !== 'undefined') {
    const styleTag = document.createElement('style');
    styleTag.id = 'avenue-design-tokens';
    styleTag.innerHTML = cssVariablesString;
    document.head.appendChild(styleTag);
  }
};

export default cssVariablesString;
