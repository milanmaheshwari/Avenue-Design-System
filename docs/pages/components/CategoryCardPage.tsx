/**
 * CategoryCard Component Documentation Page
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { CategoryCard } from '../../../components';
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
  background: rgba(10, 10, 10, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`;

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  gap: 16px;
  margin: 20px 0;
`;

const VariantGridBig = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 24px;
  margin: 20px 0;
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

const List = styled.ul`
  list-style: disc;
  padding-left: ${spacing[6]};
  margin: ${spacing[4]} 0;
`;

const ListItem = styled.li`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${colors.neutral[600]};
  margin-bottom: ${spacing[2]};
  
  strong {
    color: ${colors.neutral[900]};
    font-weight: ${typography.fontWeights.bold};
  }
  
  code {
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 0.9em;
    color: ${colors.primary[600]};
    background-color: ${colors.primary.alpha[5]};
    padding: 2px ${spacing[2]};
    border-radius: 4px;
  }
`;

export function CategoryCardPage() {
  const allThemes = ['music', 'nightlife', 'coffee', 'sports', 'movies', 'comedy', 'wellness', 'themeParks'] as const;

  return (
    <DocsLayout>
      <DocsPageHeader
        title="Category Card"
        description="Category cards display event categories with theme-specific styling, gradients, and 3D imagery. Available in two sizes with 8 different theme variants."
      />

      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The CategoryCard component is a visually rich card designed to showcase different event categories. Each theme has its own color palette, gradient background, and associated imagery.
        </DocsParagraph>
        
        <ComponentDemo>
          <CategoryCard
            theme="music"
            size="big"
            onClick={() => console.log('Clicked Music')}
          />
          <CategoryCard
            theme="nightlife"
            size="big"
            onClick={() => console.log('Clicked Nightlife')}
          />
        </ComponentDemo>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Themes</DocsSectionTitle>
        <DocsParagraph>
          Eight distinct themes, each with unique colors, gradients, and imagery:
        </DocsParagraph>
        
        <DocsSubsectionTitle>Small Size (160×220px)</DocsSubsectionTitle>
        <VariantGrid>
          {allThemes.map(theme => (
            <CategoryCard
              key={theme}
              theme={theme}
              size="small"
              onClick={() => console.log(`Clicked ${theme}`)}
            />
          ))}
        </VariantGrid>

        <DocsSubsectionTitle>Big Size (300×360px)</DocsSubsectionTitle>
        <VariantGridBig>
          {allThemes.map(theme => (
            <CategoryCard
              key={theme}
              theme={theme}
              size="big"
              onClick={() => console.log(`Clicked ${theme}`)}
            />
          ))}
        </VariantGridBig>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Theme Specifications</DocsSectionTitle>
        <SpecTable>
          <TableHead>
            <tr>
              <TableHeader>Theme</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Description</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            <TableRow>
              <CodeCell>music</CodeCell>
              <TableCell>Music</TableCell>
              <TableCell>Explore concerts, live shows and festivals near you</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>nightlife</CodeCell>
              <TableCell>Night Parties</TableCell>
              <TableCell>Groove and dance the night away with top DJs and parties nearby</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>coffee</CodeCell>
              <TableCell>Coffee Parties</TableCell>
              <TableCell>Taste brews and enjoy the company</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>sports</CodeCell>
              <TableCell>Sports</TableCell>
              <TableCell>Find matches and tournaments near you</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>movies</CodeCell>
              <TableCell>Movies</TableCell>
              <TableCell>Find the latest movie releases in theatres near you</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>comedy</CodeCell>
              <TableCell>Comedy</TableCell>
              <TableCell>Laugh out loud at live standup comedy shows</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>wellness</CodeCell>
              <TableCell>Wellness</TableCell>
              <TableCell>Find your inner peace with yoga and meditation events</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>themeParks</CodeCell>
              <TableCell>Theme Parks</TableCell>
              <TableCell>Experience the best rides with access to theme parks</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Usage Guidelines</DocsSectionTitle>
        
        <DocsSubsectionTitle>When to Use</DocsSubsectionTitle>
        <List>
          <ListItem>Displaying event categories on home or browse pages</ListItem>
          <ListItem>Creating category navigation systems</ListItem>
          <ListItem>Building visual category filters</ListItem>
          <ListItem>Showcasing event types with rich imagery</ListItem>
        </List>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <List>
          <ListItem>Use big size for hero sections and main category displays</ListItem>
          <ListItem>Use small size for compact grids and mobile layouts</ListItem>
          <ListItem>Maintain consistent sizing within the same section</ListItem>
          <ListItem>Always provide onClick handlers for interactive cards</ListItem>
          <ListItem>Use appropriate themes that match your event categories</ListItem>
        </List>

        <DocsSubsectionTitle>Accessibility</DocsSubsectionTitle>
        <List>
          <ListItem>Cards are keyboard accessible when onClick is provided</ListItem>
          <ListItem>Images include alt text based on category title</ListItem>
          <ListItem>Sufficient color contrast for text readability</ListItem>
          <ListItem>Hover and active states provide visual feedback</ListItem>
        </List>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Props</DocsSectionTitle>
        <SpecTable>
          <TableHead>
            <tr>
              <TableHeader>Prop</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Default</TableHeader>
              <TableHeader>Description</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            <TableRow>
              <CodeCell>theme</CodeCell>
              <CodeCell>CategoryTheme</CodeCell>
              <CodeCell>'music'</CodeCell>
              <TableCell>Theme variant (music, nightlife, coffee, sports, movies, comedy, wellness, themeParks)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>size</CodeCell>
              <CodeCell>'big' | 'small'</CodeCell>
              <CodeCell>'big'</CodeCell>
              <TableCell>Size of the card (big: 300×360px, small: 160×220px)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>title</CodeCell>
              <CodeCell>string</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Custom title (uses theme default if not provided)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>subtitle</CodeCell>
              <CodeCell>string</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Custom subtitle (uses theme default if not provided)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>icon</CodeCell>
              <CodeCell>React.ReactNode</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Custom icon component</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>imageUrl</CodeCell>
              <CodeCell>string</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Custom image URL (uses theme default if not provided)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>onClick</CodeCell>
              <CodeCell>() =&gt; void</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Click handler for the card</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>className</CodeCell>
              <CodeCell>string</CodeCell>
              <CodeCell>undefined</CodeCell>
              <TableCell>Additional CSS class</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Code Examples</DocsSectionTitle>
        
        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>
{`import { CategoryCard } from 'avenue-design-system';

function CategoryGrid() {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <CategoryCard
        theme="music"
        size="big"
        onClick={() => navigate('/events/music')}
      />
      <CategoryCard
        theme="sports"
        size="big"
        onClick={() => navigate('/events/sports')}
      />
    </div>
  );
}`}
        </DocsCodeBlock>

        <DocsSubsectionTitle>Compact Grid</DocsSubsectionTitle>
        <DocsCodeBlock>
{`const categories = ['music', 'nightlife', 'coffee', 'sports', 'movies', 'comedy', 'wellness', 'themeParks'];

function CompactGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 160px)',
      gap: '16px'
    }}>
      {categories.map(category => (
        <CategoryCard
          key={category}
          theme={category}
          size="small"
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </div>
  );
}`}
        </DocsCodeBlock>

        <DocsSubsectionTitle>Custom Content</DocsSubsectionTitle>
        <DocsCodeBlock>
{`import { CategoryCard } from 'avenue-design-system';
import CustomMusicIcon from './icons/CustomMusicIcon';

function CustomCategory() {
  return (
    <CategoryCard
      theme="music"
      size="big"
      title="Live Concerts"
      subtitle="Experience the best live music performances in your city"
      icon={<CustomMusicIcon />}
      onClick={() => navigate('/concerts')}
    />
  );
}`}
        </DocsCodeBlock>

        <DocsSubsectionTitle>Responsive Layout</DocsSubsectionTitle>
        <DocsCodeBlock>
{`import { CategoryCard } from 'avenue-design-system';
import { useMediaQuery } from 'react-responsive';

function ResponsiveCategories() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile 
        ? 'repeat(auto-fit, 160px)' 
        : 'repeat(auto-fit, 300px)',
      gap: isMobile ? '16px' : '24px'
    }}>
      {categories.map(category => (
        <CategoryCard
          key={category}
          theme={category}
          size={isMobile ? 'small' : 'big'}
          onClick={() => handleClick(category)}
        />
      ))}
    </div>
  );
}`}
        </DocsCodeBlock>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Design Tokens</DocsSectionTitle>
        <DocsParagraph>
          The CategoryCard component uses the following design tokens from the Avenue Design System:
        </DocsParagraph>
        
        <DocsSubsectionTitle>Typography</DocsSubsectionTitle>
        <List>
          <ListItem><strong>Title (Big):</strong> 24px / Bold / -0.48px letter-spacing / 28px line-height</ListItem>
          <ListItem><strong>Title (Small):</strong> 16px / Bold / -0.32px letter-spacing / 20px line-height</ListItem>
          <ListItem><strong>Subtitle (Big):</strong> 16px / Regular / 22px line-height</ListItem>
          <ListItem><strong>Subtitle (Small):</strong> 13px / Regular / 18px line-height</ListItem>
        </List>

        <DocsSubsectionTitle>Spacing</DocsSubsectionTitle>
        <List>
          <ListItem><strong>Big Card Padding:</strong> spacing[5] (20px)</ListItem>
          <ListItem><strong>Small Card Padding:</strong> spacing[3] (12px)</ListItem>
          <ListItem><strong>Content Gap (Big):</strong> spacing[3] (12px)</ListItem>
          <ListItem><strong>Content Gap (Small):</strong> spacing[2] (8px)</ListItem>
        </List>

        <DocsSubsectionTitle>Effects</DocsSubsectionTitle>
        <List>
          <ListItem><strong>Card Shadow:</strong> 0px 0px 20px 5px (theme-specific)</ListItem>
          <ListItem><strong>Image Shadow:</strong> 0px 20px 40px 0px neutral dark alpha 50%</ListItem>
          <ListItem><strong>Border Radius (Big):</strong> 20px</ListItem>
          <ListItem><strong>Border Radius (Small):</strong> 12px</ListItem>
        </List>
      </DocsSection>
    </DocsLayout>
  );
}
