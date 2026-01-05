/**
 * ButtonPrimary Component Documentation Page
 * Comprehensive documentation following component-page-command rules
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { ButtonPrimary } from '../../../components/ButtonPrimary';
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

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing[4]};
  margin: ${spacing[4]} 0;
`;

const ThemeItem = styled.div`
  background-color: ${colors.neutral[950]};
  padding: ${spacing[4]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonPrimaryPage = () => {
  const { theme } = useTheme();
  const [clickCount, setClickCount] = useState(0);
  
  const themes: Array<'wellness' | 'music' | 'nightlife' | 'coffee' | 'sports' | 'movies' | 'comedy' | 'themeParks'> = [
    'wellness', 'music', 'nightlife', 'coffee', 'sports', 'movies', 'comedy', 'themeParks'
  ];

  return (
    <DocsLayout currentPath="/components/button-primary">
      <DocsPageHeader title="Button Primary" />
      
      {/* Overview */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The Button Primary is a themeable call-to-action button with gradient backgrounds and an arrow indicator. 
          It provides visual feedback and supports 8 different theme colors aligned with event categories. 
          The button features a sophisticated glassmorphic design with inset shadows and smooth gradients.
        </DocsParagraph>
        
        <ComponentDemo>
          <ButtonPrimary size="big" theme="wellness">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="music">Button</ButtonPrimary>
          <ButtonPrimary size="small" theme="sports">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="nightlife">View More</ButtonPrimary>
        </ComponentDemo>
      </DocsSection>

      {/* Variants */}
      <DocsSection>
        <DocsSectionTitle>Variants</DocsSectionTitle>
        
        <DocsSubsectionTitle>Sizes</DocsSubsectionTitle>
        <DocsParagraph>
          The button comes in two sizes: Big (160px width) for primary actions and Small (152px width) for secondary actions.
        </DocsParagraph>
        
        <VariantGrid>
          <VariantCard $theme={theme}>
            <VariantLabel $theme={theme}>Big (160px)</VariantLabel>
            <VariantPreview>
              <ButtonPrimary size="big" theme="wellness">Button</ButtonPrimary>
            </VariantPreview>
          </VariantCard>
          
          <VariantCard $theme={theme}>
            <VariantLabel $theme={theme}>Small (152px)</VariantLabel>
            <VariantPreview>
              <ButtonPrimary size="small" theme="wellness">View More</ButtonPrimary>
            </VariantPreview>
          </VariantCard>
        </VariantGrid>

        <DocsSubsectionTitle>Theme Colors</DocsSubsectionTitle>
        <DocsParagraph>
          Eight theme variants aligned with event categories. Each theme uses its own color palette with consistent alpha blending.
        </DocsParagraph>
        
        <div style={{ marginBottom: spacing[6] }}>
          <h4 style={{ color: colors.neutral[50], marginBottom: spacing[3], fontSize: '16px' }}>
            Big Size Themes
          </h4>
          <ThemeGrid>
            {themes.map(theme => (
              <ThemeItem key={theme}>
                <ButtonPrimary size="big" theme={theme}>Button</ButtonPrimary>
              </ThemeItem>
            ))}
          </ThemeGrid>
        </div>
        
        <div>
          <h4 style={{ color: colors.neutral[50], marginBottom: spacing[3], fontSize: '16px' }}>
            Small Size Themes
          </h4>
          <ThemeGrid>
            {themes.map(theme => (
              <ThemeItem key={theme}>
                <ButtonPrimary size="small" theme={theme}>View More</ButtonPrimary>
              </ThemeItem>
            ))}
          </ThemeGrid>
        </div>
      </DocsSection>

      {/* Specs */}
      <DocsSection>
        <DocsSectionTitle>Specifications</DocsSectionTitle>
        
        <DocsSubsectionTitle>Dimensions</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Size</TableHeader>
              <TableHeader $theme={theme}>Width</TableHeader>
              <TableHeader $theme={theme}>Padding</TableHeader>
              <TableHeader $theme={theme}>Border Radius</TableHeader>
              <TableHeader $theme={theme}>Font Size</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>big</CodeCell>
              <TableCell $theme={theme}>160px</TableCell>
              <TableCell $theme={theme}>24px</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>20px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>small</CodeCell>
              <TableCell $theme={theme}>152px</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>12px</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Typography</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Font Family: Satoshi</li>
          <li>Font Weight: Bold (700)</li>
          <li>Line Height: 1</li>
          <li>Letter Spacing: 0</li>
        </ul>

        <DocsSubsectionTitle>Visual Effects</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Dual gradient backgrounds with theme-specific alpha values (5% and 25%)</li>
          <li>Inset box shadow for depth (12px blur + 32px bottom shadow at 10% alpha)</li>
          <li>Hover: -1px translateY for lift effect</li>
          <li>Disabled: 50% opacity</li>
        </ul>
      </DocsSection>

      {/* Behavior */}
      <DocsSection>
        <DocsSectionTitle>Behavior</DocsSectionTitle>
        
        <DocsSubsectionTitle>Interactive States</DocsSubsectionTitle>
        <ComponentDemo>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4], alignItems: 'center' }}>
            <ButtonPrimary 
              size="big" 
              theme="music"
              onClick={() => setClickCount(clickCount + 1)}
            >
              Click Me ({clickCount})
            </ButtonPrimary>
            <ButtonPrimary size="big" theme="sports" disabled>
              Disabled
            </ButtonPrimary>
          </div>
        </ComponentDemo>
        
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li><strong>Default:</strong> Displays with full opacity and gradient background</li>
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
          <li>Primary call-to-action buttons for critical user flows</li>
          <li>Navigation to event category pages</li>
          <li>"View More" or "Explore" actions in content sections</li>
          <li>Form submissions for event-related actions</li>
        </ul>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Use Big size for primary actions, Small size for secondary or repeated actions</li>
          <li>Match the button theme to the event category context</li>
          <li>Keep button text concise (1-2 words for optimal display)</li>
          <li>Use consistent themes within the same section or flow</li>
          <li>Provide clear visual hierarchy by pairing with other button variants</li>
        </ul>

        <DocsSubsectionTitle>Accessibility</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Button has semantic HTML <code>{'<button>'}</code> element</li>
          <li>Includes proper <code>type="button"</code> attribute</li>
          <li>Disabled state prevents interaction and indicates unavailability</li>
          <li>Color contrast meets WCAG AA standards for text readability</li>
          <li>Focus states are maintained for keyboard navigation</li>
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
              <CodeCell $theme={theme}>'Button'</CodeCell>
              <TableCell $theme={theme}>Button text content</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>size</CodeCell>
              <CodeCell $theme={theme}>'big' | 'small'</CodeCell>
              <CodeCell $theme={theme}>'big'</CodeCell>
              <TableCell $theme={theme}>Size variant of the button</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>theme</CodeCell>
              <CodeCell $theme={theme}>ButtonTheme</CodeCell>
              <CodeCell $theme={theme}>'wellness'</CodeCell>
              <TableCell $theme={theme}>Theme color variant (8 options)</TableCell>
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

        <DocsSubsectionTitle>Theme Options</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Theme</TableHeader>
              <TableHeader $theme={theme}>Use Case</TableHeader>
              <TableHeader $theme={theme}>Color</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>wellness</CodeCell>
              <TableCell $theme={theme}>Wellness & health events</TableCell>
              <TableCell $theme={theme}>Green</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>music</CodeCell>
              <TableCell $theme={theme}>Music concerts & festivals</TableCell>
              <TableCell $theme={theme}>Magenta</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>nightlife</CodeCell>
              <TableCell $theme={theme}>Night parties & clubs</TableCell>
              <TableCell $theme={theme}>Purple</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>coffee</CodeCell>
              <TableCell $theme={theme}>Coffee meetups & socials</TableCell>
              <TableCell $theme={theme}>Brown</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>sports</CodeCell>
              <TableCell $theme={theme}>Sports events & games</TableCell>
              <TableCell $theme={theme}>Orange</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>movies</CodeCell>
              <TableCell $theme={theme}>Movie screenings</TableCell>
              <TableCell $theme={theme}>Red</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>comedy</CodeCell>
              <TableCell $theme={theme}>Comedy shows & standup</TableCell>
              <TableCell $theme={theme}>Yellow</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>themeParks</CodeCell>
              <TableCell $theme={theme}>Theme parks & attractions</TableCell>
              <TableCell $theme={theme}>Blue</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      {/* Developer Code */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { ButtonPrimary } from '@avenue/design-system';

<ButtonPrimary
  size="big"
  theme="music"
  onClick={() => console.log('Clicked!')}
>
  Explore
</ButtonPrimary>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Size Variants</DocsSubsectionTitle>
        <DocsCodeBlock>{`{/* Big button for primary actions */}
<ButtonPrimary size="big" theme="sports">
  Book Tickets
</ButtonPrimary>

{/* Small button for secondary actions */}
<ButtonPrimary size="small" theme="movies">
  View More
</ButtonPrimary>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Theme Matching</DocsSubsectionTitle>
        <DocsCodeBlock>{`{/* Match button theme to event category */}
<ButtonPrimary 
  size="big" 
  theme={event.category}
  onClick={() => navigate(\`/events/\${event.id}\`)}
>
  View Event
</ButtonPrimary>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Disabled State</DocsSubsectionTitle>
        <DocsCodeBlock>{`<ButtonPrimary
  size="big"
  theme="wellness"
  disabled={!isAvailable}
  onClick={handlePurchase}
>
  {isAvailable ? 'Buy Tickets' : 'Sold Out'}
</ButtonPrimary>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Complete Example</DocsSubsectionTitle>
        <DocsCodeBlock>{`import React from 'react';
import { ButtonPrimary } from '@avenue/design-system';

export const EventCategorySection = ({ category, events }) => {
  return (
    <section>
      <h2>{category.name} Events</h2>
      <div className="events-grid">
        {events.slice(0, 6).map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <ButtonPrimary
        size="small"
        theme={category.theme}
        onClick={() => navigate(\`/events/\${category.slug}\`)}
      >
        View More
      </ButtonPrimary>
    </section>
  );
};`}</DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
};

