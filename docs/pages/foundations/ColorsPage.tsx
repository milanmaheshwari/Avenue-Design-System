/**
 * Colors Foundation Page
 * Documentation for color tokens in the design system
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import {
  DocsLayout,
  DocsPageHeader,
  DocsSection,
  DocsSectionTitle,
  DocsSubsectionTitle,
  DocsParagraph,
  DocsCodeBlock,
  DocsInlineCode,
} from '../../layouts/DocsLayout';

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${spacing[4]};
  margin: ${spacing[6]} 0;
`;

const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${colors.neutral[200]};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const ColorSwatch = styled.div<{ $color: string }>`
  height: 80px;
  background-color: ${props => props.$color};
`;

const ColorInfo = styled.div`
  padding: ${spacing[3]};
  background-color: ${colors.neutral[50]};
`;

const ColorName = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[400].fontSize};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.neutral[900]};
  margin-bottom: ${spacing[1]};
`;

const ColorValue = styled.div`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 12px;
  color: ${colors.neutral[600]};
`;

const ColorRow = styled.div`
  display: flex;
  gap: ${spacing[2]};
  margin: ${spacing[4]} 0;
  flex-wrap: wrap;
`;

const ColorSample = styled.div<{ $color: string }>`
  flex: 1;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing[3]};
  background-color: ${props => props.$color};
  border-radius: 8px;
  border: 1px solid ${colors.neutral[200]};
`;

const ColorLabel = styled.span<{ $light?: boolean }>`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 12px;
  color: ${props => props.$light ? colors.neutral[50] : colors.neutral[900]};
  margin-top: ${spacing[2]};
`;

export const ColorsPage: React.FC = () => {
  const primaryShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 950];
  const neutralShades = [50, 100, 200, 400, 600, 900, 950];
  const categories = ['comedy', 'nightlife', 'sports', 'music', 'movies', 'wellness', 'themeParks', 'coffee'];

  return (
    <DocsLayout currentPath="/foundations/colors">
      <DocsPageHeader
        title="Colors"
        description="Color tokens define the visual identity and hierarchy of the design system. Use these tokens to maintain consistency across all components and pages."
      />

      <DocsSection>
        <DocsSectionTitle>Usage</DocsSectionTitle>
        <DocsParagraph>
          Import color tokens from the design system and use them in your styled components:
        </DocsParagraph>
        <DocsCodeBlock>{`import { colors } from '@avenue/design-system/tokens';

const Button = styled.button\`
  background-color: \${colors.primary[600]};
  color: \${colors.semantic.labelsPrimary};
\`;`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Primary Colors</DocsSectionTitle>
        <DocsParagraph>
          Primary colors are the main brand colors used for interactive elements, CTAs, and emphasis.
        </DocsParagraph>
        <ColorRow>
          {primaryShades.map((shade) => (
            <ColorSample
              key={shade}
              $color={colors.primary[shade as keyof typeof colors.primary] as string}
            >
              <ColorLabel $light={shade >= 600}>{shade}</ColorLabel>
            </ColorSample>
          ))}
        </ColorRow>
        <DocsCodeBlock>{`colors.primary[600]  // #4f46e5
colors.primary[50]   // #eef2ff`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Neutral Colors</DocsSectionTitle>
        <DocsParagraph>
          Neutral colors provide the foundation for text, backgrounds, and borders.
        </DocsParagraph>
        <ColorRow>
          {neutralShades.map((shade) => (
            <ColorSample
              key={shade}
              $color={colors.neutral[shade as keyof typeof colors.neutral] as string}
            >
              <ColorLabel $light={shade >= 600}>{shade}</ColorLabel>
            </ColorSample>
          ))}
        </ColorRow>
        <DocsCodeBlock>{`colors.neutral[900]  // #171717 (dark text)
colors.neutral[50]   // #fafafa (light background)`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Category Colors</DocsSectionTitle>
        <DocsParagraph>
          Category colors provide thematic variations for different content types. Each category includes a full shade scale.
        </DocsParagraph>
        
        {categories.map((category) => {
          const categoryColors = colors[category as keyof typeof colors] as any;
          const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
          
          return (
            <div key={category} style={{ marginBottom: spacing[8] }}>
              <DocsSubsectionTitle style={{ textTransform: 'capitalize' }}>
                {category === 'themeParks' ? 'Theme Parks' : category}
              </DocsSubsectionTitle>
              <ColorRow>
                {shades.map((shade) => (
                  <ColorSample
                    key={shade}
                    $color={categoryColors[shade]}
                  >
                    <ColorLabel $light={shade >= 600}>{shade}</ColorLabel>
                  </ColorSample>
                ))}
              </ColorRow>
            </div>
          );
        })}
        
        <DocsCodeBlock>{`// All categories have the same shade structure
colors.comedy[50]       // Lightest
colors.comedy[600]      // Base (primary shade)
colors.comedy[950]      // Darkest

// Alpha variants also available
colors.comedy.alpha[25]  // 25% opacity
colors.comedy.alpha[50]  // 50% opacity`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Alpha Variants</DocsSectionTitle>
        <DocsParagraph>
          Alpha variants provide transparency levels for overlays and subtle effects. Available for all color categories.
        </DocsParagraph>
        
        <DocsSubsectionTitle>Primary Alpha</DocsSubsectionTitle>
        <ColorRow>
          {[0, 5, 10, 25, 50, 75, 90].map((alpha) => (
            <ColorSample
              key={alpha}
              $color={colors.primary.alpha[alpha as keyof typeof colors.primary.alpha]}
            >
              <ColorLabel>{alpha}%</ColorLabel>
            </ColorSample>
          ))}
        </ColorRow>
        
        <DocsSubsectionTitle>Neutral Light Alpha</DocsSubsectionTitle>
        <ColorRow>
          {[0, 5, 10, 25, 50, 75, 90].map((alpha) => (
            <ColorSample
              key={alpha}
              $color={colors.neutral.light.alpha[alpha as keyof typeof colors.neutral.light.alpha]}
            >
              <ColorLabel>{alpha}%</ColorLabel>
            </ColorSample>
          ))}
        </ColorRow>
        
        <DocsSubsectionTitle>Neutral Dark Alpha</DocsSubsectionTitle>
        <ColorRow>
          {[0, 5, 10, 25, 50, 75, 90].map((alpha) => (
            <ColorSample
              key={alpha}
              $color={colors.neutral.dark.alpha[alpha as keyof typeof colors.neutral.dark.alpha]}
              style={{ border: '2px solid #e5e5e5' }}
            >
              <ColorLabel $light={alpha >= 50}>{alpha}%</ColorLabel>
            </ColorSample>
          ))}
        </ColorRow>
        
        <DocsCodeBlock>{`// Primary alpha
colors.primary.alpha[5]   // 5% opacity (#4f46e50d)
colors.primary.alpha[50]  // 50% opacity (#4f46e580)
colors.primary.alpha[90]  // 90% opacity (#4f46e5e6)

// Neutral alpha variants
colors.neutral.light.alpha[25]  // Light with 25% opacity
colors.neutral.dark.alpha[75]   // Dark with 75% opacity

// Category alpha (all categories have alpha variants)
colors.comedy.alpha[25]
colors.music.alpha[50]
colors.sports.alpha[75]`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Semantic Colors</DocsSectionTitle>
        <DocsParagraph>
          Semantic colors have specific meanings and use cases.
        </DocsParagraph>
        <ColorGrid>
          <ColorCard>
            <ColorSwatch $color={colors.semantic.labelsPrimary} />
            <ColorInfo>
              <ColorName>Labels Primary</ColorName>
              <ColorValue>{colors.semantic.labelsPrimary}</ColorValue>
            </ColorInfo>
          </ColorCard>
          <ColorCard>
            <ColorSwatch $color={colors.semantic.error} />
            <ColorInfo>
              <ColorName>Error</ColorName>
              <ColorValue>{colors.semantic.error}</ColorValue>
            </ColorInfo>
          </ColorCard>
        </ColorGrid>
      </DocsSection>
    </DocsLayout>
  );
};

