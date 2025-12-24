/**
 * AppNavBar Component
 * A mobile navigation bar with glassmorphic styling and animated active states
 */

import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../tokens';
import { HomeIcon, EventsIcon, TicketsIcon, ProfileIcon } from './icons/NavIcons';

export type NavTab = 'home' | 'events' | 'tickets' | 'profile';

export interface AppNavBarProps {
  /**
   * Currently active tab
   * @default 'home'
   */
  active?: NavTab;
  /**
   * Callback when a tab is clicked
   */
  onTabClick?: (tab: NavTab) => void;
}

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 336px;
  padding: ${spacing[2]} ${spacing[3]};
  background: linear-gradient(
    76.29deg,
    ${colors.neutral.dark.alpha[75]} 11.14%,
    ${colors.neutral.dark.alpha[90]} 89.97%
  );
  backdrop-filter: blur(20px);
  border: 1px solid ${colors.neutral.light.alpha[5]};
  border-radius: 16px;
  position: relative;
  box-shadow: inset 0.5px 1px 0px 0.75px ${colors.neutral.light.alpha[5]};
`;

const Tab = styled.button<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 60px;
  padding: ${spacing[1]} 0;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const TabLabel = styled.span<{ $isActive: boolean }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.mobile.overline[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  line-height: ${typography.mobile.overline[300].lineHeight};
  letter-spacing: ${typography.mobile.overline[300].letterSpacing};
  text-transform: uppercase;
  color: ${props => props.$isActive ? colors.primary[600] : colors.neutral.light.alpha[50]};
  transition: color 250ms ease;
  text-align: center;
`;

const ActiveIndicator = styled.div<{ $position: number }>`
  position: absolute;
  bottom: -1px;
  left: ${props => `${props.$position}px`};
  width: 60px;
  height: 1px;
  background: radial-gradient(
    ellipse 60px 1px at center,
    ${colors.primary[600]}80 0%,
    transparent 100%
  );
  transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

const tabConfig = [
  { id: 'home' as NavTab, label: 'Home', Icon: HomeIcon },
  { id: 'events' as NavTab, label: 'Events', Icon: EventsIcon },
  { id: 'tickets' as NavTab, label: 'Tickets', Icon: TicketsIcon },
  { id: 'profile' as NavTab, label: 'Profile', Icon: ProfileIcon },
];

export const AppNavBar: React.FC<AppNavBarProps> = ({ 
  active = 'home',
  onTabClick 
}) => {
  const activeIndex = tabConfig.findIndex(tab => tab.id === active);
  // Calculate indicator position based on tab layout with justify-between
  // Nav bar: 336px width, 12px padding each side = 312px content
  // 4 tabs of 60px = 240px, remaining 72px / 3 gaps = 24px per gap
  // Tab positions: 12, 96, 180, 264 (left edges)
  const indicatorPosition = 12 + activeIndex * 84; // 84 = 60px (tab) + 24px (gap)

  const handleTabClick = (tabId: NavTab) => {
    if (onTabClick) {
      onTabClick(tabId);
    }
  };

  return (
    <NavBarContainer>
      {tabConfig.map((tab) => {
        const isActive = tab.id === active;
        const IconComponent = tab.Icon;
        
        return (
          <Tab
            key={tab.id}
            $isActive={isActive}
            onClick={() => handleTabClick(tab.id)}
            aria-label={`Navigate to ${tab.label}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <IconWrapper>
              <IconComponent
                bgStart={isActive ? colors.primary[600] : colors.neutral.light.alpha[90]}
                bgEnd={isActive ? colors.primary[600] : colors.neutral.light.alpha[90]}
                bgStartOpacity={isActive ? 0.25 : 0.1}
                bgEndOpacity={isActive ? 0.05 : 0.05}
                borderStroke={colors.neutral.light.alpha[90]}
                iconStroke={isActive ? colors.primary[600] : colors.neutral.light.alpha[90]}
                borderOpacity={0.05}
                iconOpacity={isActive ? 1 : 0.5}
              />
            </IconWrapper>
            <TabLabel $isActive={isActive}>
              {tab.label}
            </TabLabel>
          </Tab>
        );
      })}
      <ActiveIndicator $position={indicatorPosition} />
    </NavBarContainer>
  );
};

