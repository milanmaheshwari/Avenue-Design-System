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

const VariantCard = styled.div`
  background-color: ${colors.neutral[900]};
  border: 1px solid ${colors.neutral[800]};
  border-radius: 12px;
  padding: ${spacing[6]};
`;

const VariantLabel = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.neutral.light.alpha[90]};
  margin-bottom: ${spacing[4]};
  text-align: center;
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

const SpecTable = styled.table`
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
`;

const CodeCell = styled(TableCell)`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  color: ${colors.primary[600]};
`;

export const ButtonHighlightedPage = () => {
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
          <VariantCard>
            <VariantLabel>Primary</VariantLabel>
            <VariantPreview>
              <ButtonHighlighted type="primary">Sign Up</ButtonHighlighted>
            </VariantPreview>
          </VariantCard>
          
          <VariantCard>
            <VariantLabel>Neutral</VariantLabel>
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
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Property</TableHeader>
              <TableHeader>Value</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Padding</TableCell>
              <TableCell>12px 16px (vertical horizontal)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Border Radius</TableCell>
              <TableCell>12px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Font Size</TableCell>
              <TableCell>16px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gap</TableCell>
              <TableCell>4px (between text and arrow)</TableCell>
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
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Prop</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Default</TableHeader>
              <TableHeader>Description</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <CodeCell>children</CodeCell>
              <CodeCell>ReactNode</CodeCell>
              <CodeCell>'Sign Up'</CodeCell>
              <TableCell>Button text content</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>type</CodeCell>
              <CodeCell>'primary' | 'neutral'</CodeCell>
              <CodeCell>'primary'</CodeCell>
              <TableCell>Visual variant type</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>onClick</CodeCell>
              <CodeCell>{'() => void'}</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Click handler function</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>disabled</CodeCell>
              <CodeCell>boolean</CodeCell>
              <CodeCell>false</CodeCell>
              <TableCell>Disabled state</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>className</CodeCell>
              <CodeCell>string</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Additional CSS class</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Type Variants</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Type</TableHeader>
              <TableHeader>Use Case</TableHeader>
              <TableHeader>Visual Effect</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <CodeCell>primary</CodeCell>
              <TableCell>Main conversion actions, premium features</TableCell>
              <TableCell>Blue/purple glow with 50% radial gradient</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>neutral</CodeCell>
              <TableCell>Secondary important actions</TableCell>
              <TableCell>White glow with 25% radial gradient</TableCell>
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

