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

export const ArtistCardPage: React.FC = () => {
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
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Big Variant</TableHeader>
              <TableHeader>Small Variant</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Card Width</TableCell>
              <TableCell>200px</TableCell>
              <TableCell>120px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image Size</TableCell>
              <TableCell>200×200px</TableCell>
              <TableCell>120×120px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image Border Radius</TableCell>
              <TableCell>40px</TableCell>
              <TableCell>24px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Content Gap</TableCell>
              <TableCell>20px</TableCell>
              <TableCell>12px</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Spacing</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Token</TableHeader>
              <TableHeader>Value</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Image-Text Gap (Big)</TableCell>
              <CodeCell>spacing[5]</CodeCell>
              <TableCell>20px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image-Text Gap (Small)</TableCell>
              <CodeCell>spacing[3]</CodeCell>
              <TableCell>12px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name-Genre Gap (Big)</TableCell>
              <CodeCell>spacing[2]</CodeCell>
              <TableCell>8px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name-Genre Gap (Small)</TableCell>
              <TableCell>0px</TableCell>
              <TableCell>Stacked tightly</TableCell>
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
              <TableCell>Artist Name (Big)</TableCell>
              <CodeCell>typography.desktop.heading[700]</CodeCell>
              <TableCell>20px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Artist Name (Small)</TableCell>
              <CodeCell>typography.mobile.heading[600]</CodeCell>
              <TableCell>14px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genre (Big)</TableCell>
              <CodeCell>typography.desktop.body.regular[300]</CodeCell>
              <TableCell>16px</TableCell>
              <TableCell>Regular (400)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genre (Small)</TableCell>
              <CodeCell>typography.mobile.body.regular[300]</CodeCell>
              <TableCell>13px</TableCell>
              <TableCell>Regular (400)</TableCell>
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
              <TableCell>Category Overlay (Music)</TableCell>
              <CodeCell>colors.music.alpha[5]</CodeCell>
              <TableCell>5% purple overlay</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Category Overlay (Comedy)</TableCell>
              <CodeCell>colors.comedy.alpha[5]</CodeCell>
              <TableCell>5% yellow overlay</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Artist Name (Music)</TableCell>
              <CodeCell>colors.music[100]</CodeCell>
              <TableCell>Light purple tint (#fae8ff)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Artist Name (Comedy)</TableCell>
              <CodeCell>colors.comedy[100]</CodeCell>
              <TableCell>Light yellow tint (#fef9c3)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genre Text</TableCell>
              <CodeCell>colors[category][100]</CodeCell>
              <TableCell>Same as artist name</TableCell>
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
              <TableCell>Image Shadow</TableCell>
              <TableCell>0px 13.714px 27.429px rgba(0,0,0,0.32)</TableCell>
              <TableCell>Depth and elevation</TableCell>
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
              <TableCell>Artist Name (category[100])</TableCell>
              <TableCell>Dark background</TableCell>
              <TableCell>AAA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Genre Text (category[100])</TableCell>
              <TableCell>Dark background</TableCell>
              <TableCell>AAA</TableCell>
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
              <TableCell>'big' | 'small'</TableCell>
              <TableCell>'big'</TableCell>
              <TableCell>Size variant of the card</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>name</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Artist or performer name</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>genre</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Genre or performance type</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>imageUrl</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Artist image URL (1:1 ratio recommended)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>category</CodeCell>
              <TableCell>ArtistCategory</TableCell>
              <TableCell>'music'</TableCell>
              <TableCell>Category for color theming</TableCell>
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

