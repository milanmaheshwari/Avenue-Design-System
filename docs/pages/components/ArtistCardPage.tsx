/**
 * ArtistCard Component Documentation Page
 * Comprehensive documentation following component-page-command rules
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { ArtistCard } from '../../../components/ArtistCard';
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
import demoImage1 from '../../../assets/fae9216881de499113dd7791f82ff50e3aaa7af1.png';
import demoImage2 from '../../../assets/fd092aafde0b7229084b06b4cb61662024365b50.png';

// Demo images
const DEMO_IMAGE_1 = demoImage1;
const DEMO_IMAGE_2 = demoImage2;

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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing[8]};
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

export const ArtistCardPage: React.FC = () => {
  const { theme } = useTheme();
  return (
    <DocsLayout currentPath="/components/artist-card">
      <DocsPageHeader
        title="Artist Card"
        description="A card component for displaying artist and performer information with category-themed styling and multiple size variants."
      />

      {/* 1. OVERVIEW */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The ArtistCard component provides an elegant way to showcase artists, performers, and entertainers
          in your application. It features rounded images with category-themed color overlays, artist names,
          and genre labels. The component supports two size variants and integrates seamlessly with the
          category color system for consistent theming.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Use this component when:</strong>
        </DocsParagraph>
        <DocsParagraph>
          • Displaying artists, musicians, comedians, or performers<br/>
          • Building artist discovery or browse interfaces<br/>
          • Creating lineup displays for events or venues<br/>
          • Showcasing talent with category-specific visual theming<br/>
          • Building interactive artist selection flows
        </DocsParagraph>

        <ComponentDemo>
          <ArtistCard
            size="big"
            name="The Acoustic Duo"
            genre="Electronic"
            imageUrl={DEMO_IMAGE_1}
            category="music"
          />
          <ArtistCard
            size="big"
            name="Marty O'Neill"
            genre="Indie"
            imageUrl={DEMO_IMAGE_2}
            category="comedy"
          />
        </ComponentDemo>
      </DocsSection>

      {/* 2. VARIANTS */}
      <DocsSection>
        <DocsSectionTitle>Variants</DocsSectionTitle>
        <DocsParagraph>
          The ArtistCard component supports two size variants and eight category themes.
        </DocsParagraph>

        <DocsSubsectionTitle>Size Variants</DocsSubsectionTitle>
        <VariantGrid>
          <div>
            <VariantLabel>Big (200×200)</VariantLabel>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArtistCard
                size="big"
                name="The Acoustic Duo"
                genre="Electronic"
                imageUrl={DEMO_IMAGE_1}
                category="music"
              />
            </div>
          </div>
          <div>
            <VariantLabel>Small (120×120)</VariantLabel>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArtistCard
                size="small"
                name="Marty O'Neill"
                genre="Indie"
                imageUrl={DEMO_IMAGE_2}
                category="comedy"
              />
            </div>
          </div>
        </VariantGrid>

        <DocsSubsectionTitle>Category Themes</DocsSubsectionTitle>
        <DocsParagraph>
          The component supports two category themes (Music and Comedy), each applying a unique color overlay to the image and colors the text accordingly:
        </DocsParagraph>
        <VariantGrid style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '500px', margin: `${spacing[6]} auto` }}>
          {['music', 'comedy'].map((cat) => (
            <div key={cat}>
              <VariantLabel>{cat.charAt(0).toUpperCase() + cat.slice(1)}</VariantLabel>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ArtistCard
                  size="small"
                  name="Artist Name"
                  genre="Genre"
                  imageUrl={cat === 'music' ? DEMO_IMAGE_1 : DEMO_IMAGE_2}
                  category={cat as any}
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
              <TableHeader $theme={theme}>Big Variant</TableHeader>
              <TableHeader $theme={theme}>Small Variant</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Card Width</TableCell>
              <TableCell $theme={theme}>200px</TableCell>
              <TableCell $theme={theme}>120px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image Size</TableCell>
              <TableCell $theme={theme}>200×200px</TableCell>
              <TableCell $theme={theme}>120×120px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image Border Radius</TableCell>
              <TableCell $theme={theme}>40px</TableCell>
              <TableCell $theme={theme}>24px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Content Gap</TableCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>12px</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Spacing</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Token</TableHeader>
              <TableHeader $theme={theme}>Value</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image-Text Gap (Big)</TableCell>
              <CodeCell $theme={theme}>spacing[5]</CodeCell>
              <TableCell $theme={theme}>20px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image-Text Gap (Small)</TableCell>
              <CodeCell $theme={theme}>spacing[3]</CodeCell>
              <TableCell $theme={theme}>12px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Name-Genre Gap (Big)</TableCell>
              <CodeCell $theme={theme}>spacing[2]</CodeCell>
              <TableCell $theme={theme}>8px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Name-Genre Gap (Small)</TableCell>
              <TableCell $theme={theme}>0px</TableCell>
              <TableCell $theme={theme}>Stacked tightly</TableCell>
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
              <TableCell $theme={theme}>Artist Name (Big)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.heading[700]</CodeCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Artist Name (Small)</TableCell>
              <CodeCell $theme={theme}>typography.mobile.heading[600]</CodeCell>
              <TableCell $theme={theme}>14px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Genre (Big)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.body.regular[300]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>Regular (400)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Genre (Small)</TableCell>
              <CodeCell $theme={theme}>typography.mobile.body.regular[300]</CodeCell>
              <TableCell $theme={theme}>13px</TableCell>
              <TableCell $theme={theme}>Regular (400)</TableCell>
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
              <TableCell $theme={theme}>Category Overlay (Music)</TableCell>
              <CodeCell $theme={theme}>colors.music.alpha[5]</CodeCell>
              <TableCell $theme={theme}>5% purple overlay</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Category Overlay (Comedy)</TableCell>
              <CodeCell $theme={theme}>colors.comedy.alpha[5]</CodeCell>
              <TableCell $theme={theme}>5% yellow overlay</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Artist Name (Music)</TableCell>
              <CodeCell $theme={theme}>colors.music[100]</CodeCell>
              <TableCell $theme={theme}>Light purple tint (#fae8ff)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Artist Name (Comedy)</TableCell>
              <CodeCell $theme={theme}>colors.comedy[100]</CodeCell>
              <TableCell $theme={theme}>Light yellow tint (#fef9c3)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Genre Text</TableCell>
              <CodeCell $theme={theme}>colors[category][100]</CodeCell>
              <TableCell $theme={theme}>Same as artist name</TableCell>
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
              <TableCell $theme={theme}>Image Shadow</TableCell>
              <TableCell $theme={theme}>0px 13.714px 27.429px rgba(0,0,0,0.32)</TableCell>
              <TableCell $theme={theme}>Depth and elevation</TableCell>
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

        <DocsSubsectionTitle>Text Alignment</DocsSubsectionTitle>
        <DocsParagraph>
          The big variant centers all text, while the small variant left-aligns text for better readability
          in compact spaces.
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
                Use high-quality, well-lit artist photos with clear subject matter.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use low-resolution or poorly cropped images — quality is essential for artist representation.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Match the category to the artist's primary discipline (music, comedy, etc.).
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use inconsistent categories — it confuses users and breaks visual hierarchy.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Keep artist names concise and genre labels short (1-2 words).
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Write lengthy descriptions — this component is designed for quick scanning.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Use the big variant for featured artists and small variant for compact grids.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Mix sizes randomly in the same grid — maintain visual consistency.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>
        </GuidelineSection>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <DocsParagraph>
          • Use square images (1:1 aspect ratio) for best results<br/>
          • Provide onClick handlers for interactive artist selection<br/>
          • Use big variant for 3-4 column layouts<br/>
          • Use small variant for 5+ column layouts or sidebars<br/>
          • Ensure images have good contrast with category overlays<br/>
          • Test with various image compositions
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
          • Image alt text uses artist name
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
              <TableCell $theme={theme}>Artist Name (category[100])</TableCell>
              <TableCell $theme={theme}>Dark background</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Genre Text (category[100])</TableCell>
              <TableCell $theme={theme}>Dark background</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Font Size Requirements</DocsSubsectionTitle>
        <DocsParagraph>
          • Big name: 20px — exceeds 18px minimum<br/>
          • Big genre: 16px — meets 14px minimum<br/>
          • Small name: 14px — meets 14px minimum<br/>
          • Small genre: 13px — acceptable for secondary text
        </DocsParagraph>

        <DocsSubsectionTitle>Keyboard Navigation</DocsSubsectionTitle>
        <DocsParagraph>
          Interactive cards are fully keyboard accessible:<br/>
          • Tab to focus the card<br/>
          • Enter or Space to activate onClick<br/>
          • Focus indicators are provided by browser defaults
        </DocsParagraph>
      </DocsSection>

      {/* 7. DEVELOPER CODE */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Installation</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { ArtistCard } from '@avenue/design-system/components';`}</DocsCodeBlock>

        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`<ArtistCard
  name="The Acoustic Duo"
  genre="Electronic"
  imageUrl="/path/to/artist.jpg"
  category="music"
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Size Variant</DocsSubsectionTitle>
        <DocsCodeBlock>{`<ArtistCard
  size="small"
  name="Marty O'Neill"
  genre="Indie"
  imageUrl="/path/to/artist.jpg"
  category="comedy"
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Click Handler</DocsSubsectionTitle>
        <DocsCodeBlock>{`<ArtistCard
  size="big"
  name="Luna Rivers"
  genre="Pop"
  imageUrl="/path/to/artist.jpg"
  category="music"
  onClick={() => navigate('/artists/luna-rivers')}
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Full Example with Grid</DocsSubsectionTitle>
        <DocsCodeBlock>{`import React from 'react';
import { ArtistCard } from '@avenue/design-system/components';

function ArtistGrid() {
  const artists = [
    { id: 1, name: 'The Band', genre: 'Rock', image: '/img1.jpg', category: 'music' },
    { id: 2, name: 'Comedian', genre: 'Stand-up', image: '/img2.jpg', category: 'comedy' },
    // ... more artists
  ];

  const handleArtistClick = (artistId: number) => {
    console.log('Selected artist:', artistId);
    // Navigate or show details
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '32px'
    }}>
      {artists.map((artist) => (
        <ArtistCard
          key={artist.id}
          size="big"
          name={artist.name}
          genre={artist.genre}
          imageUrl={artist.image}
          category={artist.category as any}
          onClick={() => handleArtistClick(artist.id)}
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
              <TableCell $theme={theme}>'big' | 'small'</TableCell>
              <TableCell $theme={theme}>'big'</TableCell>
              <TableCell $theme={theme}>Size variant of the card</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>name</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Artist or performer name</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>genre</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Genre or performance type</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>imageUrl</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Artist image URL (1:1 ratio recommended)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>category</CodeCell>
              <TableCell $theme={theme}>ArtistCategory</TableCell>
              <TableCell $theme={theme}>'music'</TableCell>
              <TableCell $theme={theme}>Category for color theming</TableCell>
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
        <DocsCodeBlock>{`type ArtistCategory = 'music' | 'comedy';

type ArtistCardSize = 'big' | 'small';

interface ArtistCardProps {
  size?: ArtistCardSize;
  name: string;
  genre: string;
  imageUrl: string;
  category?: ArtistCategory;
  onClick?: () => void;
}`}</DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
};

