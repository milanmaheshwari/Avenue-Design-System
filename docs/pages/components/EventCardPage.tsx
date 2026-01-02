/**
 * EventCard Component Documentation Page
 * Comprehensive documentation following component-page-command rules
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { EventCard } from '../../../components/EventCard';
import {
  DocsLayout,
  DocsPageHeader,
  DocsSection,
  DocsSectionTitle,
  DocsSubsectionTitle,
  DocsParagraph,
  DocsCodeBlock,
} from '../../layouts/DocsLayout';
import demoImage from '../../../assets/fac1b8921d7451f21cc3076e1e09e76dedf851f1.png';

// Demo image
const DEMO_IMAGE = demoImage;

const ComponentDemo = styled.div`
  background-color: ${colors.neutral[950]};
  padding: ${spacing[8]};
  border-radius: 12px;
  margin: ${spacing[6]} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing[8]};
  flex-wrap: wrap;
`;

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
  gap: ${spacing[4]};
  margin: ${spacing[6]} 0;
  background-color: ${colors.neutral[950]};
  padding: ${spacing[8]};
  border-radius: 12px;
`;

const VariantLabel = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.neutral.light.alpha[90]};
  margin-bottom: ${spacing[4]};
  text-align: center;
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

const GuidelineSection = styled.div`
  margin: ${spacing[6]} 0;
`;

const GuidelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[6]};
  margin: ${spacing[4]} 0;
`;

const GuidelineCard = styled.div<{ $type: 'do' | 'dont' }>`
  background-color: ${props => props.$type === 'do' ? colors.wellness.alpha[5] : 'rgba(220, 38, 38, 0.05)'};
  border: 2px solid ${props => props.$type === 'do' ? colors.wellness[600] : colors.semantic.error};
  border-radius: 12px;
  padding: ${spacing[6]};
`;

const GuidelineTitle = styled.h4`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[700].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[900]};
  margin: 0 0 ${spacing[3]} 0;
`;

const GuidelineText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${colors.neutral[700]};
  margin: 0;
`;

export const EventCardPage: React.FC = () => {
  return (
    <DocsLayout currentPath="/components/event-card">
      <DocsPageHeader
        title="Event Card"
        description="A comprehensive card component for displaying event information with theme-based styling, multiple size variants, and optional trending indicators."
      />

      {/* 1. OVERVIEW */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The EventCard component provides a versatile way to showcase events, performances, and experiences
          in your application. It features rich imagery with theme-colored overlays, decorative blur effects,
          interactive favorite toggles, and support for trending rankings. The component integrates seamlessly
          with the category color system for consistent theming across all event types.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Use this component when:</strong>
        </DocsParagraph>
        <DocsParagraph>
          • Displaying events in discovery or browse interfaces<br/>
          • Creating event grids, carousels, or lists<br/>
          • Showcasing trending or featured events<br/>
          • Building ticket purchasing or event booking flows<br/>
          • Creating category-specific event sections
        </DocsParagraph>

        <ComponentDemo>
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
          />
          <EventCard
            size="big"
            type="trending"
            trendingRank={2}
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
          />
        </ComponentDemo>
      </DocsSection>

      {/* 2. VARIANTS */}
      <DocsSection>
        <DocsSectionTitle>Variants</DocsSectionTitle>
        <DocsParagraph>
          The EventCard component supports three size variants, nine theme options, and two display types.
        </DocsParagraph>

        <DocsSubsectionTitle>Size Variants</DocsSubsectionTitle>
        <ComponentDemo>
          <div style={{ display: 'flex', gap: spacing[8], flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>
              <VariantLabel>Big (360×450)</VariantLabel>
              <EventCard
                size="big"
                title="Jazz Under the Stars"
                info="City Park • Dec 1"
                imageUrl={DEMO_IMAGE}
                theme="primary"
              />
            </div>
            <div>
              <VariantLabel>Medium (292×365)</VariantLabel>
              <EventCard
                size="medium"
                title="Jazz Under the Stars"
                info="City Park • Dec 1"
                imageUrl={DEMO_IMAGE}
                theme="music"
              />
            </div>
            <div>
              <VariantLabel>Small (156×195)</VariantLabel>
              <EventCard
                size="small"
                title="Jazz Under the Stars"
                info="City Park • Dec 1"
                imageUrl={DEMO_IMAGE}
                theme="comedy"
              />
            </div>
          </div>
        </ComponentDemo>

        <DocsSubsectionTitle>Type Variants</DocsSubsectionTitle>
        <DocsParagraph>
          <strong>Note:</strong> The trending type with number overlay is only available for the Primary theme in the Figma design.
        </DocsParagraph>
        <ComponentDemo>
          <div style={{ display: 'flex', gap: spacing[8], flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>
              <VariantLabel>Default</VariantLabel>
              <EventCard
                size="medium"
                title="Jazz Under the Stars"
                info="City Park • Dec 1"
                imageUrl={DEMO_IMAGE}
                theme="primary"
              />
            </div>
            <div>
              <VariantLabel>Trending (Primary theme only)</VariantLabel>
              <EventCard
                size="medium"
                type="trending"
                trendingRank={2}
                title="Jazz Under the Stars"
                info="City Park • Dec 1"
                imageUrl={DEMO_IMAGE}
                theme="primary"
              />
            </div>
          </div>
        </ComponentDemo>

        <DocsSubsectionTitle>Theme Options</DocsSubsectionTitle>
        <DocsParagraph>
          Each theme applies unique gradient backgrounds and text colors based on event categories:
        </DocsParagraph>
        <VariantGrid>
          {['primary', 'music', 'coffee', 'comedy', 'movies', 'nightlife', 'sports', 'themeParks', 'wellness'].map((theme) => (
            <div key={theme}>
              <VariantLabel>{theme.charAt(0).toUpperCase() + theme.slice(1)}</VariantLabel>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <EventCard
                  size="small"
                  title="Event Name"
                  info="Location • Date"
                  imageUrl={DEMO_IMAGE}
                  theme={theme as any}
                />
              </div>
            </div>
          ))}
        </VariantGrid>
      </DocsSection>

      {/* 3. SPECIFICATIONS */}
      <DocsSection>
        <DocsSectionTitle>Specifications</DocsSectionTitle>
        
        <DocsSubsectionTitle>Dimensions</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Big</TableHeader>
              <TableHeader>Medium</TableHeader>
              <TableHeader>Small</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Card Width</TableCell>
              <TableCell>360px</TableCell>
              <TableCell>292px</TableCell>
              <TableCell>156px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image Height</TableCell>
              <TableCell>450px</TableCell>
              <TableCell>365px</TableCell>
              <TableCell>195px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Border Radius</TableCell>
              <TableCell>24px</TableCell>
              <TableCell>24px</TableCell>
              <TableCell>12px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Favorite Button Size</TableCell>
              <TableCell>40×40px</TableCell>
              <TableCell>40×40px</TableCell>
              <TableCell>24×24px</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Spacing</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Token</TableHeader>
              <TableHeader>Big</TableHeader>
              <TableHeader>Medium</TableHeader>
              <TableHeader>Small</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Content Padding (Horizontal)</TableCell>
              <CodeCell>spacing[5/4/2]</CodeCell>
              <TableCell>20px</TableCell>
              <TableCell>16px</TableCell>
              <TableCell>8px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Content Padding (Top)</TableCell>
              <CodeCell>spacing[5/4/2]</CodeCell>
              <TableCell>20px</TableCell>
              <TableCell>16px</TableCell>
              <TableCell>8px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Content Padding (Bottom)</TableCell>
              <CodeCell>spacing[6/5/3]</CodeCell>
              <TableCell>24px</TableCell>
              <TableCell>20px</TableCell>
              <TableCell>12px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title-Info Gap</TableCell>
              <CodeCell>spacing[2/1]</CodeCell>
              <TableCell>8px</TableCell>
              <TableCell>4px</TableCell>
              <TableCell>2px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Favorite Button Position</TableCell>
              <CodeCell>spacing[4/4/2]</CodeCell>
              <TableCell>16px</TableCell>
              <TableCell>16px</TableCell>
              <TableCell>8px</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Typography</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Token</TableHeader>
              <TableHeader>Size</TableHeader>
              <TableHeader>Weight</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Title (Big)</TableCell>
              <CodeCell>typography.desktop.heading[700]</CodeCell>
              <TableCell>20px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title (Medium)</TableCell>
              <CodeCell>typography.desktop.heading[800]</CodeCell>
              <TableCell>16px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title (Small)</TableCell>
              <CodeCell>typography.mobile.heading[700]</CodeCell>
              <TableCell>13px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Info (Big)</TableCell>
              <CodeCell>typography.desktop.body.regular[300]</CodeCell>
              <TableCell>16px</TableCell>
              <TableCell>Regular (400)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Info (Medium)</TableCell>
              <CodeCell>typography.desktop.body.regular[400]</CodeCell>
              <TableCell>14px</TableCell>
              <TableCell>Regular (400)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Info (Small)</TableCell>
              <CodeCell>typography.mobile.body.regular[400]</CodeCell>
              <TableCell>12px</TableCell>
              <TableCell>Regular (400)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trending Number (Big)</TableCell>
              <TableCell>120px</TableCell>
              <TableCell>120px</TableCell>
              <TableCell>Black (900)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trending Number (Medium)</TableCell>
              <TableCell>95px</TableCell>
              <TableCell>95px</TableCell>
              <TableCell>Black (900)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trending Number (Small)</TableCell>
              <TableCell>60px</TableCell>
              <TableCell>60px</TableCell>
              <TableCell>Black (900)</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Colors</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Token</TableHeader>
              <TableHeader>Usage</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Background Base</TableCell>
              <CodeCell>colors.neutral[950]</CodeCell>
              <TableCell>Dark background (#0a0a0a)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Background Gradient</TableCell>
              <CodeCell>colors[theme].alpha[5/10/5]</CodeCell>
              <TableCell>113.68° gradient with theme colors</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image Overlay</TableCell>
              <CodeCell>colors[theme].alpha[5]</CodeCell>
              <TableCell>5% theme-colored tint</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Text</TableCell>
              <CodeCell>colors[theme][100]</CodeCell>
              <TableCell>Light theme tint</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Info Text</TableCell>
              <CodeCell>colors[theme][100]</CodeCell>
              <TableCell>Same as title</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Border</TableCell>
              <CodeCell>colors.neutral.light.alpha[5]</CodeCell>
              <TableCell>Inset shadow border</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Favorite Icon</TableCell>
              <CodeCell>colors.neutral.light.alpha[90]</CodeCell>
              <TableCell>White with 90% opacity</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Trending Number</TableCell>
              <CodeCell>colors[theme][600] → [950]</CodeCell>
              <TableCell>Gradient from vibrant to dark</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Effects</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Effect</TableHeader>
              <TableHeader>Value</TableHeader>
              <TableHeader>Purpose</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Card Border</TableCell>
              <TableCell>inset 0 0 0 2px/1px rgba(250,250,250,0.05)</TableCell>
              <TableCell>Subtle edge definition</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Blur Circle (Top)</TableCell>
              <TableCell>radial-gradient(rgba(250,250,250,0.1) 0%, transparent 100%)</TableCell>
              <TableCell>Decorative lighting effect</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Blur Circle (Bottom, Trending)</TableCell>
              <TableCell>radial-gradient(rgba(250,250,250,0.1) 0%, transparent 100%)</TableCell>
              <TableCell>Backdrop for trending number</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hover Transform</TableCell>
              <TableCell>translateY(-4px)</TableCell>
              <TableCell>Interactive lift effect</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      {/* 4. BEHAVIOUR */}
      <DocsSection>
        <DocsSectionTitle>Behaviour</DocsSectionTitle>
        
        <DocsSubsectionTitle>Interaction States</DocsSubsectionTitle>
        <DocsParagraph>
          When an onClick handler is provided, the card becomes interactive with hover and active states.
        </DocsParagraph>
        
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>State</TableHeader>
              <TableHeader>Property</TableHeader>
              <TableHeader>Value</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Default</TableCell>
              <TableCell>Transform</TableCell>
              <TableCell>translateY(0)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hover (with onClick)</TableCell>
              <TableCell>Transform</TableCell>
              <TableCell>translateY(-4px)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active (with onClick)</TableCell>
              <TableCell>Transform</TableCell>
              <TableCell>translateY(-2px)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>All States</TableCell>
              <TableCell>Transition</TableCell>
              <TableCell>250ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Favorite Toggle</DocsSubsectionTitle>
        <DocsParagraph>
          The favorite button supports both controlled and uncontrolled modes:<br/>
          • <strong>Controlled:</strong> Provide both `isFavorite` and `onFavoriteToggle` props<br/>
          • <strong>Uncontrolled:</strong> Component manages its own state internally<br/>
          • Clicking the favorite button doesn't trigger the card's onClick handler
        </DocsParagraph>

        <DocsSubsectionTitle>Trending Display</DocsSubsectionTitle>
        <DocsParagraph>
          When `type="trending"` and `trendingRank` is provided:<br/>
          • Large gradient number overlays the bottom of the image<br/>
          • Additional blur circle appears behind the number<br/>
          • Number uses theme-colored gradient for visual consistency<br/>
          • <strong>Note:</strong> Trending type is designed for Primary theme only in the Figma design
        </DocsParagraph>
      </DocsSection>

      {/* 5. USAGE GUIDELINES */}
      <DocsSection>
        <DocsSectionTitle>Usage Guidelines</DocsSectionTitle>
        
        <GuidelineSection>
          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Use high-quality, engaging event photos that showcase the atmosphere and experience.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use generic stock photos — event imagery should be authentic and specific.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Match the theme to the event category (music, comedy, sports, etc.).
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use inconsistent themes within the same category section.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Keep event titles concise and location/date info brief (e.g., "City Park • Dec 1").
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Write lengthy descriptions — use full addresses or verbose date formats.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Use trending indicators sparingly for truly popular or featured events.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Overuse trending badges — they lose impact when applied to too many items.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>
        </GuidelineSection>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <DocsParagraph>
          • Use portrait or vertical images (optimal aspect ratios: 4:5 or 3:4)<br/>
          • Big variant: Best for hero sections or 2-3 column layouts<br/>
          • Medium variant: Ideal for 3-4 column grids<br/>
          • Small variant: Perfect for dense grids (5+ columns) or sidebars<br/>
          • Ensure images have good contrast with theme overlays<br/>
          • Provide onClick for navigating to event details<br/>
          • Use controlled favorite state for persistence with backend<br/>
          • Reserve trending type for top 3-5 events maximum<br/>
          • Use trending type only with Primary theme (per design system)
        </DocsParagraph>
      </DocsSection>

      {/* 6. ACCESSIBILITY */}
      <DocsSection>
        <DocsSectionTitle>Accessibility</DocsSectionTitle>
        
        <DocsSubsectionTitle>ARIA Support</DocsSubsectionTitle>
        <DocsParagraph>
          When interactive (with onClick):<br/>
          • role="button" is automatically applied<br/>
          • tabIndex={0} for keyboard navigation<br/>
          • Enter and Space key support for activation<br/>
          • Image alt text uses event title<br/>
          <br/>
          Favorite button:<br/>
          • Accessible label: "Add to favorites" / "Remove from favorites"<br/>
          • Keyboard accessible<br/>
          • Click event doesn't bubble to parent card
        </DocsParagraph>

        <DocsSubsectionTitle>Color Contrast</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Background</TableHeader>
              <TableHeader>WCAG Level</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Title (theme[100])</TableCell>
              <TableCell>Dark background with theme tint</TableCell>
              <TableCell>AAA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Info (theme[100])</TableCell>
              <TableCell>Dark background with theme tint</TableCell>
              <TableCell>AAA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Favorite Icon</TableCell>
              <TableCell>Event image (varies)</TableCell>
              <TableCell>AA (high opacity white)</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Font Size Requirements</DocsSubsectionTitle>
        <DocsParagraph>
          • Big title: 20px — exceeds 18px minimum<br/>
          • Medium title: 16px — meets 16px minimum<br/>
          • Small title: 13px — acceptable for dense layouts<br/>
          • All info text: 12-16px — meets minimums for body text
        </DocsParagraph>

        <DocsSubsectionTitle>Keyboard Navigation</DocsSubsectionTitle>
        <DocsParagraph>
          Interactive cards are fully keyboard accessible:<br/>
          • Tab to focus the card<br/>
          • Tab again to focus favorite button<br/>
          • Enter or Space to activate onClick<br/>
          • Focus indicators are provided by browser defaults
        </DocsParagraph>
      </DocsSection>

      {/* 7. DEVELOPER CODE */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Installation</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { EventCard } from '@avenue/design-system/components';`}</DocsCodeBlock>

        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`<EventCard
  title="Jazz Under the Stars"
  info="City Park • Dec 1"
  imageUrl="/images/jazz-event.jpg"
  theme="music"
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Size Variant</DocsSubsectionTitle>
        <DocsCodeBlock>{`<EventCard
  size="medium"
  title="Comedy Night"
  info="The Laugh Club • Dec 5"
  imageUrl="/images/comedy-event.jpg"
  theme="comedy"
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Trending Indicator</DocsSubsectionTitle>
        <DocsCodeBlock>{`<EventCard
  size="big"
  type="trending"
  trendingRank={2}
  title="Summer Music Festival"
  info="Downtown Park • Jun 15"
  imageUrl="/images/festival.jpg"
  theme="music"
  onClick={() => navigate('/events/summer-fest')}
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Controlled Favorite</DocsSubsectionTitle>
        <DocsCodeBlock>{`const [favorites, setFavorites] = useState<Set<number>>(new Set());

<EventCard
  title="Jazz Under the Stars"
  info="City Park • Dec 1"
  imageUrl="/images/jazz-event.jpg"
  theme="music"
  isFavorite={favorites.has(eventId)}
  onFavoriteToggle={() => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(eventId)) {
      newFavorites.delete(eventId);
    } else {
      newFavorites.add(eventId);
    }
    setFavorites(newFavorites);
  }}
  onClick={() => navigate(\`/events/\${eventId}\`)}
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Full Example with Grid</DocsSubsectionTitle>
        <DocsCodeBlock>{`import React from 'react';
import { EventCard } from '@avenue/design-system/components';

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  theme: string;
  isTrending?: boolean;
  trendingRank?: number;
}

function EventGrid({ events }: { events: Event[] }) {
  const handleEventClick = (eventId: number) => {
    console.log('Navigate to event:', eventId);
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(292px, 1fr))',
      gap: '24px'
    }}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          size="medium"
          type={event.isTrending ? 'trending' : 'default'}
          trendingRank={event.trendingRank}
          title={event.title}
          info={\`\${event.location} • \${event.date}\`}
          imageUrl={event.imageUrl}
          theme={event.theme as any}
          onClick={() => handleEventClick(event.id)}
        />
      ))}
    </div>
  );
}`}</DocsCodeBlock>

        <DocsSubsectionTitle>Props API</DocsSubsectionTitle>
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
              <CodeCell>size</CodeCell>
              <TableCell>'big' | 'medium' | 'small'</TableCell>
              <TableCell>'big'</TableCell>
              <TableCell>Size variant of the card</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>type</CodeCell>
              <TableCell>'default' | 'trending'</TableCell>
              <TableCell>'default'</TableCell>
              <TableCell>Card type with optional trending indicator</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>title</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Event title</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>info</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Location and date information</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>imageUrl</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Event image URL (portrait recommended)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>theme</CodeCell>
              <TableCell>EventTheme</TableCell>
              <TableCell>'primary'</TableCell>
              <TableCell>Theme for color styling</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>trendingRank</CodeCell>
              <TableCell>number</TableCell>
              <TableCell>undefined</TableCell>
              <TableCell>Rank number (only shown when type='trending')</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>isFavorite</CodeCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Is favorited (controlled mode)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>onFavoriteToggle</CodeCell>
              <TableCell>{'() => void'}</TableCell>
              <TableCell>undefined</TableCell>
              <TableCell>Favorite toggle handler</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>onClick</CodeCell>
              <TableCell>{'() => void'}</TableCell>
              <TableCell>undefined</TableCell>
              <TableCell>Optional click handler</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Type Definitions</DocsSubsectionTitle>
        <DocsCodeBlock>{`type EventTheme = 
  | 'primary' 
  | 'music' 
  | 'coffee' 
  | 'comedy' 
  | 'movies' 
  | 'nightlife' 
  | 'sports' 
  | 'themeParks' 
  | 'wellness';

type EventCardSize = 'big' | 'medium' | 'small';
type EventCardType = 'default' | 'trending';

interface EventCardProps {
  size?: EventCardSize;
  type?: EventCardType;
  title: string;
  info: string;
  imageUrl: string;
  theme?: EventTheme;
  trendingRank?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onClick?: () => void;
}`}</DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
};

