/**
 * Logo Component Documentation Page
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { Logo } from '../../../components';
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
  getSurfaceColor, 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary 
} from '../../utils/themeColors';

const ComponentDemo = styled.div`
  background-color: ${colors.neutral[950]};
  padding: ${spacing[8]};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};
  margin-bottom: ${spacing[8]};
`;

const DemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[6]};
`;

const DemoLabel = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.neutral.light.alpha[90]};
  min-width: 140px;
`;

const SpecTable = styled.table<{ $theme: 'light' | 'dark' }>`
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
  transition: color 200ms ease;
`;

const CodeCell = styled(TableCell)<{ $theme: 'light' | 'dark' }>`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  color: ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
  transition: color 200ms ease;
`;

export function LogoPage() {
  const { theme } = useTheme();
  
  return (
    <DocsLayout currentPath="/components/logo">
      <DocsPageHeader
        title="Logo"
        description="The Avenue Ticket logo component with two size variants. Use this component to display the brand logo consistently across your application."
      />

      {/* Overview */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The Logo component displays the Avenue Ticket brand mark with the icon and wordmark. 
          It supports two size variants for use in different contexts: big for desktop headers 
          and small for compact layouts or mobile navigation.
        </DocsParagraph>
        
        <ComponentDemo>
          <DemoRow>
            <Logo size="big" />
          </DemoRow>
        </ComponentDemo>
      </DocsSection>

      {/* Variants */}
      <DocsSection>
        <DocsSectionTitle>Variants</DocsSectionTitle>
        
        <DocsSubsectionTitle>Size Variants</DocsSubsectionTitle>
        <DocsParagraph>
          The logo comes in two sizes optimized for different screen sizes and layouts.
        </DocsParagraph>
        
        <ComponentDemo>
          <DemoRow>
            <DemoLabel>Big (120×36px)</DemoLabel>
            <Logo size="big" />
          </DemoRow>
          <DemoRow>
            <DemoLabel>Small (80×24px)</DemoLabel>
            <Logo size="small" />
          </DemoRow>
        </ComponentDemo>
      </DocsSection>

      {/* Specifications */}
      <DocsSection>
        <DocsSectionTitle>Specifications</DocsSectionTitle>
        
        <DocsSubsectionTitle>Dimensions</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Size</TableHeader>
              <TableHeader $theme={theme}>Width</TableHeader>
              <TableHeader $theme={theme}>Height</TableHeader>
              <TableHeader $theme={theme}>Use Case</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>big</CodeCell>
              <TableCell $theme={theme}>120px</TableCell>
              <TableCell $theme={theme}>36px</TableCell>
              <TableCell $theme={theme}>Desktop headers, landing pages</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>small</CodeCell>
              <TableCell $theme={theme}>80px</TableCell>
              <TableCell $theme={theme}>24px</TableCell>
              <TableCell $theme={theme}>Mobile navigation, compact layouts</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Component Structure</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Container with relative positioning for proper alignment</li>
          <li>Icon element (left) with vertical centering</li>
          <li>Text element (right) with Avenue Ticket wordmark</li>
          <li>All assets are SVG for optimal scaling and performance</li>
        </ul>
      </DocsSection>

      {/* Usage Guidelines */}
      <DocsSection>
        <DocsSectionTitle>Usage Guidelines</DocsSectionTitle>
        
        <DocsSubsectionTitle>When to Use</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Main navigation headers and app bars</li>
          <li>Landing pages and marketing materials</li>
          <li>Authentication screens (login, signup)</li>
          <li>Footer branding sections</li>
        </ul>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Use big size for desktop viewport (≥768px)</li>
          <li>Use small size for mobile viewport (&lt;768px)</li>
          <li>Ensure adequate spacing around the logo (minimum 16px)</li>
          <li>Place on dark backgrounds for optimal contrast</li>
          <li>Maintain the aspect ratio — never stretch or distort</li>
          <li>Don't modify colors or apply filters to the logo</li>
          <li>Keep the logo in the top-left corner for navigation headers</li>
        </ul>

        <DocsSubsectionTitle>Accessibility</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Logo images include descriptive alt text</li>
          <li>Container is display: inline-block for proper layout</li>
          <li>SVG assets are optimized for screen readers</li>
          <li>Consider wrapping in a link for navigation to home</li>
        </ul>
      </DocsSection>

      {/* Props */}
      <DocsSection>
        <DocsSectionTitle>Props</DocsSectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Prop</TableHeader>
              <TableHeader $theme={theme}>Type</TableHeader>
              <TableHeader $theme={theme}>Default</TableHeader>
              <TableHeader $theme={theme}>Description</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>size</CodeCell>
              <CodeCell $theme={theme}>'big' | 'small'</CodeCell>
              <CodeCell $theme={theme}>'big'</CodeCell>
              <TableCell $theme={theme}>Size variant of the logo</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>className</CodeCell>
              <CodeCell $theme={theme}>string</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Additional CSS class</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      {/* Developer Code */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { Logo } from '@avenue/design-system';

// Big size (default)
<Logo size="big" />

// Small size
<Logo size="small" />`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Navigation Link</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { Logo } from '@avenue/design-system';
import { Link } from 'react-router-dom';

<Link to="/" aria-label="Go to homepage">
  <Logo size="big" />
</Link>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Responsive Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { Logo } from '@avenue/design-system';
import { useMediaQuery } from './hooks/useMediaQuery';

function Header() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  return (
    <header>
      <Logo size={isMobile ? 'small' : 'big'} />
    </header>
  );
}`}</DocsCodeBlock>

        <DocsSubsectionTitle>In Navigation Bar</DocsSubsectionTitle>
        <DocsCodeBlock>{`import React from 'react';
import { Logo } from '@avenue/design-system';
import styled from 'styled-components';

const NavBar = styled.nav\`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: #000;
\`;

function Navigation() {
  return (
    <NavBar>
      <a href="/" aria-label="Avenue Ticket Home">
        <Logo size="big" />
      </a>
      {/* Other nav items */}
    </NavBar>
  );
}`}</DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
}
