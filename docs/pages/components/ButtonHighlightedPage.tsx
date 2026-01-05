/**
 * ButtonHighlighted Component Documentation Page
 * Comprehensive documentation following component-page-command rules
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { ButtonHighlighted } from '../../../components/ButtonHighlighted';
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
  flex-wrap: wrap;
  gap: ${spacing[4]};
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing[8]};
`;

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing[6]};
  margin-bottom: ${spacing[8]};
`;

const VariantCard = styled.div<{ $theme: 'light' | 'dark' }>`
  background-color: ${props => getSurfaceColor(props.$theme)};
  border: 1px solid ${props => getBorderColor(props.$theme)};
  border-radius: 12px;
  padding: ${spacing[6]};
  transition: background-color 200ms ease, border-color 200ms ease;
`;

const VariantLabel = styled.div<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  color: ${props => getTextColorSecondary(props.$theme)};
  margin-bottom: ${spacing[4]};
  text-align: center;
  transition: color 200ms ease;
`;

const VariantPreview = styled.div`
  background-color: ${colors.neutral[950]};
  padding: ${spacing[6]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
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

export const ButtonHighlightedPage = () => {
  const { theme } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  return (
    <DocsLayout>
      <DocsPageHeader title="Button Highlighted" />
      
      {/* Overview */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The Button Highlighted is a premium call-to-action button with sophisticated glow effects and multi-layered gradients. 
          It features complex background compositions including linear gradients, radial gradients, and multiple shadow layers 
          to create a highlighted, eye-catching appearance. Available in Primary and Neutral variants for different contexts.
        </DocsParagraph>
        
        <ComponentDemo>
          <ButtonHighlighted type="primary">Sign Up</ButtonHighlighted>
          <ButtonHighlighted type="neutral">Sign Up</ButtonHighlighted>
        </ComponentDemo>
      </DocsSection>

      {/* Variants */}
      <DocsSection>
        <DocsSectionTitle>Variants</DocsSectionTitle>
        
        <DocsSubsectionTitle>Type Variants</DocsSubsectionTitle>
        <DocsParagraph>
          The button comes in two type variants with different visual emphasis and use cases.
        </DocsParagraph>
        
        <VariantGrid>
          <VariantCard $theme={theme}>
            <VariantLabel $theme={theme}>Primary</VariantLabel>
            <VariantPreview>
              <ButtonHighlighted type="primary">Sign Up</ButtonHighlighted>
            </VariantPreview>
          </VariantCard>
          
          <VariantCard $theme={theme}>
            <VariantLabel $theme={theme}>Neutral</VariantLabel>
            <VariantPreview>
              <ButtonHighlighted type="neutral">Sign Up</ButtonHighlighted>
            </VariantPreview>
          </VariantCard>
        </VariantGrid>
      </DocsSection>

      {/* Specs */}
      <DocsSection>
        <DocsSectionTitle>Specifications</DocsSectionTitle>
        
        <DocsSubsectionTitle>Dimensions</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Property</TableHeader>
              <TableHeader $theme={theme}>Value</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Padding</TableCell>
              <TableCell $theme={theme}>12px 16px (vertical horizontal)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Border Radius</TableCell>
              <TableCell $theme={theme}>12px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Font Size</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Gap</TableCell>
              <TableCell $theme={theme}>4px (between text and arrow)</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Typography</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Font Family: Satoshi</li>
          <li>Font Weight: Bold (700)</li>
          <li>Font Size: 16px</li>
          <li>Line Height: 1</li>
          <li>Letter Spacing: 0</li>
          <li>Color: Neutral 50 (white)</li>
        </ul>

        <DocsSubsectionTitle>Visual Effects</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li><strong>Primary:</strong> Blue gradient glow with 50% opacity radial gradient at center</li>
          <li><strong>Neutral:</strong> White gradient glow with 25% opacity radial gradient at center</li>
          <li><strong>Background layers:</strong> Horizontal gradient (5% → 10% → 5%), radial gradient (SVG), vertical gradient (0% → 5%)</li>
          <li><strong>External shadow:</strong> 2px blur with 5% alpha color</li>
          <li><strong>Inset shadows:</strong> 12px blur + 32px bottom shadow</li>
          <li><strong>Hover:</strong> -1px translateY for subtle lift</li>
        </ul>
      </DocsSection>

      {/* Behavior */}
      <DocsSection>
        <DocsSectionTitle>Behavior</DocsSectionTitle>
        
        <DocsSubsectionTitle>Interactive States</DocsSubsectionTitle>
        <ComponentDemo>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4], alignItems: 'center' }}>
            <ButtonHighlighted 
              type="primary"
              onClick={() => setClickCount(clickCount + 1)}
            >
              Click Me ({clickCount})
            </ButtonHighlighted>
            <ButtonHighlighted type="neutral" disabled>
              Disabled
            </ButtonHighlighted>
          </div>
        </ComponentDemo>
        
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li><strong>Default:</strong> Full glow effect with multi-layer gradients</li>
          <li><strong>Hover:</strong> Subtle lift with -1px vertical translation</li>
          <li><strong>Active:</strong> Returns to default position on click</li>
          <li><strong>Disabled:</strong> 50% opacity, cursor changes to not-allowed, no hover effects</li>
          <li><strong>Focus:</strong> Maintains accessibility focus states</li>
        </ul>
      </DocsSection>

      {/* Guidelines */}
      <DocsSection>
        <DocsSectionTitle>Usage Guidelines</DocsSectionTitle>
        
        <DocsSubsectionTitle>When to Use</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Primary conversion actions (sign up, get started, subscribe)</li>
          <li>Premium feature promotions or upgrades</li>
          <li>Hero sections and landing page CTAs</li>
          <li>High-priority actions that need maximum visual emphasis</li>
        </ul>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Use Primary type for main conversion actions</li>
          <li>Use Neutral type for secondary highlighted actions</li>
          <li>Limit to one highlighted button per section to maintain focus</li>
          <li>Keep text concise (1-3 words) for optimal impact</li>
          <li>Ensure sufficient contrast with background (works best on dark backgrounds)</li>
          <li>Don't overuse - reserve for truly critical actions</li>
        </ul>

        <DocsSubsectionTitle>Accessibility</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Button has semantic HTML <code>{'<button>'}</code> element</li>
          <li>Includes proper <code>type="button"</code> attribute</li>
          <li>Disabled state prevents interaction</li>
          <li>Sufficient color contrast for text readability (white on colored background)</li>
          <li>Focus states maintained for keyboard navigation</li>
          <li>Glow effects are decorative and don't convey essential information</li>
        </ul>
      </DocsSection>

      {/* Props API */}
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
              <CodeCell $theme={theme}>children</CodeCell>
              <CodeCell $theme={theme}>ReactNode</CodeCell>
              <CodeCell $theme={theme}>'Sign Up'</CodeCell>
              <TableCell $theme={theme}>Button text content</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>type</CodeCell>
              <CodeCell $theme={theme}>'primary' | 'neutral'</CodeCell>
              <CodeCell $theme={theme}>'primary'</CodeCell>
              <TableCell $theme={theme}>Visual variant type</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>onClick</CodeCell>
              <CodeCell $theme={theme}>{'() => void'}</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Click handler function</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>disabled</CodeCell>
              <CodeCell $theme={theme}>boolean</CodeCell>
              <CodeCell $theme={theme}>false</CodeCell>
              <TableCell $theme={theme}>Disabled state</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>className</CodeCell>
              <CodeCell $theme={theme}>string</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Additional CSS class</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Type Variants</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Type</TableHeader>
              <TableHeader $theme={theme}>Use Case</TableHeader>
              <TableHeader $theme={theme}>Visual Effect</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>primary</CodeCell>
              <TableCell $theme={theme}>Main conversion actions, premium features</TableCell>
              <TableCell $theme={theme}>Blue/purple glow with 50% radial gradient</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>neutral</CodeCell>
              <TableCell $theme={theme}>Secondary important actions</TableCell>
              <TableCell $theme={theme}>White glow with 25% radial gradient</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      {/* Developer Code */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { ButtonHighlighted } from '@avenue/design-system';

<ButtonHighlighted
  type="primary"
  onClick={() => console.log('Clicked!')}
>
  Get Started
</ButtonHighlighted>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Type Variants</DocsSubsectionTitle>
        <DocsCodeBlock>{`{/* Primary for main conversion */}
<ButtonHighlighted type="primary">
  Sign Up Free
</ButtonHighlighted>

{/* Neutral for secondary highlight */}
<ButtonHighlighted type="neutral">
  Learn More
</ButtonHighlighted>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Hero Section</DocsSubsectionTitle>
        <DocsCodeBlock>{`<section className="hero">
  <h1>Start Your Journey Today</h1>
  <p>Join thousands of users already using Avenue</p>
  <ButtonHighlighted
    type="primary"
    onClick={() => navigate('/signup')}
  >
    Get Started
  </ButtonHighlighted>
</section>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Conditional Rendering</DocsSubsectionTitle>
        <DocsCodeBlock>{`<ButtonHighlighted
  type="primary"
  disabled={!isEligible}
  onClick={handlePremiumUpgrade}
>
  {isEligible ? 'Upgrade Now' : 'Premium Required'}
</ButtonHighlighted>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Complete Example</DocsSubsectionTitle>
        <DocsCodeBlock>{`import React from 'react';
import { ButtonHighlighted } from '@avenue/design-system';

export const PricingCard = ({ plan }) => {
  const handleSubscribe = () => {
    // Handle subscription logic
    console.log(\`Subscribing to \${plan.name}\`);
  };

  return (
    <div className="pricing-card">
      <h3>{plan.name}</h3>
      <p className="price">{plan.price}</p>
      <ul className="features">
        {plan.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <ButtonHighlighted
        type={plan.featured ? 'primary' : 'neutral'}
        onClick={handleSubscribe}
      >
        Subscribe Now
      </ButtonHighlighted>
    </div>
  );
};`}</DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
};

