/**
 * Documentation Home Page
 * Landing page for the design system documentation
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../tokens';
import { DocsLayout } from '../layouts/DocsLayout';
import { useTheme } from '../contexts/ThemeContext';
import { 
  getSurfaceColor, 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary 
} from '../utils/themeColors';

const HeroSection = styled.div`
  padding: ${spacing[16]} 0;
  text-align: center;
`;

const HeroTitle = styled.h1<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[200].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[200].lineHeight};
  letter-spacing: ${typography.desktop.heading[200].letterSpacing};
  color: ${props => getTextColor(props.$theme)};
  margin: 0 0 ${spacing[6]} 0;
  transition: color 200ms ease;
  
  @media (max-width: 768px) {
    font-size: ${typography.mobile.heading[100].fontSize};
  }
`;

const HeroDescription = styled.p<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[100].fontSize};
  line-height: ${typography.desktop.body.regular[100].lineHeight};
  color: ${props => getTextColorSecondary(props.$theme)};
  margin: 0 auto;
  max-width: 720px;
  transition: color 200ms ease;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[8]};
  margin: ${spacing[12]} 0;
`;

const SectionCard = styled.div<{ $theme: 'light' | 'dark' }>`
  background-color: ${props => getSurfaceColor(props.$theme)};
  border-radius: 12px;
  padding: ${spacing[6]};
  border: 1px solid ${props => getBorderColor(props.$theme)};
  transition: background-color 200ms ease, border-color 200ms ease;
`;

const SectionTitle = styled.h3<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[700].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${props => getTextColor(props.$theme)};
  margin: 0 0 ${spacing[3]} 0;
  transition: color 200ms ease;
`;

const SectionDescription = styled.p<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${props => getTextColorSecondary(props.$theme)};
  margin: 0;
  transition: color 200ms ease;
`;

const SectionLink = styled.a<{ $theme: 'light' | 'dark' }>`
  display: inline-block;
  margin-top: ${spacing[4]};
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  color: ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
  text-decoration: none;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: ${props => props.$theme === 'dark' ? colors.primary[300] : colors.primary[700]};
    text-decoration: underline;
  }
`;

export const HomePage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <DocsLayout currentPath="/">
      <HeroSection>
        <HeroTitle $theme={theme}>Avenue Design System</HeroTitle>
        <HeroDescription $theme={theme}>
          A comprehensive design system with tokens and components built for consistency,
          scalability, and developer experience.
        </HeroDescription>
      </HeroSection>

      <SectionGrid>
        <SectionCard $theme={theme}>
          <SectionTitle $theme={theme}>Colors</SectionTitle>
          <SectionDescription $theme={theme}>
            Complete color system with primary, neutral, and category colors. Includes
            alpha variants for transparency and semantic colors for specific use cases.
          </SectionDescription>
          <SectionLink href="/foundations/colors" $theme={theme}>Explore Colors →</SectionLink>
        </SectionCard>

        <SectionCard $theme={theme}>
          <SectionTitle $theme={theme}>Typography</SectionTitle>
          <SectionDescription $theme={theme}>
            Typography system with desktop and mobile variants. Includes headings, body text,
            buttons, and overlines with consistent sizing and spacing.
          </SectionDescription>
          <SectionLink href="/foundations/typography" $theme={theme}>View Typography →</SectionLink>
        </SectionCard>

        <SectionCard $theme={theme}>
          <SectionTitle $theme={theme}>Spacing</SectionTitle>
          <SectionDescription $theme={theme}>
            8px-based spacing scale with semantic aliases. Create consistent rhythm and
            hierarchy throughout your interface with our spacing tokens.
          </SectionDescription>
          <SectionLink href="/foundations/spacing" $theme={theme}>Explore Spacing →</SectionLink>
        </SectionCard>

        <SectionCard $theme={theme}>
          <SectionTitle $theme={theme}>Components</SectionTitle>
          <SectionDescription $theme={theme}>
            Production-ready React components built with design tokens. Fully documented
            with variants, specifications, behavior, and accessibility guidelines.
          </SectionDescription>
          <SectionLink href="/components/add-item" $theme={theme}>View Components →</SectionLink>
        </SectionCard>
      </SectionGrid>
    </DocsLayout>
  );
};

