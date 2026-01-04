/**
 * AddItem Component Documentation Page
 * Comprehensive documentation following component-page-command rules
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { AddItem } from '../../../components/AddItem';
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
import demoImage from '../../../assets/a5561ce6332b43441a50ac1c989d165d124b3efd.png';

// Demo image placeholder
const DEMO_IMAGE = demoImage;

const ComponentDemo = styled.div`
  background-color: ${colors.neutral[950]};
  padding: ${spacing[8]};
  border-radius: 12px;
  margin: ${spacing[6]} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${spacing[8]};
  margin: ${spacing[6]} 0;
  background-color: ${colors.neutral[950]};
  padding: ${spacing[8]};
  border-radius: 12px;
`;

const VariantWrapper = styled.div<{ $width: string }>`
  width: ${props => props.$width};
  margin: 0 auto;
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

const GuidelineTitle = styled.h4<{ $type: 'do' | 'dont' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[700].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${props => props.$type === 'do' ? colors.wellness[700] : colors.semantic.error};
  margin: 0 0 ${spacing[3]} 0;
`;

const GuidelineText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${colors.neutral[700]};
  margin: 0;
`;

export const AddItemPage: React.FC = () => {
  const [addCount, setAddCount] = useState(0);
  const { theme } = useTheme();

  return (
    <DocsLayout currentPath="/components/add-item">
      <DocsPageHeader
        title="Add Item"
        description="A product card component for displaying items with category-themed styling and add-to-cart functionality."
      />

      {/* 1. OVERVIEW */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The AddItem component is a versatile product card designed for e-commerce and catalog interfaces. 
          It displays product information (image, title, price) with a prominent call-to-action button. 
          The component supports category-based theming through gradient overlays and comes in two size variants.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Use this component when:</strong>
        </DocsParagraph>
        <DocsParagraph>
          • Displaying products in a grid or list layout<br/>
          • Building shopping experiences with add-to-cart functionality<br/>
          • Showcasing items with category-specific visual theming<br/>
          • Creating responsive product galleries that work across devices
        </DocsParagraph>

        <ComponentDemo>
          <VariantWrapper $width="240px">
            <AddItem
              size="Big"
              title="Official Cosmic Collision Cap"
              price="$100.00"
              imageUrl={DEMO_IMAGE}
              category="movies"
              onAdd={() => setAddCount(addCount + 1)}
            />
          </VariantWrapper>
        </ComponentDemo>
      </DocsSection>

      {/* 2. VARIANTS */}
      <DocsSection>
        <DocsSectionTitle>Variants</DocsSectionTitle>
        <DocsParagraph>
          The AddItem component supports two size variants and eight category themes.
        </DocsParagraph>

        <DocsSubsectionTitle>Size Variants</DocsSubsectionTitle>
        <VariantGrid>
          <div>
            <VariantLabel>Big (240×240)</VariantLabel>
            <VariantWrapper $width="240px">
              <AddItem
                size="Big"
                title="Product Title"
                price="$100.00"
                imageUrl={DEMO_IMAGE}
                category="movies"
              />
            </VariantWrapper>
          </div>
          <div>
            <VariantLabel>Small (160×160)</VariantLabel>
            <VariantWrapper $width="160px">
              <AddItem
                size="Small"
                title="Product Title"
                price="$100.00"
                imageUrl={DEMO_IMAGE}
                category="sports"
              />
            </VariantWrapper>
          </div>
        </VariantGrid>

        <DocsSubsectionTitle>Category Themes</DocsSubsectionTitle>
        <DocsParagraph>
          Each category applies a unique gradient overlay to the product image:
        </DocsParagraph>
        <VariantGrid style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {['comedy', 'nightlife', 'sports', 'music', 'movies', 'wellness', 'themeParks', 'coffee'].map((cat) => (
            <div key={cat}>
              <VariantLabel>{cat.charAt(0).toUpperCase() + cat.slice(1).replace(/([A-Z])/g, ' $1')}</VariantLabel>
              <VariantWrapper $width="160px">
                <AddItem
                  size="Small"
                  title="Item"
                  price="$50"
                  imageUrl={DEMO_IMAGE}
                  category={cat as any}
                />
              </VariantWrapper>
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
              <TableCell $theme={theme}>100% (container width)</TableCell>
              <TableCell $theme={theme}>100% (container width)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image Height</TableCell>
              <TableCell $theme={theme}>240px</TableCell>
              <TableCell $theme={theme}>160px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image Border Radius</TableCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button Border Radius</TableCell>
              <TableCell $theme={theme}>12px</TableCell>
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
              <TableCell $theme={theme}>Card Gap (Big)</TableCell>
              <CodeCell $theme={theme}>spacing[4]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Card Gap (Small)</TableCell>
              <CodeCell $theme={theme}>spacing[3]</CodeCell>
              <TableCell $theme={theme}>12px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Details Gap (Big)</TableCell>
              <CodeCell $theme={theme}>spacing[6]</CodeCell>
              <TableCell $theme={theme}>24px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Details Gap (Small)</TableCell>
              <CodeCell $theme={theme}>spacing[4]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Text Gap (Big)</TableCell>
              <CodeCell $theme={theme}>spacing[2]</CodeCell>
              <TableCell $theme={theme}>8px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Text Gap (Small)</TableCell>
              <CodeCell $theme={theme}>spacing[1]</CodeCell>
              <TableCell $theme={theme}>4px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button Padding (Big)</TableCell>
              <CodeCell $theme={theme}>spacing[4]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button Padding (Small)</TableCell>
              <CodeCell $theme={theme}>spacing[3]</CodeCell>
              <TableCell $theme={theme}>12px</TableCell>
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
              <CodeCell $theme={theme}>typography.desktop.heading[800]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title (Small)</TableCell>
              <CodeCell $theme={theme}>typography.mobile.heading[600]</CodeCell>
              <TableCell $theme={theme}>14px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Price (Big)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.body.medium[400]</CodeCell>
              <TableCell $theme={theme}>14px</TableCell>
              <TableCell $theme={theme}>Medium (500)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Price (Small)</TableCell>
              <CodeCell $theme={theme}>typography.mobile.body.medium[300]</CodeCell>
              <TableCell $theme={theme}>13px</TableCell>
              <TableCell $theme={theme}>Medium (500)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button (Big)</TableCell>
              <CodeCell $theme={theme}>typography.desktop.button[300]</CodeCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button (Small)</TableCell>
              <CodeCell $theme={theme}>typography.mobile.button[200]</CodeCell>
              <TableCell $theme={theme}>14px</TableCell>
              <TableCell $theme={theme}>Bold (700)</TableCell>
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
              <TableCell $theme={theme}>Image Background</TableCell>
              <CodeCell $theme={theme}>colors.neutral[950]</CodeCell>
              <TableCell $theme={theme}>Fallback background</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Category Gradient</TableCell>
              <CodeCell $theme={theme}>colors[category].alpha[5/10]</CodeCell>
              <TableCell $theme={theme}>Category-themed overlay</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Image Border</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[10]</CodeCell>
              <TableCell $theme={theme}>Subtle border overlay</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title Text</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[90]</CodeCell>
              <TableCell $theme={theme}>High contrast on dark</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Price Text</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[75]</CodeCell>
              <TableCell $theme={theme}>Secondary text</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button Background</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[5/10]</CodeCell>
              <TableCell $theme={theme}>Gradient fill</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button Text</TableCell>
              <CodeCell $theme={theme}>colors.primary[50]</CodeCell>
              <TableCell $theme={theme}>Light text on gradient</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      {/* 4. BEHAVIOUR */}
      <DocsSection>
        <DocsSectionTitle>Behaviour</DocsSectionTitle>
        
        <DocsSubsectionTitle>Interaction States</DocsSubsectionTitle>
        <DocsParagraph>
          The ADD button responds to user interaction with smooth transitions and transforms.
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
              <TableCell $theme={theme}>Hover</TableCell>
              <TableCell $theme={theme}>Transform</TableCell>
              <TableCell $theme={theme}>translateY(-2px)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Active</TableCell>
              <TableCell $theme={theme}>Transform</TableCell>
              <TableCell $theme={theme}>translateY(0)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>All States</TableCell>
              <TableCell $theme={theme}>Transition</TableCell>
              <TableCell $theme={theme}>all 250ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Motion Tokens</DocsSubsectionTitle>
        <DocsParagraph>
          <strong>Duration:</strong> 250ms<br/>
          <strong>Easing:</strong> cubic-bezier(0.4, 0, 0.2, 1) — smooth ease-in-out for natural motion<br/>
          <strong>Properties:</strong> transform (all states)
        </DocsParagraph>

        <DocsSubsectionTitle>Text Overflow</DocsSubsectionTitle>
        <DocsParagraph>
          Product titles automatically truncate with ellipsis after 2 lines to maintain consistent card heights.
        </DocsParagraph>
      </DocsSection>

      {/* 5. USAGE GUIDELINES */}
      <DocsSection>
        <DocsSectionTitle>Usage Guidelines</DocsSectionTitle>
        
        <GuidelineSection>
          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle $type="do">✓ Do</GuidelineTitle>
              <GuidelineText>
                Use consistent sizing within the same grid or layout to maintain visual rhythm.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle $type="dont">✗ Don't</GuidelineTitle>
              <GuidelineText>
                Mix Big and Small variants in the same row — it creates visual inconsistency.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle $type="do">✓ Do</GuidelineTitle>
              <GuidelineText>
                Match the category prop to the product's actual category for accurate theming.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle $type="dont">✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use random or mismatched categories — it confuses users and breaks visual hierarchy.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle $type="do">✓ Do</GuidelineTitle>
              <GuidelineText>
                Provide high-quality product images with good lighting and clear subject matter.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle $type="dont">✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use low-resolution, poorly cropped, or stretched images — quality matters.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle $type="do">✓ Do</GuidelineTitle>
              <GuidelineText>
                Keep product titles concise and descriptive (2 lines maximum).
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle $type="dont">✗ Don't</GuidelineTitle>
              <GuidelineText>
                Write lengthy titles that will be truncated — critical information may be hidden.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>
        </GuidelineSection>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <DocsParagraph>
          • Use Big variant for desktop grid layouts (3-4 columns)<br/>
          • Use Small variant for mobile layouts or dense desktop grids (5+ columns)<br/>
          • Always provide the onAdd callback for proper functionality<br/>
          • Ensure images have a 1:1 aspect ratio for best results<br/>
          • Test with long product titles to verify truncation behavior
        </DocsParagraph>
      </DocsSection>

      {/* 6. ACCESSIBILITY */}
      <DocsSection>
        <DocsSectionTitle>Accessibility</DocsSectionTitle>
        
        <DocsSubsectionTitle>ARIA Support</DocsSubsectionTitle>
        <DocsParagraph>
          The ADD button includes an accessible label that announces "Add [product title] to cart" 
          to screen readers, providing context about the button's action.
        </DocsParagraph>

        <DocsSubsectionTitle>Color Contrast</DocsSubsectionTitle>
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Contrast Ratio</TableHeader>
              <TableHeader $theme={theme}>WCAG Level</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Title Text (90% opacity on dark)</TableCell>
              <TableCell $theme={theme}>{'>'} 14:1</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Price Text (75% opacity on dark)</TableCell>
              <TableCell $theme={theme}>{'>'} 7:1</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Button Text</TableCell>
              <TableCell $theme={theme}>{'>'} 8:1</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Font Size Requirements</DocsSubsectionTitle>
        <DocsParagraph>
          • Title: 16px (Big) / 14px (Small) — meets minimum 14px requirement<br/>
          • Price: 14px (Big) / 13px (Small) — acceptable for secondary text<br/>
          • Button: 16px (Big) / 14px (Small) — meets interactive element minimum
        </DocsParagraph>

        <DocsSubsectionTitle>Keyboard Navigation</DocsSubsectionTitle>
        <DocsParagraph>
          The ADD button is fully keyboard accessible:<br/>
          • Tab to focus the button<br/>
          • Enter or Space to trigger the onAdd callback<br/>
          • Focus indicators are automatically handled by browser defaults
        </DocsParagraph>

        <DocsSubsectionTitle>Screen Reader Guidance</DocsSubsectionTitle>
        <DocsParagraph>
          Screen readers will announce:<br/>
          1. Product image with alt text (product title)<br/>
          2. Product title as heading<br/>
          3. Price<br/>
          4. "Add [product title] to cart" button
        </DocsParagraph>
      </DocsSection>

      {/* 7. DEVELOPER CODE */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Installation</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { AddItem } from '@avenue/design-system/components';`}</DocsCodeBlock>

        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`<AddItem
  title="Official Cosmic Collision Cap"
  price="$100.00"
  imageUrl="/path/to/image.png"
  onAdd={() => console.log('Item added')}
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Size Variant</DocsSubsectionTitle>
        <DocsCodeBlock>{`<AddItem
  size="Small"
  title="Product Name"
  price="$50.00"
  imageUrl="/path/to/image.png"
  onAdd={handleAddToCart}
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Category Theme</DocsSubsectionTitle>
        <DocsCodeBlock>{`<AddItem
  size="Big"
  title="Concert Ticket"
  price="$85.00"
  imageUrl="/path/to/ticket.png"
  category="music"
  onAdd={handleAddToCart}
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>Full Example with State</DocsSubsectionTitle>
        <DocsCodeBlock>{`import React, { useState } from 'react';
import { AddItem } from '@avenue/design-system/components';

function ProductGrid() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    setCart([...cart, productId]);
    // Show notification, update cart UI, etc.
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
      <AddItem
        size="Big"
        title="Comedy Show Ticket"
        price="$45.00"
        imageUrl="/comedy-show.jpg"
        category="comedy"
        onAdd={() => handleAddToCart('comedy-001')}
      />
      <AddItem
        size="Big"
        title="Sports Event Pass"
        price="$120.00"
        imageUrl="/sports-event.jpg"
        category="sports"
        onAdd={() => handleAddToCart('sports-001')}
      />
      <AddItem
        size="Big"
        title="Movie Premiere"
        price="$25.00"
        imageUrl="/movie-premiere.jpg"
        category="movies"
        onAdd={() => handleAddToCart('movies-001')}
      />
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
              <TableCell $theme={theme}>'Big' | 'Small'</TableCell>
              <TableCell $theme={theme}>'Big'</TableCell>
              <TableCell $theme={theme}>Size variant of the card</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>title</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Product title (max 2 lines)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>price</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Product price (formatted string)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>imageUrl</CodeCell>
              <TableCell $theme={theme}>string</TableCell>
              <TableCell $theme={theme}>required</TableCell>
              <TableCell $theme={theme}>Product image URL (1:1 ratio recommended)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>onAdd</CodeCell>
              <TableCell $theme={theme}>{'() => void'}</TableCell>
              <TableCell $theme={theme}>undefined</TableCell>
              <TableCell $theme={theme}>Callback when ADD button is clicked</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>category</CodeCell>
              <TableCell $theme={theme}>CategoryType</TableCell>
              <TableCell $theme={theme}>'movies'</TableCell>
              <TableCell $theme={theme}>Category for gradient theming</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Type Definitions</DocsSubsectionTitle>
        <DocsCodeBlock>{`type CategoryType = 
  | 'comedy' 
  | 'nightlife' 
  | 'sports' 
  | 'music' 
  | 'movies' 
  | 'wellness' 
  | 'themeParks' 
  | 'coffee';

interface AddItemProps {
  size?: 'Big' | 'Small';
  title: string;
  price: string;
  imageUrl: string;
  onAdd?: () => void;
  category?: CategoryType;
}`}</DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
};

