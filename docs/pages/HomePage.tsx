/**
 * Documentation Home Page
 * Landing page for the design system documentation
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../tokens';
import { DocsLayout } from '../layouts/DocsLayout';

const HeroSection = styled.div`
  padding: ${spacing[16]} 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[200].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[200].lineHeight};
  letter-spacing: ${typography.desktop.heading[200].letterSpacing};
  color: ${colors.neutral[900]};
  margin: 0 0 ${spacing[6]} 0;
  
  @media (max-width: 768px) {
    font-size: ${typography.mobile.heading[100].fontSize};
  }
`;

const HeroDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[100].fontSize};
  line-height: ${typography.desktop.body.regular[100].lineHeight};
  color: ${colors.neutral[600]};
  margin: 0 auto;
  max-width: 720px;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[8]};
  margin: ${spacing[12]} 0;
`;

const SectionCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 12px;
  padding: ${spacing[6]};
  border: 1px solid ${colors.neutral[200]};
`;

const SectionTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[700].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[900]};
  margin: 0 0 ${spacing[3]} 0;
`;

const SectionDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${colors.neutral[600]};
  margin: 0;
`;

const SectionLink = styled.a`
  display: inline-block;
  margin-top: ${spacing[4]};
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.primary[600]};
  text-decoration: none;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: ${colors.primary[700]};
    text-decoration: underline;
  }
`;

export const HomePage: React.FC = () => {
  return (
    <DocsLayout currentPath="/">
      <HeroSection>
        <HeroTitle>Avenue Design System</HeroTitle>
        <HeroDescription>
          A comprehensive design system with tokens and components built for consistency,
          scalability, and developer experience.
        </HeroDescription>
      </HeroSection>

      <SectionGrid>
        <SectionCard>
          <SectionTitle>Components</SectionTitle>
          <SectionDescription>
            Production-ready React components built with design tokens. Fully documented
            with variants, specifications, behavior, and accessibility guidelines.
          </SectionDescription>
          <SectionLink href="/components/add-item">View Components →</SectionLink>
        </SectionCard>

        <SectionCard>
          <SectionTitle>Colors</SectionTitle>
          <SectionDescription>
            Complete color system with primary, neutral, and category colors. Includes
            alpha variants for transparency and semantic colors for specific use cases.
          </SectionDescription>
          <SectionLink href="/foundations/colors">Explore Colors →</SectionLink>
        </SectionCard>

        <SectionCard>
          <SectionTitle>Typography</SectionTitle>
          <SectionDescription>
            Typography system with desktop and mobile variants. Includes headings, body text,
            buttons, and overlines with consistent sizing and spacing.
          </SectionDescription>
          <SectionLink href="/foundations/typography">View Typography →</SectionLink>
        </SectionCard>

        <SectionCard>
          <SectionTitle>Spacing</SectionTitle>
          <SectionDescription>
            8px-based spacing scale with semantic aliases. Create consistent rhythm and
            hierarchy throughout your interface with our spacing tokens.
          </SectionDescription>
          <SectionLink href="/foundations/spacing">Explore Spacing →</SectionLink>
        </SectionCard>
      </SectionGrid>
    </DocsLayout>
  );
};

