/**
 * Spacing Foundation Page
 * Documentation for spacing tokens in the design system
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
} from '../../layouts/DocsLayout';

const SpacingGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  margin: ${spacing[6]} 0;
`;

const SpacingRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
  padding: ${spacing[3]};
  background-color: ${colors.neutral[100]};
  border-radius: 8px;
`;

const SpacingVisual = styled.div<{ $size: string }>`
  height: 40px;
  width: ${props => props.$size};
  background-color: ${colors.primary[600]};
  border-radius: 4px;
`;

const SpacingLabel = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
`;

const TokenName = styled.span`
  color: ${colors.neutral[900]};
  font-weight: ${typography.fontWeights.medium};
`;

const TokenValue = styled.span`
  color: ${colors.neutral[600]};
`;

const SpacingExample = styled.div`
  margin: ${spacing[6]} 0;
  padding: ${spacing[6]};
  background-color: ${colors.neutral[100]};
  border-radius: 12px;
  border: 2px dashed ${colors.neutral[300]};
`;

const ExampleBox = styled.div<{ $spacing: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.$spacing};
  background-color: ${colors.primary[100]};
  border: 2px solid ${colors.primary[600]};
  border-radius: 8px;
  color: ${colors.primary[700]};
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[400].fontSize};
  font-weight: ${typography.fontWeights.medium};
`;

export const SpacingPage: React.FC = () => {
  const spacingTokens = [
    { key: 0, value: '0px' },
    { key: 1, value: '4px' },
    { key: 2, value: '8px' },
    { key: 3, value: '12px' },
    { key: 4, value: '16px' },
    { key: 6, value: '24px' },
    { key: 8, value: '32px' },
    { key: 12, value: '48px' },
    { key: 16, value: '64px' },
    { key: 24, value: '96px' },
  ];

  return (
    <DocsLayout currentPath="/foundations/spacing">
      <DocsPageHeader
        title="Spacing"
        description="Spacing tokens create consistent rhythm and hierarchy throughout the interface. Based on an 8px grid system for harmonious layouts."
      />

      <DocsSection>
        <DocsSectionTitle>Usage</DocsSectionTitle>
        <DocsParagraph>
          Import spacing tokens and apply them to margins, padding, and gaps:
        </DocsParagraph>
        <DocsCodeBlock>{`import { spacing } from '@avenue/design-system/tokens';

const Card = styled.div\`
  padding: \${spacing[6]};
  margin-bottom: \${spacing[4]};
  gap: \${spacing[3]};
\`;`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Spacing Scale</DocsSectionTitle>
        <DocsParagraph>
          The spacing scale follows an 8px base unit for consistent alignment and visual rhythm.
        </DocsParagraph>
        <SpacingGrid>
          {spacingTokens.map(({ key, value }) => (
            <SpacingRow key={key}>
              <SpacingVisual $size={value} />
              <SpacingLabel>
                <TokenName>spacing[{key}]</TokenName>
                <TokenValue>{value}</TokenValue>
              </SpacingLabel>
            </SpacingRow>
          ))}
        </SpacingGrid>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Semantic Spacing</DocsSectionTitle>
        <DocsParagraph>
          Semantic aliases provide meaningful names for common spacing values.
        </DocsParagraph>
        <DocsCodeBlock>{`spacing.semantic.xs    // 4px
spacing.semantic.sm    // 8px
spacing.semantic.md    // 16px
spacing.semantic.lg    // 24px
spacing.semantic.xl    // 32px
spacing.semantic['2xl']  // 48px
spacing.semantic['3xl']  // 64px`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Examples</DocsSectionTitle>
        
        <DocsSubsectionTitle>Padding</DocsSubsectionTitle>
        <DocsParagraph>Use spacing tokens for consistent padding:</DocsParagraph>
        <SpacingExample>
          <ExampleBox $spacing={spacing[4]}>
            padding: spacing[4] (16px)
          </ExampleBox>
        </SpacingExample>
        <SpacingExample>
          <ExampleBox $spacing={spacing[8]}>
            padding: spacing[8] (32px)
          </ExampleBox>
        </SpacingExample>

        <DocsSubsectionTitle>Gaps</DocsSubsectionTitle>
        <DocsParagraph>Use spacing for gaps between flex/grid items:</DocsParagraph>
        <DocsCodeBlock>{`const Container = styled.div\`
  display: flex;
  gap: \${spacing[4]};  // 16px gap between items
\`;

const Grid = styled.div\`
  display: grid;
  gap: \${spacing[6]};  // 24px gap
\`;`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Guidelines</DocsSectionTitle>
        <DocsParagraph>
          <strong>Do:</strong> Use spacing tokens for all margins, padding, and gaps
        </DocsParagraph>
        <DocsParagraph>
          <strong>Do:</strong> Prefer semantic aliases for common use cases
        </DocsParagraph>
        <DocsParagraph>
          <strong>Do:</strong> Use larger spacing values (8+) for section separation
        </DocsParagraph>
        <DocsParagraph>
          <strong>Don't:</strong> Use arbitrary pixel values - always use tokens
        </DocsParagraph>
        <DocsParagraph>
          <strong>Don't:</strong> Create inconsistent spacing by mixing systems
        </DocsParagraph>
      </DocsSection>
    </DocsLayout>
  );
};

