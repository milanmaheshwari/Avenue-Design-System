/**
 * Sidebar Navigation Component
 * Persistent left sidebar for documentation navigation
 */

import React from 'react';
import styled from 'styled-components';
import { colors, typography, spacing } from '../../tokens';
import { navigation } from '../data/navigation';
import { useTheme } from '../contexts/ThemeContext';
import { 
  getSurfaceColor, 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary,
  getHoverBackground
} from '../utils/themeColors';

interface SidebarProps {
  currentPath?: string;
}

const SidebarContainer = styled.aside<{ $theme: 'light' | 'dark' }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: ${props => getSurfaceColor(props.$theme)};
  border-right: 1px solid ${props => getBorderColor(props.$theme)};
  overflow-y: auto;
  padding: ${spacing[8]} ${spacing[6]};
  z-index: 100;
  transition: background-color 200ms ease, border-color 200ms ease;
`;

const Logo = styled.a<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[600].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${props => getTextColor(props.$theme)};
  margin-bottom: ${spacing[8]};
  letter-spacing: ${typography.desktop.heading[600].letterSpacing};
  text-decoration: none;
  display: block;
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
  }
`;

const NavSection = styled.nav`
  margin-bottom: ${spacing[8]};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const NavCategory = styled.div`
  margin-bottom: ${spacing[6]};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[400].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${props => getTextColor(props.$theme)};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 ${spacing[3]} 0;
  transition: color 200ms ease;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: ${spacing[1]};
`;

const NavLink = styled.a<{ $isActive?: boolean; $theme: 'light' | 'dark' }>`
  display: block;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  font-weight: ${props => props.$isActive ? typography.fontWeights.medium : typography.fontWeights.regular};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${props => {
    if (props.$isActive) {
      return props.$theme === 'dark' ? colors.primary[400] : colors.primary[600];
    }
    return getTextColorSecondary(props.$theme);
  }};
  text-decoration: none;
  padding: ${spacing[2]} ${spacing[3]};
  border-radius: 8px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${props => props.$isActive ? getHoverBackground(props.$theme) : 'transparent'};
  
  &:hover {
    color: ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
    background-color: ${props => getHoverBackground(props.$theme)};
  }
`;

export const Sidebar: React.FC<SidebarProps> = ({ currentPath = '/' }) => {
  const { theme } = useTheme();
  
  return (
    <SidebarContainer $theme={theme}>
      <Logo href="/" $theme={theme}>Avenue Design System</Logo>
      
      <NavSection>
        {navigation.map((category) => (
          <NavCategory key={category.title}>
            <CategoryTitle $theme={theme}>{category.title}</CategoryTitle>
            <NavList>
              {category.items.map((item) => (
                <NavItem key={item.href}>
                  <NavLink
                    href={item.href}
                    $isActive={currentPath === item.href}
                    $theme={theme}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </NavCategory>
        ))}
      </NavSection>
    </SidebarContainer>
  );
};

