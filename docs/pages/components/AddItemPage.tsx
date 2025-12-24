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
              <TableCell>100% (container width)</TableCell>
              <TableCell>100% (container width)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image Height</TableCell>
              <TableCell>240px</TableCell>
              <TableCell>160px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image Border Radius</TableCell>
              <TableCell>20px</TableCell>
              <TableCell>16px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button Border Radius</TableCell>
              <TableCell>12px</TableCell>
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
              <TableCell>Card Gap (Big)</TableCell>
              <CodeCell>spacing[4]</CodeCell>
              <TableCell>16px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Card Gap (Small)</TableCell>
              <CodeCell>spacing[3]</CodeCell>
              <TableCell>12px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Details Gap (Big)</TableCell>
              <CodeCell>spacing[6]</CodeCell>
              <TableCell>24px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Details Gap (Small)</TableCell>
              <CodeCell>spacing[4]</CodeCell>
              <TableCell>16px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Text Gap (Big)</TableCell>
              <CodeCell>spacing[2]</CodeCell>
              <TableCell>8px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Text Gap (Small)</TableCell>
              <CodeCell>spacing[1]</CodeCell>
              <TableCell>4px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button Padding (Big)</TableCell>
              <CodeCell>spacing[4]</CodeCell>
              <TableCell>16px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button Padding (Small)</TableCell>
              <CodeCell>spacing[3]</CodeCell>
              <TableCell>12px</TableCell>
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
              <CodeCell>typography.desktop.heading[800]</CodeCell>
              <TableCell>16px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title (Small)</TableCell>
              <CodeCell>typography.mobile.heading[600]</CodeCell>
              <TableCell>14px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price (Big)</TableCell>
              <CodeCell>typography.desktop.body.medium[400]</CodeCell>
              <TableCell>14px</TableCell>
              <TableCell>Medium (500)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price (Small)</TableCell>
              <CodeCell>typography.mobile.body.medium[300]</CodeCell>
              <TableCell>13px</TableCell>
              <TableCell>Medium (500)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button (Big)</TableCell>
              <CodeCell>typography.desktop.button[300]</CodeCell>
              <TableCell>16px</TableCell>
              <TableCell>Bold (700)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button (Small)</TableCell>
              <CodeCell>typography.mobile.button[200]</CodeCell>
              <TableCell>14px</TableCell>
              <TableCell>Bold (700)</TableCell>
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
              <TableCell>Image Background</TableCell>
              <CodeCell>colors.neutral[950]</CodeCell>
              <TableCell>Fallback background</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Category Gradient</TableCell>
              <CodeCell>colors[category].alpha[5/10]</CodeCell>
              <TableCell>Category-themed overlay</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Image Border</TableCell>
              <CodeCell>colors.neutral.light.alpha[10]</CodeCell>
              <TableCell>Subtle border overlay</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Title Text</TableCell>
              <CodeCell>colors.neutral.light.alpha[90]</CodeCell>
              <TableCell>High contrast on dark</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price Text</TableCell>
              <CodeCell>colors.neutral.light.alpha[75]</CodeCell>
              <TableCell>Secondary text</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button Background</TableCell>
              <CodeCell>colors.neutral.light.alpha[5/10]</CodeCell>
              <TableCell>Gradient fill</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button Text</TableCell>
              <CodeCell>colors.primary[50]</CodeCell>
              <TableCell>Light text on gradient</TableCell>
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
              <TableCell>Hover</TableCell>
              <TableCell>Transform</TableCell>
              <TableCell>translateY(-2px)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active</TableCell>
              <TableCell>Transform</TableCell>
              <TableCell>translateY(0)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>All States</TableCell>
              <TableCell>Transition</TableCell>
              <TableCell>all 250ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
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
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Contrast Ratio</TableHeader>
              <TableHeader>WCAG Level</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Title Text (90% opacity on dark)</TableCell>
              <TableCell>{'>'} 14:1</TableCell>
              <TableCell>AAA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price Text (75% opacity on dark)</TableCell>
              <TableCell>{'>'} 7:1</TableCell>
              <TableCell>AAA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Button Text</TableCell>
              <TableCell>{'>'} 8:1</TableCell>
              <TableCell>AAA</TableCell>
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
              <TableCell>'Big' | 'Small'</TableCell>
              <TableCell>'Big'</TableCell>
              <TableCell>Size variant of the card</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>title</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Product title (max 2 lines)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>price</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Product price (formatted string)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>imageUrl</CodeCell>
              <TableCell>string</TableCell>
              <TableCell>required</TableCell>
              <TableCell>Product image URL (1:1 ratio recommended)</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>onAdd</CodeCell>
              <TableCell>{'() => void'}</TableCell>
              <TableCell>undefined</TableCell>
              <TableCell>Callback when ADD button is clicked</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>category</CodeCell>
              <TableCell>CategoryType</TableCell>
              <TableCell>'movies'</TableCell>
              <TableCell>Category for gradient theming</TableCell>
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

