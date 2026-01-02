/**
 * Typography Foundation Page
 * Documentation for typography tokens in the design system
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

const TypeSample = styled.div<{ $style: any }>`
  font-family: ${props => props.$style.fontFamily};
  font-size: ${props => props.$style.fontSize};
  font-weight: ${props => props.$style.fontWeight};
  line-height: ${props => props.$style.lineHeight};
  letter-spacing: ${props => props.$style.letterSpacing || '0'};
  text-transform: ${props => props.$style.textTransform || 'none'};
  color: ${colors.neutral[900]};
  margin: ${spacing[3]} 0;
  padding: ${spacing[4]};
  background-color: ${colors.neutral[100]};
  border-radius: 8px;
  border-left: 4px solid ${colors.primary[600]};
`;

const TokenLabel = styled.div`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 12px;
  color: ${colors.neutral[600]};
  margin-bottom: ${spacing[1]};
`;

const TypeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${spacing[6]} 0;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[400].fontSize};
`;

const TableHead = styled.thead`
  background-color: ${colors.neutral[100]};
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.neutral[200]};
`;

const TableHeader = styled.th`
  text-align: left;
  padding: ${spacing[3]} ${spacing[4]};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[900]};
`;

const TableCell = styled.td`
  padding: ${spacing[3]} ${spacing[4]};
  color: ${colors.neutral[600]};
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
`;

export const TypographyPage: React.FC = () => {
  const desktopHeadingSizes = [100, 200, 300, 400, 500, 600, 700, 800];
  const bodySizes = [100, 200, 300, 400];
  const buttonSizes = [100, 200, 300, 400];
  const overlineSizes = [200, 300];
  const mobileHeadingSizes = [100, 200, 300, 400, 500, 600, 700];

  return (
    <DocsLayout currentPath="/foundations/typography">
      <DocsPageHeader
        title="Typography"
        description="Typography tokens ensure consistent text styling across all components. The system includes desktop and mobile variants for optimal readability on all devices."
      />

      <DocsSection>
        <DocsSectionTitle>Usage</DocsSectionTitle>
        <DocsParagraph>
          Import typography tokens and apply them to your components:
        </DocsParagraph>
        <DocsCodeBlock>{`import { typography } from '@avenue/design-system/tokens';

const Heading = styled.h1\`
  font-family: \${typography.fontFamily.primary};
  font-size: \${typography.desktop.heading[100].fontSize};
  font-weight: \${typography.desktop.heading[100].fontWeight};
  line-height: \${typography.desktop.heading[100].lineHeight};
  letter-spacing: \${typography.desktop.heading[100].letterSpacing};
\`;`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Font Family</DocsSectionTitle>
        <DocsParagraph>
          All typography uses the Satoshi font family with fallbacks.
        </DocsParagraph>
        <DocsCodeBlock>{`typography.fontFamily.primary
// "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`}</DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Font Weights</DocsSectionTitle>
        <TypeTable>
          <TableHead>
            <TableRow>
              <TableHeader>Token</TableHeader>
              <TableHeader>Value</TableHeader>
              <TableHeader>Usage</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>fontWeights.regular</TableCell>
              <TableCell>400</TableCell>
              <TableCell>Body text, paragraphs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>fontWeights.medium</TableCell>
              <TableCell>500</TableCell>
              <TableCell>Emphasized text, labels</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>fontWeights.bold</TableCell>
              <TableCell>700</TableCell>
              <TableCell>Headings, buttons, strong emphasis</TableCell>
            </TableRow>
          </tbody>
        </TypeTable>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Desktop Typography</DocsSectionTitle>
        
        <DocsSubsectionTitle>Headings</DocsSubsectionTitle>
        <DocsParagraph>
          Large display text with negative letter spacing for a tighter appearance. All 8 heading sizes.
        </DocsParagraph>
        {desktopHeadingSizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.desktop.heading[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.heading[size as keyof typeof typography.desktop.heading]}>
              Heading {size} - {typography.desktop.heading[size as keyof typeof typography.desktop.heading].fontSize}
            </TypeSample>
          </div>
        ))}
        <DocsCodeBlock>{`typography.desktop.heading[100]  // 72px, -2% letter-spacing
typography.desktop.heading[400]  // 36px, -2% letter-spacing
typography.desktop.heading[800]  // 16px, -2% letter-spacing`}</DocsCodeBlock>

        <DocsSubsectionTitle>Body Text - Regular (400)</DocsSubsectionTitle>
        <DocsParagraph>
          Regular weight for standard content and paragraphs.
        </DocsParagraph>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.desktop.body.regular[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.body.regular[size as keyof typeof typography.desktop.body.regular]}>
              Body Regular {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Body Text - Medium (500)</DocsSubsectionTitle>
        <DocsParagraph>
          Medium weight for emphasized text and labels.
        </DocsParagraph>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.desktop.body.medium[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.body.medium[size as keyof typeof typography.desktop.body.medium]}>
              Body Medium {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Body Text - Bold (700)</DocsSubsectionTitle>
        <DocsParagraph>
          Bold weight for strong emphasis and highlights.
        </DocsParagraph>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.desktop.body.bold[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.body.bold[size as keyof typeof typography.desktop.body.bold]}>
              Body Bold {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Buttons</DocsSubsectionTitle>
        <DocsParagraph>
          Button text with 1:1 line height ratio for precise control.
        </DocsParagraph>
        {buttonSizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.desktop.button[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.button[size as keyof typeof typography.desktop.button]}>
              BUTTON TEXT {size}
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Overlines</DocsSubsectionTitle>
        <DocsParagraph>
          Uppercase labels with increased letter spacing for all-caps style.
        </DocsParagraph>
        {overlineSizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.desktop.overline[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.overline[size as keyof typeof typography.desktop.overline]}>
              Overline Text {size}
            </TypeSample>
          </div>
        ))}
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Mobile Typography</DocsSectionTitle>
        <DocsParagraph>
          Optimized type scale for smaller screens with adjusted sizes.
        </DocsParagraph>

        <DocsSubsectionTitle>Mobile Headings</DocsSubsectionTitle>
        <DocsParagraph>
          Smaller heading scale optimized for mobile devices.
        </DocsParagraph>
        {mobileHeadingSizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.mobile.heading[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.heading[size as keyof typeof typography.mobile.heading]}>
              Mobile Heading {size} - {typography.mobile.heading[size as keyof typeof typography.mobile.heading].fontSize}
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Body - Regular</DocsSubsectionTitle>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.mobile.body.regular[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.body.regular[size as keyof typeof typography.mobile.body.regular]}>
              Mobile Body Regular {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Body - Medium</DocsSubsectionTitle>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.mobile.body.medium[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.body.medium[size as keyof typeof typography.mobile.body.medium]}>
              Mobile Body Medium {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Body - Bold</DocsSubsectionTitle>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.mobile.body.bold[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.body.bold[size as keyof typeof typography.mobile.body.bold]}>
              Mobile Body Bold {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Buttons</DocsSubsectionTitle>
        {buttonSizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.mobile.button[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.button[size as keyof typeof typography.mobile.button]}>
              MOBILE BUTTON {size}
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Overlines</DocsSubsectionTitle>
        {overlineSizes.map((size) => (
          <div key={size}>
            <TokenLabel>typography.mobile.overline[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.overline[size as keyof typeof typography.mobile.overline]}>
              Mobile Overline {size}
            </TypeSample>
          </div>
        ))}
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Typography Scale Summary</DocsSectionTitle>
        <TypeTable>
          <TableHead>
            <TableRow>
              <TableHeader>Category</TableHeader>
              <TableHeader>Desktop Sizes</TableHeader>
              <TableHeader>Mobile Sizes</TableHeader>
              <TableHeader>Weights</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Headings</TableCell>
              <TableCell>8 sizes (100-800)</TableCell>
              <TableCell>7 sizes (100-700)</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Body</TableCell>
              <TableCell>4 sizes (100-400)</TableCell>
              <TableCell>4 sizes (100-400)</TableCell>
              <TableCell>Regular, Medium, Bold</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Buttons</TableCell>
              <TableCell>4 sizes (100-400)</TableCell>
              <TableCell>4 sizes (100-400)</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Overlines</TableCell>
              <TableCell>2 sizes (200, 300)</TableCell>
              <TableCell>2 sizes (200, 300)</TableCell>
              <TableCell>Medium (500)</TableCell>
            </TableRow>
          </tbody>
        </TypeTable>
        <DocsParagraph>
          <strong>Total Typography Tokens: 69</strong>
        </DocsParagraph>
        <DocsParagraph>
          • Desktop: 38 tokens (8 headings + 12 body + 4 buttons + 2 overlines + utilities)
        </DocsParagraph>
        <DocsParagraph>
          • Mobile: 31 tokens (7 headings + 12 body + 4 buttons + 2 overlines + utilities)
        </DocsParagraph>
      </DocsSection>
    </DocsLayout>
  );
};
