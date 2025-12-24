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
  color: ${colors.neutral[400]};
  font-size: ${typography.fontSizes.sm};
  margin-bottom: ${spacing[3]};
  font-weight: ${typography.fontWeights.medium};
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

const PropsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${spacing[6]} 0;
  font-size: ${typography.fontSizes.sm};

  th, td {
    text-align: left;
    padding: ${spacing[3]} ${spacing[4]};
    border-bottom: 1px solid ${colors.neutral[800]};
  }

  th {
    color: ${colors.neutral[50]};
    font-weight: ${typography.fontWeights.semibold};
    background-color: ${colors.neutral[900]};
  }

  td {
    color: ${colors.neutral[200]};
  }

  code {
    background-color: ${colors.neutral[900]};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: ${typography.fontSizes.xs};
    color: ${colors.primary[400]};
  }
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
  const [clickCount, setClickCount] = useState(0);
  
  const themes: Array<'wellness' | 'music' | 'nightlife' | 'coffee' | 'sports' | 'movies' | 'comedy' | 'themeParks'> = [
    'wellness', 'music', 'nightlife', 'coffee', 'sports', 'movies', 'comedy', 'themeParks'
  ];

  return (
    <DocsLayout>
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
          <VariantCard>
            <VariantLabel>Big (160px)</VariantLabel>
            <VariantPreview>
              <ButtonPrimary size="big" theme="wellness">Button</ButtonPrimary>
            </VariantPreview>
          </VariantCard>
          
          <VariantCard>
            <VariantLabel>Small (152px)</VariantLabel>
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
          <h4 style={{ color: colors.neutral[50], marginBottom: spacing[3], fontSize: typography.fontSizes.base }}>
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
          <h4 style={{ color: colors.neutral[50], marginBottom: spacing[3], fontSize: typography.fontSizes.base }}>
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
        <PropsTable>
          <thead>
            <tr>
              <th>Size</th>
              <th>Width</th>
              <th>Padding</th>
              <th>Border Radius</th>
              <th>Font Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>big</code></td>
              <td>160px</td>
              <td>24px</td>
              <td>16px</td>
              <td>20px</td>
            </tr>
            <tr>
              <td><code>small</code></td>
              <td>152px</td>
              <td>16px</td>
              <td>12px</td>
              <td>16px</td>
            </tr>
          </tbody>
        </PropsTable>

        <DocsSubsectionTitle>Typography</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[200], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Font Family: Satoshi</li>
          <li>Font Weight: Bold (700)</li>
          <li>Line Height: 1</li>
          <li>Letter Spacing: 0</li>
        </ul>

        <DocsSubsectionTitle>Visual Effects</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[200], lineHeight: 1.6, paddingLeft: spacing[5] }}>
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
        
        <ul style={{ color: colors.neutral[200], lineHeight: 1.6, paddingLeft: spacing[5] }}>
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
        <ul style={{ color: colors.neutral[200], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Primary call-to-action buttons for critical user flows</li>
          <li>Navigation to event category pages</li>
          <li>"View More" or "Explore" actions in content sections</li>
          <li>Form submissions for event-related actions</li>
        </ul>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[200], lineHeight: 1.6, paddingLeft: spacing[5] }}>
          <li>Use Big size for primary actions, Small size for secondary or repeated actions</li>
          <li>Match the button theme to the event category context</li>
          <li>Keep button text concise (1-2 words for optimal display)</li>
          <li>Use consistent themes within the same section or flow</li>
          <li>Provide clear visual hierarchy by pairing with other button variants</li>
        </ul>

        <DocsSubsectionTitle>Accessibility</DocsSubsectionTitle>
        <ul style={{ color: colors.neutral[200], lineHeight: 1.6, paddingLeft: spacing[5] }}>
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
        <PropsTable>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>children</code></td>
              <td><code>ReactNode</code></td>
              <td><code>'Button'</code></td>
              <td>Button text content</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>'big' | 'small'</code></td>
              <td><code>'big'</code></td>
              <td>Size variant of the button</td>
            </tr>
            <tr>
              <td><code>theme</code></td>
              <td><code>ButtonTheme</code></td>
              <td><code>'wellness'</code></td>
              <td>Theme color variant (8 options)</td>
            </tr>
            <tr>
              <td><code>onClick</code></td>
              <td><code>{'() => void'}</code></td>
              <td><code>undefined</code></td>
              <td>Click handler function</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Disabled state</td>
            </tr>
            <tr>
              <td><code>className</code></td>
              <td><code>string</code></td>
              <td><code>undefined</code></td>
              <td>Additional CSS class</td>
            </tr>
          </tbody>
        </PropsTable>

        <DocsSubsectionTitle>Theme Options</DocsSubsectionTitle>
        <PropsTable>
          <thead>
            <tr>
              <th>Theme</th>
              <th>Use Case</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>wellness</code></td>
              <td>Wellness & health events</td>
              <td>Green</td>
            </tr>
            <tr>
              <td><code>music</code></td>
              <td>Music concerts & festivals</td>
              <td>Magenta</td>
            </tr>
            <tr>
              <td><code>nightlife</code></td>
              <td>Night parties & clubs</td>
              <td>Purple</td>
            </tr>
            <tr>
              <td><code>coffee</code></td>
              <td>Coffee meetups & socials</td>
              <td>Brown</td>
            </tr>
            <tr>
              <td><code>sports</code></td>
              <td>Sports events & games</td>
              <td>Orange</td>
            </tr>
            <tr>
              <td><code>movies</code></td>
              <td>Movie screenings</td>
              <td>Red</td>
            </tr>
            <tr>
              <td><code>comedy</code></td>
              <td>Comedy shows & standup</td>
              <td>Yellow</td>
            </tr>
            <tr>
              <td><code>themeParks</code></td>
              <td>Theme parks & attractions</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </PropsTable>
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

