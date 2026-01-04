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
import { useTheme } from '../../contexts/ThemeContext';
import { 
  getSurfaceColor, 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary 
} from '../../utils/themeColors';
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
  const { theme } = useTheme();
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
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Big</TableHeader>
              <TableHeader $theme={theme}>Medium</TableHeader>
              <TableHeader $theme={theme}>Small</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Card Width</TableCell>
              <TableCell $theme={theme}>360px</TableCell>
              <TableCell $theme={theme}>292px</TableCell>
              <TableCell $theme={theme}>156px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image Height</TableCell>
              <TableCell $theme={theme}>450px</TableCell>
              <TableCell $theme={theme}>365px</TableCell>
              <TableCell $theme={theme}>195px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Border Radius</TableCell>
              <TableCell $theme={theme}>24px</TableCell>
              <TableCell $theme={theme}>24px</TableCell>
              <TableCell $theme={theme}>12px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Favorite Button Size</TableCell>
              <TableCell $theme={theme}>40×40px</TableCell>
              <TableCell $theme={theme}>40×40px</TableCell>
              <TableCell $theme={theme}>24×24px</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Spacing</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Token</TableHeader>
              <TableHeader $theme={theme}>Big</TableHeader>
              <TableHeader $theme={theme}>Medium</TableHeader>
              <TableHeader $theme={theme}>Small</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Content Padding (Horizontal)</TableCell>
              <CodeCell $theme={theme}>spacing[5/4/2]</CodeCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>8px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Content Padding (Top)</TableCell>
              <CodeCell $theme={theme}>spacing[5/4/2]</CodeCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>8px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Content Padding (Bottom)</TableCell>
              <CodeCell $theme={theme}>spacing[6/5/3]</CodeCell>
              <TableCell $theme={theme}>24px</TableCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>12px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title-Info Gap</TableCell>
              <CodeCell $theme={theme}>spacing[2/1]</CodeCell>
              <TableCell $theme={theme}>8px</TableCell>
              <TableCell $theme={theme}>4px</TableCell>
              <TableCell $theme={theme}>2px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Favorite Button Position</TableCell>
              <CodeCell $theme={theme}>spacing[4/4/2]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>8px</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Typography</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Token</TableHeader>
              <TableHeader $theme={theme}>Size</TableHeader>
              <TableHeader $theme={theme}>Weight</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title (Big)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.heading[700]</CodeCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title (Medium)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.heading[800]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title (Small)</TableCell>
              <CodeCell $theme={theme}>typography.mobile.heading[700]</CodeCell>
              <TableCell $theme={theme}>13px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Info (Big)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.body.regular[300]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>Regular (400)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Info (Medium)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.body.regular[400]</CodeCell>
              <TableCell $theme={theme}>14px</TableCell>
              <TableCell $theme={theme}>Regular (400)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Info (Small)</TableCell>
              <CodeCell $theme={theme}>typography.mobile.body.regular[400]</CodeCell>
              <TableCell $theme={theme}>12px</TableCell>
              <TableCell $theme={theme}>Regular (400)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Trending Number (Big)</TableCell>
              <TableCell $theme={theme}>120px</TableCell>
              <TableCell $theme={theme}>120px</TableCell>
              <TableCell $theme={theme}>Black (900)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Trending Number (Medium)</TableCell>
              <TableCell $theme={theme}>95px</TableCell>
              <TableCell $theme={theme}>95px</TableCell>
              <TableCell $theme={theme}>Black (900)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Trending Number (Small)</TableCell>
              <TableCell $theme={theme}>60px</TableCell>
              <TableCell $theme={theme}>60px</TableCell>
              <TableCell $theme={theme}>Black (900)</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Colors</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Token</TableHeader>
              <TableHeader $theme={theme}>Usage</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Background Base</TableCell>
              <CodeCell $theme={theme}>colors.neutral[950]</CodeCell>
              <TableCell $theme={theme}>Dark background (#0a0a0a)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Background Gradient</TableCell>
              <CodeCell $theme={theme}>colors[theme].alpha[5/10/5]</CodeCell>
              <TableCell $theme={theme}>113.68° gradient with theme colors</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image Overlay</TableCell>
              <CodeCell $theme={theme}>colors[theme].alpha[5]</CodeCell>
              <TableCell $theme={theme}>5% theme-colored tint</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title Text</TableCell>
              <CodeCell $theme={theme}>colors[theme][100]</CodeCell>
              <TableCell $theme={theme}>Light theme tint</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Info Text</TableCell>
              <CodeCell $theme={theme}>colors[theme][100]</CodeCell>
              <TableCell $theme={theme}>Same as title</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Border</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[5]</CodeCell>
              <TableCell $theme={theme}>Inset shadow border</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Favorite Icon</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[90]</CodeCell>
              <TableCell $theme={theme}>White with 90% opacity</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Trending Number</TableCell>
              <CodeCell $theme={theme}>colors[theme][600] → [950]</CodeCell>
              <TableCell $theme={theme}>Gradient from vibrant to dark</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Effects</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Effect</TableHeader>
              <TableHeader $theme={theme}>Value</TableHeader>
              <TableHeader $theme={theme}>Purpose</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Card Border</TableCell>
              <TableCell $theme={theme}>inset 0 0 0 2px/1px rgba(250,250,250,0.05)</TableCell>
              <TableCell $theme={theme}>Subtle edge definition</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Blur Circle (Top)</TableCell>
              <TableCell $theme={theme}>radial-gradient(rgba(250,250,250,0.1) 0%, transparent 100%)</TableCell>
              <TableCell $theme={theme}>Decorative lighting effect</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Blur Circle (Bottom, Trending)</TableCell>
              <TableCell $theme={theme}>radial-gradient(rgba(250,250,250,0.1) 0%, transparent 100%)</TableCell>
              <TableCell $theme={theme}>Backdrop for trending number</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Hover Transform</TableCell>
              <TableCell $theme={theme}>translateY(-4px)</TableCell>
              <TableCell $theme={theme}>Interactive lift effect</TableCell>
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
        
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>State</TableHeader>
              <TableHeader $theme={theme}>Property</TableHeader>
              <TableHeader $theme={theme}>Value</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Default</TableCell>
              <TableCell $theme={theme}>Transform</TableCell>
              <TableCell $theme={theme}>translateY(0)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Hover (with onClick)</TableCell>
              <TableCell $theme={theme}>Transform</TableCell>
              <TableCell $theme={theme}>translateY(-4px)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Active (with onClick)</TableCell>
              <TableCell $theme={theme}>Transform</TableCell>
              <TableCell $theme={theme}>translateY(-2px)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>All States</TableCell>
              <TableCell $theme={theme}>Transition</TableCell>
              <TableCell $theme={theme}>250ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
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
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Background</TableHeader>
              <TableHeader $theme={theme}>WCAG Level</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title (theme[100])</TableCell>
              <TableCell $theme={theme}>Dark background with theme tint</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Info (theme[100])</TableCell>
              <TableCell $theme={theme}>Dark background with theme tint</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Favorite Icon</TableCell>
              <TableCell $theme={theme}>Event image (varies)</TableCell>
              <TableCell $theme={theme}>AA (high opacity white)</TableCell>
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
              <TableCell $theme={theme}>'big' | 'medium' | 'small'</TableCell>
              <TableCell $theme={theme}>'big'</TableCell>
              <TableCell $theme={theme}>Size variant of the card</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>type</CodeCell>
              <TableCell $theme={theme}>'default' | 'trending'</TableCell>
              <TableCell $theme={theme}>'default'</TableCell>
              <TableCell $theme={theme}>Card type with optional trending indicator</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>title</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Event title</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>info</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Location and date information</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>imageUrl</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Event image URL (portrait recommended)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>theme</CodeCell>
              <TableCell $theme={theme}>EventTheme</TableCell>
              <TableCell $theme={theme}>'primary'</TableCell>
              <TableCell $theme={theme}>Theme for color styling</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>trendingRank</CodeCell>
              <TableCell $theme={theme}>number</TableCell>
              <TableCell $theme={theme}>undefined</TableCell>
              <TableCell $theme={theme}>Rank number (only shown when type='trending')</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>isFavorite</CodeCell>
              <TableCell $theme={theme}>boolean</TableCell>
              <TableCell $theme={theme}>false</TableCell>
              <TableCell $theme={theme}>Is favorited (controlled mode)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>onFavoriteToggle</CodeCell>
              <TableCell $theme={theme}>{'() => void'}</TableCell>
              <TableCell $theme={theme}>undefined</TableCell>
              <TableCell $theme={theme}>Favorite toggle handler</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>onClick</CodeCell>
              <TableCell $theme={theme}>{'() => void'}</TableCell>
              <TableCell $theme={theme}>undefined</TableCell>
              <TableCell $theme={theme}>Optional click handler</TableCell>
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

