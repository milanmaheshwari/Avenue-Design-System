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
import { useTheme } from '../../contexts/ThemeContext';
import { 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary 
} from '../../utils/themeColors';

const TypeSample = styled.div<{ $style: any; $theme: 'light' | 'dark' }>`
  font-family: ${props => props.$style.fontFamily};
  font-size: ${props => props.$style.fontSize};
  font-weight: ${props => props.$style.fontWeight};
  line-height: ${props => props.$style.lineHeight};
  letter-spacing: ${props => props.$style.letterSpacing || '0'};
  text-transform: ${props => props.$style.textTransform || 'none'};
  color: ${props => props.$theme === 'dark' ? colors.neutral[50] : colors.neutral[900]};
  margin: ${spacing[3]} 0;
  padding: ${spacing[4]};
  background-color: ${props => props.$theme === 'dark' ? '#1a1a1a' : colors.neutral[100]};
  border-radius: 8px;
  border-left: 4px solid ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
  transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease;
`;

const TokenLabel = styled.div<{ $theme: 'light' | 'dark' }>`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 12px;
  color: ${props => getTextColorSecondary(props.$theme)};
  margin-bottom: ${spacing[1]};
  transition: color 200ms ease;
`;

const TypeTable = styled.table<{ $theme: 'light' | 'dark' }>`
  width: 100%;
  border-collapse: collapse;
  margin: ${spacing[6]} 0;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[400].fontSize};
  background-color: ${props => props.$theme === 'dark' ? '#1a1a1a' : 'transparent'};
  border-radius: 8px;
  overflow: hidden;
  transition: background-color 200ms ease;
`;

const TableHead = styled.thead<{ $theme: 'light' | 'dark' }>`
  background-color: ${props => props.$theme === 'dark' ? '#1f1f1f' : colors.neutral[100]};
  transition: background-color 200ms ease;
`;

const TableRow = styled.tr<{ $theme: 'light' | 'dark' }>`
  border-bottom: 1px solid ${props => getBorderColor(props.$theme)};
  transition: border-color 200ms ease;
`;

const TableHeader = styled.th<{ $theme: 'light' | 'dark' }>`
  text-align: left;
  padding: ${spacing[3]} ${spacing[4]};
  font-weight: ${typography.fontWeights.bold};
  color: ${props => getTextColor(props.$theme)};
  transition: color 200ms ease;
`;

const TableCell = styled.td<{ $theme: 'light' | 'dark' }>`
  padding: ${spacing[3]} ${spacing[4]};
  color: ${props => getTextColorSecondary(props.$theme)};
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  transition: color 200ms ease;
`;

export const TypographyPage: React.FC = () => {
  const { theme } = useTheme();
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
        <TypeTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Token</TableHeader>
              <TableHeader $theme={theme}>Value</TableHeader>
              <TableHeader $theme={theme}>Usage</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>fontWeights.regular</TableCell>
              <TableCell $theme={theme}>400</TableCell>
              <TableCell $theme={theme}>Body text, paragraphs</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>fontWeights.medium</TableCell>
              <TableCell $theme={theme}>500</TableCell>
              <TableCell $theme={theme}>Emphasized text, labels</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>fontWeights.bold</TableCell>
              <TableCell $theme={theme}>700</TableCell>
              <TableCell $theme={theme}>Headings, buttons, strong emphasis</TableCell>
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
            <TokenLabel $theme={theme}>typography.desktop.heading[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.heading[size as keyof typeof typography.desktop.heading]} $theme={theme}>
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
            <TokenLabel $theme={theme}>typography.desktop.body.regular[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.body.regular[size as keyof typeof typography.desktop.body.regular]} $theme={theme}>
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
            <TokenLabel $theme={theme}>typography.desktop.body.medium[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.body.medium[size as keyof typeof typography.desktop.body.medium]} $theme={theme}>
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
            <TokenLabel $theme={theme}>typography.desktop.body.bold[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.body.bold[size as keyof typeof typography.desktop.body.bold]} $theme={theme}>
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
            <TokenLabel $theme={theme}>typography.desktop.button[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.button[size as keyof typeof typography.desktop.button]} $theme={theme}>
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
            <TokenLabel $theme={theme}>typography.desktop.overline[{size}]</TokenLabel>
            <TypeSample $style={typography.desktop.overline[size as keyof typeof typography.desktop.overline]} $theme={theme}>
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
            <TokenLabel $theme={theme}>typography.mobile.heading[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.heading[size as keyof typeof typography.mobile.heading]} $theme={theme}>
              Mobile Heading {size} - {typography.mobile.heading[size as keyof typeof typography.mobile.heading].fontSize}
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Body - Regular</DocsSubsectionTitle>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel $theme={theme}>typography.mobile.body.regular[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.body.regular[size as keyof typeof typography.mobile.body.regular]} $theme={theme}>
              Mobile Body Regular {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Body - Medium</DocsSubsectionTitle>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel $theme={theme}>typography.mobile.body.medium[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.body.medium[size as keyof typeof typography.mobile.body.medium]} $theme={theme}>
              Mobile Body Medium {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Body - Bold</DocsSubsectionTitle>
        {bodySizes.map((size) => (
          <div key={size}>
            <TokenLabel $theme={theme}>typography.mobile.body.bold[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.body.bold[size as keyof typeof typography.mobile.body.bold]} $theme={theme}>
              Mobile Body Bold {size} - The quick brown fox jumps over the lazy dog
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Buttons</DocsSubsectionTitle>
        {buttonSizes.map((size) => (
          <div key={size}>
            <TokenLabel $theme={theme}>typography.mobile.button[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.button[size as keyof typeof typography.mobile.button]} $theme={theme}>
              MOBILE BUTTON {size}
            </TypeSample>
          </div>
        ))}

        <DocsSubsectionTitle>Mobile Overlines</DocsSubsectionTitle>
        {overlineSizes.map((size) => (
          <div key={size}>
            <TokenLabel $theme={theme}>typography.mobile.overline[{size}]</TokenLabel>
            <TypeSample $style={typography.mobile.overline[size as keyof typeof typography.mobile.overline]} $theme={theme}>
              Mobile Overline {size}
            </TypeSample>
          </div>
        ))}
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Typography Scale Summary</DocsSectionTitle>
        <TypeTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Category</TableHeader>
              <TableHeader $theme={theme}>Desktop Sizes</TableHeader>
              <TableHeader $theme={theme}>Mobile Sizes</TableHeader>
              <TableHeader $theme={theme}>Weights</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Headings</TableCell>
              <TableCell $theme={theme}>8 sizes (100-800)</TableCell>
              <TableCell $theme={theme}>7 sizes (100-700)</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Body</TableCell>
              <TableCell $theme={theme}>4 sizes (100-400)</TableCell>
              <TableCell $theme={theme}>4 sizes (100-400)</TableCell>
              <TableCell $theme={theme}>Regular, Medium, Bold</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Buttons</TableCell>
              <TableCell $theme={theme}>4 sizes (100-400)</TableCell>
              <TableCell $theme={theme}>4 sizes (100-400)</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Overlines</TableCell>
              <TableCell $theme={theme}>2 sizes (200, 300)</TableCell>
              <TableCell $theme={theme}>2 sizes (200, 300)</TableCell>
              <TableCell $theme={theme}>Medium (500)</TableCell>
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
