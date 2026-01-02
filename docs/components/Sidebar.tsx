/**
 * Sidebar Navigation Component
 * Persistent left sidebar for documentation navigation
 */

import React from 'react';
import styled from 'styled-components';
import { colors, typography, spacing } from '../../tokens';
import { navigation } from '../data/navigation';

interface SidebarProps {
  currentPath?: string;
}

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: ${colors.neutral[50]};
  border-right: 1px solid ${colors.neutral[200]};
  overflow-y: auto;
  padding: ${spacing[8]} ${spacing[6]};
  z-index: 100;
`;

const Logo = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[600].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[900]};
  margin-bottom: ${spacing[8]};
  letter-spacing: ${typography.desktop.heading[600].letterSpacing};
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

const CategoryTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[400].fontSize};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[900]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 ${spacing[3]} 0;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: ${spacing[1]};
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  display: block;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  font-weight: ${props => props.$isActive ? typography.fontWeights.medium : typography.fontWeights.regular};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${props => props.$isActive ? colors.primary[600] : colors.neutral[600]};
  text-decoration: none;
  padding: ${spacing[2]} ${spacing[3]};
  border-radius: 8px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${props => props.$isActive ? colors.primary.alpha[5] : 'transparent'};
  
  &:hover {
    color: ${colors.primary[600]};
    background-color: ${colors.primary.alpha[5]};
  }
`;

export const Sidebar: React.FC<SidebarProps> = ({ currentPath = '/' }) => {
  return (
    <SidebarContainer>
      <Logo>Avenue Design</Logo>
      
      <NavSection>
        {navigation.map((category) => (
          <NavCategory key={category.title}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <NavList>
              {category.items.map((item) => (
                <NavItem key={item.href}>
                  <NavLink
                    href={item.href}
                    $isActive={currentPath === item.href}
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

