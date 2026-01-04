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
import { useTheme } from '../../contexts/ThemeContext';
import { 
  getSurfaceColor, 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary,
  getInlineCodeBackground
} from '../../utils/themeColors';

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

const List = styled.ul<{ $theme: 'light' | 'dark' }>`
  list-style: disc;
  padding-left: ${spacing[6]};
  margin: ${spacing[4]} 0;
  color: ${props => getTextColorSecondary(props.$theme)};
  transition: color 200ms ease;
`;

const ListItem = styled.li<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${props => getTextColorSecondary(props.$theme)};
  margin-bottom: ${spacing[2]};
  transition: color 200ms ease;
  
  strong {
    color: ${props => getTextColor(props.$theme)};
    font-weight: ${typography.fontWeights.bold};
    transition: color 200ms ease;
  }
  
  code {
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 0.9em;
    color: ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
    background-color: ${props => getInlineCodeBackground(props.$theme)};
    padding: 2px ${spacing[2]};
    border-radius: 4px;
    transition: color 200ms ease, background-color 200ms ease;
  }
`;

export function CategoryCardPage() {
  const { theme } = useTheme();
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
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <tr>
              <TableHeader $theme={theme}>Theme</TableHeader>
              <TableHeader $theme={theme}>Title</TableHeader>
              <TableHeader $theme={theme}>Description</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>music</CodeCell>
              <TableCell $theme={theme}>Music</TableCell>
              <TableCell $theme={theme}>Explore concerts, live shows and festivals near you</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>nightlife</CodeCell>
              <TableCell $theme={theme}>Night Parties</TableCell>
              <TableCell $theme={theme}>Groove and dance the night away with top DJs and parties nearby</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>coffee</CodeCell>
              <TableCell $theme={theme}>Coffee Parties</TableCell>
              <TableCell $theme={theme}>Taste brews and enjoy the company</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>sports</CodeCell>
              <TableCell $theme={theme}>Sports</TableCell>
              <TableCell $theme={theme}>Find matches and tournaments near you</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>movies</CodeCell>
              <TableCell $theme={theme}>Movies</TableCell>
              <TableCell $theme={theme}>Find the latest movie releases in theatres near you</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>comedy</CodeCell>
              <TableCell $theme={theme}>Comedy</TableCell>
              <TableCell $theme={theme}>Laugh out loud at live standup comedy shows</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>wellness</CodeCell>
              <TableCell $theme={theme}>Wellness</TableCell>
              <TableCell $theme={theme}>Find your inner peace with yoga and meditation events</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>themeParks</CodeCell>
              <TableCell $theme={theme}>Theme Parks</TableCell>
              <TableCell $theme={theme}>Experience the best rides with access to theme parks</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Usage Guidelines</DocsSectionTitle>
        
        <DocsSubsectionTitle>When to Use</DocsSubsectionTitle>
        <List $theme={theme}>
          <ListItem $theme={theme}>Displaying event categories on home or browse pages</ListItem>
          <ListItem $theme={theme}>Creating category navigation systems</ListItem>
          <ListItem $theme={theme}>Building visual category filters</ListItem>
          <ListItem $theme={theme}>Showcasing event types with rich imagery</ListItem>
        </List>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <List $theme={theme}>
          <ListItem $theme={theme}>Use big size for hero sections and main category displays</ListItem>
          <ListItem $theme={theme}>Use small size for compact grids and mobile layouts</ListItem>
          <ListItem $theme={theme}>Maintain consistent sizing within the same section</ListItem>
          <ListItem $theme={theme}>Always provide onClick handlers for interactive cards</ListItem>
          <ListItem $theme={theme}>Use appropriate themes that match your event categories</ListItem>
        </List>

        <DocsSubsectionTitle>Accessibility</DocsSubsectionTitle>
        <List $theme={theme}>
          <ListItem $theme={theme}>Cards are keyboard accessible when onClick is provided</ListItem>
          <ListItem $theme={theme}>Images include alt text based on category title</ListItem>
          <ListItem $theme={theme}>Sufficient color contrast for text readability</ListItem>
          <ListItem $theme={theme}>Hover and active states provide visual feedback</ListItem>
        </List>
      </DocsSection>

      <DocsSection>
        <DocsSectionTitle>Props</DocsSectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <tr>
              <TableHeader $theme={theme}>Prop</TableHeader>
              <TableHeader $theme={theme}>Type</TableHeader>
              <TableHeader $theme={theme}>Default</TableHeader>
              <TableHeader $theme={theme}>Description</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>theme</CodeCell>
              <CodeCell $theme={theme}>CategoryTheme</CodeCell>
              <CodeCell $theme={theme}>'music'</CodeCell>
              <TableCell $theme={theme}>Theme variant (music, nightlife, coffee, sports, movies, comedy, wellness, themeParks)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>size</CodeCell>
              <CodeCell $theme={theme}>'big' | 'small'</CodeCell>
              <CodeCell $theme={theme}>'big'</CodeCell>
              <TableCell $theme={theme}>Size of the card (big: 300×360px, small: 160×220px)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>title</CodeCell>
              <CodeCell $theme={theme}>string</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Custom title (uses theme default if not provided)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>subtitle</CodeCell>
              <CodeCell $theme={theme}>string</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Custom subtitle (uses theme default if not provided)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>icon</CodeCell>
              <CodeCell $theme={theme}>React.ReactNode</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Custom icon component</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>imageUrl</CodeCell>
              <CodeCell $theme={theme}>string</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Custom image URL (uses theme default if not provided)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>onClick</CodeCell>
              <CodeCell $theme={theme}>() =&gt; void</CodeCell>
              <CodeCell $theme={theme}>undefined</CodeCell>
              <TableCell $theme={theme}>Click handler for the card</TableCell>
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
        <List $theme={theme}>
          <ListItem $theme={theme}><strong>Title (Big):</strong> 24px / Bold / -0.48px letter-spacing / 28px line-height</ListItem>
          <ListItem $theme={theme}><strong>Title (Small):</strong> 16px / Bold / -0.32px letter-spacing / 20px line-height</ListItem>
          <ListItem $theme={theme}><strong>Subtitle (Big):</strong> 16px / Regular / 22px line-height</ListItem>
          <ListItem $theme={theme}><strong>Subtitle (Small):</strong> 13px / Regular / 18px line-height</ListItem>
        </List>

        <DocsSubsectionTitle>Spacing</DocsSubsectionTitle>
        <List $theme={theme}>
          <ListItem $theme={theme}><strong>Big Card Padding:</strong> spacing[5] (20px)</ListItem>
          <ListItem $theme={theme}><strong>Small Card Padding:</strong> spacing[3] (12px)</ListItem>
          <ListItem $theme={theme}><strong>Content Gap (Big):</strong> spacing[3] (12px)</ListItem>
          <ListItem $theme={theme}><strong>Content Gap (Small):</strong> spacing[2] (8px)</ListItem>
        </List>

        <DocsSubsectionTitle>Effects</DocsSubsectionTitle>
        <List $theme={theme}>
          <ListItem $theme={theme}><strong>Card Shadow:</strong> 0px 0px 20px 5px (theme-specific)</ListItem>
          <ListItem $theme={theme}><strong>Image Shadow:</strong> 0px 20px 40px 0px neutral dark alpha 50%</ListItem>
          <ListItem $theme={theme}><strong>Border Radius (Big):</strong> 20px</ListItem>
          <ListItem $theme={theme}><strong>Border Radius (Small):</strong> 12px</ListItem>
        </List>
      </DocsSection>
    </DocsLayout>
  );
}
