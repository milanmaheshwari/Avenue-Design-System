/**
 * AppNavBar Component Documentation Page
 * Comprehensive documentation following component-page-command rules
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../../../tokens';
import { AppNavBar, NavTab } from '../../../components/AppNavBar';
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
  border-radius: 12px;
  margin: ${spacing[6]} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing[6]};
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

export const AppNavBarPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  return (
    <DocsLayout currentPath="/components/app-nav-bar">
      <DocsPageHeader
        title="App Nav Bar"
        description="A mobile navigation component with glassmorphic styling, smooth animations, and clear active state indicators."
      />

      {/* 1. OVERVIEW */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The AppNavBar component provides a modern, mobile-first navigation solution with a glassmorphic design. 
          It features four primary navigation tabs with icons and labels, smooth transitions between states, 
          and a glowing indicator beneath the active tab. The component uses backdrop blur effects and 
          semi-transparent backgrounds for a sophisticated, contemporary look.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Use this component when:</strong>
        </DocsParagraph>
        <DocsParagraph>
          • Building mobile applications that require persistent bottom navigation<br/>
          • Creating tab-based navigation with 4 primary sections<br/>
          • Implementing glassmorphic UI patterns with backdrop blur<br/>
          • Providing clear visual feedback for navigation state
        </DocsParagraph>

        <ComponentDemo>
          <AppNavBar 
            active={activeTab} 
            onTabClick={setActiveTab}
          />
        </ComponentDemo>
      </DocsSection>

      {/* 2. VARIANTS */}
      <DocsSection>
        <DocsSectionTitle>Variants</DocsSectionTitle>
        <DocsParagraph>
          The AppNavBar component supports four navigation tabs, each with distinct active and inactive states.
        </DocsParagraph>

        <DocsSubsectionTitle>Navigation Tabs</DocsSubsectionTitle>
        <VariantGrid>
          <div>
            <VariantLabel>Home Active</VariantLabel>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AppNavBar active="home" />
            </div>
          </div>
          <div>
            <VariantLabel>Events Active</VariantLabel>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AppNavBar active="events" />
            </div>
          </div>
          <div>
            <VariantLabel>Tickets Active</VariantLabel>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AppNavBar active="tickets" />
            </div>
          </div>
          <div>
            <VariantLabel>Profile Active</VariantLabel>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <AppNavBar active="profile" />
            </div>
          </div>
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
              <TableHeader>Value</TableHeader>
              <TableHeader>Notes</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Nav Bar Width</TableCell>
              <TableCell>336px</TableCell>
              <TableCell>Fixed width for mobile</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nav Bar Height</TableCell>
              <TableCell>~64px</TableCell>
              <TableCell>Auto based on content</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Border Radius</TableCell>
              <TableCell>16px</TableCell>
              <TableCell>Rounded corners</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tab Width</TableCell>
              <TableCell>60px</TableCell>
              <TableCell>Fixed for consistency</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Icon Size</TableCell>
              <TableCell>32×32px</TableCell>
              <TableCell>Square icons</TableCell>
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
              <TableCell>Nav Bar Padding (Horizontal)</TableCell>
              <CodeCell>spacing[3]</CodeCell>
              <TableCell>12px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nav Bar Padding (Vertical)</TableCell>
              <CodeCell>spacing[2]</CodeCell>
              <TableCell>8px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tab Padding (Vertical)</TableCell>
              <CodeCell>spacing[1]</CodeCell>
              <TableCell>4px</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Icon-Label Gap</TableCell>
              <TableCell>6px</TableCell>
              <TableCell>Fixed spacing</TableCell>
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
              <TableCell>Tab Label</TableCell>
              <CodeCell>typography.mobile.overline[300]</CodeCell>
              <TableCell>12px</TableCell>
              <TableCell>Medium (500)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Letter Spacing</TableCell>
              <TableCell>1.2px</TableCell>
              <TableCell>10%</TableCell>
              <TableCell>Uppercase tracking</TableCell>
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
              <TableCell>Background (Start)</TableCell>
              <CodeCell>colors.neutral.dark.alpha[75]</CodeCell>
              <TableCell>Gradient start</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Background (End)</TableCell>
              <CodeCell>colors.neutral.dark.alpha[90]</CodeCell>
              <TableCell>Gradient end</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Border</TableCell>
              <CodeCell>colors.neutral.light.alpha[5]</CodeCell>
              <TableCell>Subtle border</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active Label</TableCell>
              <CodeCell>colors.primary[600]</CodeCell>
              <TableCell>Active tab text</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Inactive Label</TableCell>
              <CodeCell>colors.neutral.light.alpha[50]</CodeCell>
              <TableCell>Inactive tab text</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Icon Stroke</TableCell>
              <CodeCell>colors.neutral.light.alpha[90]</CodeCell>
              <TableCell>All icon strokes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active Indicator</TableCell>
              <CodeCell>colors.primary[600] + 80% opacity</CodeCell>
              <TableCell>Glow effect</TableCell>
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
              <TableCell>Backdrop Blur</TableCell>
              <TableCell>20px</TableCell>
              <TableCell>Glassmorphic effect</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Inner Shadow</TableCell>
              <TableCell>inset 0.5px 1px 0px 0.75px</TableCell>
              <TableCell>Subtle depth</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Active Glow</TableCell>
              <TableCell>Radial gradient</TableCell>
              <TableCell>Focus indicator</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>
      </DocsSection>

      {/* 4. BEHAVIOUR */}
      <DocsSection>
        <DocsSectionTitle>Behaviour</DocsSectionTitle>
        
        <DocsSubsectionTitle>Interaction States</DocsSubsectionTitle>
        <DocsParagraph>
          Each tab responds to user interaction with smooth transitions and visual feedback.
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
              <TableCell>Tab Transition</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>250ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Indicator Transition</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>300ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Active Indicator Animation</DocsSubsectionTitle>
        <DocsParagraph>
          The glowing indicator beneath the active tab smoothly animates between tabs when the selection changes. 
          The indicator uses a radial gradient for a soft glow effect and transitions horizontally based on 
          the active tab's position.
        </DocsParagraph>

        <DocsSubsectionTitle>Tab Selection</DocsSubsectionTitle>
        <DocsParagraph>
          When a tab is clicked, the onTabClick callback fires with the selected tab ID. The component updates 
          the visual state including the label color and indicator position. The tab lift animation provides 
          immediate tactile feedback.
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
                Use for primary mobile navigation with 3-5 main sections.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use more than 5 tabs — it creates crowding and poor touch targets.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Position at the bottom of mobile screens for easy thumb access.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Place at the top where it's harder to reach on large mobile devices.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Keep labels concise and clear (1-2 words maximum).
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Use long phrases that may wrap or truncate awkwardly.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>

          <GuidelineGrid>
            <GuidelineCard $type="do">
              <GuidelineTitle>✓ Do</GuidelineTitle>
              <GuidelineText>
                Use over content with sufficient contrast for the glassmorphic effect.
              </GuidelineText>
            </GuidelineCard>
            <GuidelineCard $type="dont">
              <GuidelineTitle>✗ Don't</GuidelineTitle>
              <GuidelineText>
                Place over very light backgrounds where the blur effect is lost.
              </GuidelineText>
            </GuidelineCard>
          </GuidelineGrid>
        </GuidelineSection>

        <DocsSubsectionTitle>Best Practices</DocsSubsectionTitle>
        <DocsParagraph>
          • Always provide meaningful onTabClick handlers for navigation<br/>
          • Sync the active prop with your routing state<br/>
          • Ensure adequate contrast with background content<br/>
          • Test touch targets are at least 44×44px for accessibility<br/>
          • Consider safe area insets on iOS devices
        </DocsParagraph>
      </DocsSection>

      {/* 6. ACCESSIBILITY */}
      <DocsSection>
        <DocsSectionTitle>Accessibility</DocsSectionTitle>
        
        <DocsSubsectionTitle>ARIA Support</DocsSubsectionTitle>
        <DocsParagraph>
          Each tab button includes:<br/>
          • aria-label with descriptive text ("Navigate to [Tab Name]")<br/>
          • aria-current="page" on the active tab<br/>
          • Semantic button elements for proper keyboard interaction
        </DocsParagraph>

        <DocsSubsectionTitle>Touch Target Size</DocsSubsectionTitle>
        <SpecTable>
          <TableHead>
            <TableRow>
              <TableHeader>Element</TableHeader>
              <TableHeader>Size</TableHeader>
              <TableHeader>WCAG Requirement</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow>
              <TableCell>Tab Button</TableCell>
              <TableCell>60×48px</TableCell>
              <TableCell>✓ Meets 44×44px minimum</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

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
              <TableCell>Active Label (primary[600] on dark)</TableCell>
              <TableCell>{'>'} 7:1</TableCell>
              <TableCell>AAA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Inactive Label (50% opacity on dark)</TableCell>
              <TableCell>{'>'} 4.5:1</TableCell>
              <TableCell>AA</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Keyboard Navigation</DocsSubsectionTitle>
        <DocsParagraph>
          The nav bar is fully keyboard accessible:<br/>
          • Tab key cycles through all navigation buttons<br/>
          • Enter or Space activates the focused tab<br/>
          • Focus indicators are visible by default<br/>
          • Left/Right arrow keys can be added for enhanced navigation
        </DocsParagraph>

        <DocsSubsectionTitle>Screen Reader Guidance</DocsSubsectionTitle>
        <DocsParagraph>
          Screen readers will announce:<br/>
          1. "Navigate to [Tab Name]" for each button<br/>
          2. "Current page" for the active tab<br/>
          3. Icon images have empty alt text (decorative)
        </DocsParagraph>
      </DocsSection>

      {/* 7. DEVELOPER CODE */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Installation</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { AppNavBar } from '@avenue/design-system/components';`}</DocsCodeBlock>

        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>{`<AppNavBar active="home" />`}</DocsCodeBlock>

        <DocsSubsectionTitle>With Navigation Handler</DocsSubsectionTitle>
        <DocsCodeBlock>{`<AppNavBar 
  active="events" 
  onTabClick={(tab) => console.log('Navigating to:', tab)}
/>`}</DocsCodeBlock>

        <DocsSubsectionTitle>With React Router</DocsSubsectionTitle>
        <DocsCodeBlock>{`import { useNavigate, useLocation } from 'react-router-dom';
import { AppNavBar, NavTab } from '@avenue/design-system/components';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Map routes to nav tabs
  const getActiveTab = (): NavTab => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/events')) return 'events';
    if (path.startsWith('/tickets')) return 'tickets';
    if (path.startsWith('/profile')) return 'profile';
    return 'home';
  };

  const handleTabClick = (tab: NavTab) => {
    const routes: Record<NavTab, string> = {
      home: '/',
      events: '/events',
      tickets: '/tickets',
      profile: '/profile'
    };
    navigate(routes[tab]);
  };

  return (
    <AppNavBar 
      active={getActiveTab()} 
      onTabClick={handleTabClick}
    />
  );
}`}</DocsCodeBlock>

        <DocsSubsectionTitle>With State Management</DocsSubsectionTitle>
        <DocsCodeBlock>{`import React, { useState } from 'react';
import { AppNavBar, NavTab } from '@avenue/design-system/components';

function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');

  const handleTabChange = (tab: NavTab) => {
    setCurrentTab(tab);
    // Additional logic: analytics, state updates, etc.
    console.log('Tab changed to:', tab);
  };

  return (
    <div>
      {/* Content based on currentTab */}
      {currentTab === 'home' && <HomePage />}
      {currentTab === 'events' && <EventsPage />}
      {currentTab === 'tickets' && <TicketsPage />}
      {currentTab === 'profile' && <ProfilePage />}
      
      {/* Fixed navigation */}
      <div style={{ 
        position: 'fixed', 
        bottom: '16px', 
        left: '50%', 
        transform: 'translateX(-50%)'
      }}>
        <AppNavBar 
          active={currentTab} 
          onTabClick={handleTabChange}
        />
      </div>
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
              <CodeCell>active</CodeCell>
              <TableCell>NavTab</TableCell>
              <TableCell>'home'</TableCell>
              <TableCell>Currently active tab</TableCell>
            </TableRow>
            <TableRow>
              <CodeCell>onTabClick</CodeCell>
              <TableCell>{'(tab: NavTab) => void'}</TableCell>
              <TableCell>undefined</TableCell>
              <TableCell>Callback when tab is clicked</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

        <DocsSubsectionTitle>Type Definitions</DocsSubsectionTitle>
        <DocsCodeBlock>{`type NavTab = 'home' | 'events' | 'tickets' | 'profile';

interface AppNavBarProps {
  active?: NavTab;
  onTabClick?: (tab: NavTab) => void;
}`}</DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
};

