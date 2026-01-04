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
import { useTheme } from '../../contexts/ThemeContext';
import { 
  getSurfaceColor, 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary 
} from '../../utils/themeColors';

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

export const AppNavBarPage: React.FC = () => {
  const { theme } = useTheme();
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
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Value</TableHeader>
              <TableHeader $theme={theme}>Notes</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Nav Bar Width</TableCell>
              <TableCell $theme={theme}>336px</TableCell>
              <TableCell $theme={theme}>Fixed width for mobile</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Nav Bar Height</TableCell>
              <TableCell $theme={theme}>~64px</TableCell>
              <TableCell $theme={theme}>Auto based on content</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Border Radius</TableCell>
              <TableCell $theme={theme}>16px</TableCell>
              <TableCell $theme={theme}>Rounded corners</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Tab Width</TableCell>
              <TableCell $theme={theme}>60px</TableCell>
              <TableCell $theme={theme}>Fixed for consistency</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Icon Size</TableCell>
              <TableCell $theme={theme}>32×32px</TableCell>
              <TableCell $theme={theme}>Square icons</TableCell>
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
              <TableCell $theme={theme}>Nav Bar Padding (Horizontal)</TableCell>
              <CodeCell $theme={theme}>spacing[3]</CodeCell>
              <TableCell $theme={theme}>12px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Nav Bar Padding (Vertical)</TableCell>
              <CodeCell $theme={theme}>spacing[2]</CodeCell>
              <TableCell $theme={theme}>8px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Tab Padding (Vertical)</TableCell>
              <CodeCell $theme={theme}>spacing[1]</CodeCell>
              <TableCell $theme={theme}>4px</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Icon-Label Gap</TableCell>
              <TableCell $theme={theme}>6px</TableCell>
              <TableCell $theme={theme}>Fixed spacing</TableCell>
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
              <TableCell $theme={theme}>Tab Label</TableCell>
              <CodeCell $theme={theme}>typography.mobile.overline[300]</CodeCell>
              <TableCell $theme={theme}>12px</TableCell>
              <TableCell $theme={theme}>Medium (500)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Letter Spacing</TableCell>
              <TableCell $theme={theme}>1.2px</TableCell>
              <TableCell $theme={theme}>10%</TableCell>
              <TableCell $theme={theme}>Uppercase tracking</TableCell>
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
              <TableCell $theme={theme}>Background (Start)</TableCell>
              <CodeCell $theme={theme}>colors.neutral.dark.alpha[75]</CodeCell>
              <TableCell $theme={theme}>Gradient start</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Background (End)</TableCell>
              <CodeCell $theme={theme}>colors.neutral.dark.alpha[90]</CodeCell>
              <TableCell $theme={theme}>Gradient end</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Border</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[5]</CodeCell>
              <TableCell $theme={theme}>Subtle border</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Active Label</TableCell>
              <CodeCell $theme={theme}>colors.primary[600]</CodeCell>
              <TableCell $theme={theme}>Active tab text</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Inactive Label</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[50]</CodeCell>
              <TableCell $theme={theme}>Inactive tab text</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Icon Stroke</TableCell>
              <CodeCell $theme={theme}>colors.neutral.light.alpha[90]</CodeCell>
              <TableCell $theme={theme}>All icon strokes</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Active Indicator</TableCell>
              <CodeCell $theme={theme}>colors.primary[600] + 80% opacity</CodeCell>
              <TableCell $theme={theme}>Glow effect</TableCell>
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
              <TableCell $theme={theme}>Backdrop Blur</TableCell>
              <TableCell $theme={theme}>20px</TableCell>
              <TableCell $theme={theme}>Glassmorphic effect</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Inner Shadow</TableCell>
              <TableCell $theme={theme}>inset 0.5px 1px 0px 0.75px</TableCell>
              <TableCell $theme={theme}>Subtle depth</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Active Glow</TableCell>
              <TableCell $theme={theme}>Radial gradient</TableCell>
              <TableCell $theme={theme}>Focus indicator</TableCell>
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
              <TableCell $theme={theme}>Tab Transition</TableCell>
              <TableCell $theme={theme}>Duration</TableCell>
              <TableCell $theme={theme}>250ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Indicator Transition</TableCell>
              <TableCell $theme={theme}>Duration</TableCell>
              <TableCell $theme={theme}>300ms cubic-bezier(0.4, 0, 0.2, 1)</TableCell>
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
        <SpecTable $theme={theme}>
          <TableHead $theme={theme}>
            <TableRow $theme={theme}>
              <TableHeader $theme={theme}>Element</TableHeader>
              <TableHeader $theme={theme}>Size</TableHeader>
              <TableHeader $theme={theme}>WCAG Requirement</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Tab Button</TableCell>
              <TableCell $theme={theme}>60×48px</TableCell>
              <TableCell $theme={theme}>✓ Meets 44×44px minimum</TableCell>
            </TableRow>
          </tbody>
        </SpecTable>

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
              <TableCell $theme={theme}>Active Label (primary[600] on dark)</TableCell>
              <TableCell $theme={theme}>{'>'} 7:1</TableCell>
              <TableCell $theme={theme}>AAA</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <TableCell $theme={theme}>Inactive Label (50% opacity on dark)</TableCell>
              <TableCell $theme={theme}>{'>'} 4.5:1</TableCell>
              <TableCell $theme={theme}>AA</TableCell>
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
              <CodeCell $theme={theme}>active</CodeCell>
              <TableCell $theme={theme}>NavTab</TableCell>
              <TableCell $theme={theme}>'home'</TableCell>
              <TableCell $theme={theme}>Currently active tab</TableCell>
            </TableRow>
            <TableRow $theme={theme}>
              <CodeCell $theme={theme}>onTabClick</CodeCell>
              <TableCell $theme={theme}>{'(tab: NavTab) => void'}</TableCell>
              <TableCell $theme={theme}>undefined</TableCell>
              <TableCell $theme={theme}>Callback when tab is clicked</TableCell>
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

