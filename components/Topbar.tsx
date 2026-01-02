/**
 * Topbar Component
 * Navigation header matching Figma design exactly with 9 variants
 * 
 * Variants from Figma:
 * - Web, Big: Default, Neutral, Signed In
 * - Web, Small: Default, Expanded
 * - App, Small: Default, Event, Organiser, Checkout
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../tokens';
import { ButtonHighlighted } from './ButtonHighlighted';
import { Logo } from './Logo';

// Exact types from Figma
export type TopbarType = 'Web' | 'App';
export type TopbarSize = 'Big' | 'Small';
export type TopbarState = 'Default' | 'Neutral' | 'Signed In' | 'Expanded' | 'Event' | 'Organiser' | 'Checkout';

export interface NavLink {
  label: string;
  onClick: () => void;
}

export interface TopbarProps {
  /**
   * Type: Web or App context
   * @default 'Web'
   */
  type?: TopbarType;
  /**
   * Size: Big (desktop) or Small (mobile)
   * @default 'Big'
   */
  size?: TopbarSize;
  /**
   * State variant
   * @default 'Default'
   */
  state?: TopbarState;
  /**
   * Logo image URL or element
   */
  logo?: React.ReactNode;
  /**
   * Location text
   * @default 'New York'
   */
  location?: string;
  /**
   * Location dropdown handler
   */
  onLocationClick?: () => void;
  /**
   * Navigation links (Web only)
   */
  navLinks?: NavLink[];
  /**
   * Sign up button handler (Web Big only)
   */
  onSignUp?: () => void;
  /**
   * Menu toggle handler (Web Small only)
   */
  onMenuToggle?: () => void;
  /**
   * Back button handler (App only)
   */
  onBackClick?: () => void;
  /**
   * Action buttons for app states
   */
  actionButtons?: React.ReactNode;
}

// Styled Components
const TopbarContainer = styled.header<{ $type: TopbarType; $size: TopbarSize; $state: TopbarState }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: ${props => props.$size === 'Big' ? '1440px' : '360px'};
  min-width: ${props => props.$size === 'Small' ? '320px' : 'auto'};
  padding: 0 ${props => props.$size === 'Big' ? '80px' : spacing[4]};
  background-color: ${props => props.$state === 'Expanded' ? colors.neutral.dark.alpha[75] : colors.neutral.dark.alpha[10]};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  ${props => props.$state === 'Expanded' && `
    border: 1px solid ${colors.neutral.light.alpha[5]};
    border-top: none;
    border-radius: 0 0 24px 24px;
    box-shadow: 0px 0px 40px 20px rgba(7, 13, 79, 0.05);
    gap: ${spacing[1]};
  `}
`;

const MainContent = styled.div<{ $size: TopbarSize; $state: TopbarState }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${props => {
    if (props.$state === 'Event' || props.$state === 'Organiser' || props.$state === 'Checkout') {
      return `${spacing[3]} 0`;
    }
    return props.$size === 'Big' ? `${spacing[6]} 0` : `${spacing[4]} 0`;
  }};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => props.$size === 'Big' ? '-80px' : `-${spacing[4]}`};
    right: ${props => props.$size === 'Big' ? '-80px' : `-${spacing[4]}`};
    height: 1px;
    background-image: ${props => {
      const viewBoxWidth = props.$size === 'Big' ? '1280' : '360';
      const gradientMatrix = props.$size === 'Big' ? '80.474 0 0 0.1 640' : '22.633 0 0 0.1 180';
      return `url('data:image/svg+xml;utf8,<svg viewBox="0 0 ${viewBoxWidth} 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(${gradientMatrix} 1)"><stop stop-color="rgba(250,250,250,0.1)" offset="0"/><stop stop-color="rgba(250,250,250,0)" offset="1"/></radialGradient></defs></svg>')`;
    }};
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[6]};
`;

const LogoContainer = styled.div<{ $size: TopbarSize }>`
  height: ${props => props.$size === 'Big' ? '36px' : '24px'};
  width: ${props => props.$size === 'Big' ? '120px' : '80px'};
  cursor: pointer;
  display: flex;
  align-items: center;
  
  /* Fallback styles for custom logo content */
  font-family: ${typography.fontFamily.primary};
  font-size: ${props => props.$size === 'Big' ? '18px' : '14px'};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[50]};
  white-space: nowrap;
`;

const Divider = styled.div`
  height: 36px;
  width: 1px;
  background: linear-gradient(180deg, transparent 0%, ${colors.neutral.light.alpha[10]} 50%, transparent 100%);
`;

const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing[1]};
  padding: ${spacing[1]} 0;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 999px;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  line-height: ${typography.desktop.body.medium[300].lineHeight};
  color: ${colors.neutral.light.alpha[90]};
  transition: opacity 200ms ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[1]};
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: flex-start;
  padding: 9px ${spacing[2]};
  border-radius: 999px;
`;

const NavLinkButton = styled.button`
  padding: 0 ${spacing[3]};
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[300].fontSize};
  font-weight: ${typography.fontWeights.medium};
  line-height: ${typography.desktop.body.medium[300].lineHeight};
  color: ${colors.neutral.light.alpha[90]};
  white-space: nowrap;
  transition: opacity 200ms ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

// SignUpButton is now replaced with ButtonHighlighted component

const MenuButton = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ExpandedMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${spacing[2]} 0 ${spacing[3]};
`;

const MenuLink = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing[3]};
  padding: 13px ${spacing[3]};
  background: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.mobile.body.regular[100].fontSize};
  font-weight: ${typography.fontWeights.regular};
  line-height: ${typography.mobile.body.regular[100].lineHeight};
  color: ${colors.neutral[50]};
  text-align: left;
  width: 100%;
  transition: background-color 200ms ease;
  
  &:hover {
    background-color: ${colors.neutral.light.alpha[5]};
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(161.05deg, ${colors.neutral.light.alpha[10]} 1.43%, ${colors.neutral.light.alpha[5]} 101.55%);
  backdrop-filter: blur(3.333px);
  -webkit-backdrop-filter: blur(3.333px);
  transition: transform 200ms ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

// Icons
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke={colors.neutral[50]} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke={colors.neutral[50]} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke={colors.neutral[50]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Topbar: React.FC<TopbarProps> = ({
  type = 'Web',
  size = 'Big',
  state = 'Default',
  logo,
  location = 'New York',
  onLocationClick,
  navLinks = [
    { label: 'Find Events', onClick: () => {} },
    { label: 'Create Event', onClick: () => {} },
    { label: 'My Events', onClick: () => {} },
  ],
  onSignUp,
  onMenuToggle,
  onBackClick,
  actionButtons,
}) => {
  const [isExpanded, setIsExpanded] = useState(state === 'Expanded');
  
  const handleMenuToggle = () => {
    setIsExpanded(!isExpanded);
    if (onMenuToggle) onMenuToggle();
  };
  
  const effectiveState = isExpanded ? 'Expanded' : state;
  
  // Render logo component based on size
  const renderLogo = () => {
    if (logo !== undefined) {
      return typeof logo === 'string' ? <span>{logo}</span> : logo;
    }
    return <Logo size={size === 'Big' ? 'big' : 'small'} />;
  };
  
  // Web, Big variants
  if (type === 'Web' && size === 'Big') {
    const showSignUpButton = state === 'Default' || state === 'Neutral';
    const isSignedIn = state === 'Signed In';
    const buttonVariant = state === 'Neutral' ? 'neutral' : 'default';
    
    return (
      <TopbarContainer $type={type} $size={size} $state={effectiveState}>
        <MainContent $size={size} $state={effectiveState}>
          <LeftSection>
            <LogoContainer $size={size}>
              {renderLogo()}
            </LogoContainer>
            <Divider />
            {location && (
              <LocationButton onClick={onLocationClick}>
                {location}
                <ChevronDownIcon />
              </LocationButton>
            )}
          </LeftSection>
          <RightSection>
            <NavLinks>
              {isSignedIn ? (
                // Signed In: Show all 4 links including Profile
                navLinks.map((link, index) => (
                  <NavLinkButton key={index} onClick={link.onClick}>
                    {link.label}
                  </NavLinkButton>
                ))
              ) : (
                // Default/Neutral: Show first 3 links only
                navLinks.slice(0, 3).map((link, index) => (
                  <NavLinkButton key={index} onClick={link.onClick}>
                    {link.label}
                  </NavLinkButton>
                ))
              )}
            </NavLinks>
            {showSignUpButton && onSignUp && (
              <ButtonHighlighted 
                type={buttonVariant === 'neutral' ? 'neutral' : 'primary'}
                onClick={onSignUp}
              >
                Sign Up
              </ButtonHighlighted>
            )}
          </RightSection>
        </MainContent>
      </TopbarContainer>
    );
  }
  
  // Web, Small variants
  if (type === 'Web' && size === 'Small') {
    return (
      <TopbarContainer $type={type} $size={size} $state={effectiveState}>
        <MainContent $size={size} $state={effectiveState}>
          <LogoContainer $size={size}>
            {renderLogo()}
          </LogoContainer>
          <MenuButton onClick={handleMenuToggle}>
            {isExpanded ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        </MainContent>
        {isExpanded && (
          <ExpandedMenu>
            {navLinks.map((link, index) => (
              <MenuLink key={index} onClick={link.onClick}>
                {link.label}
              </MenuLink>
            ))}
          </ExpandedMenu>
        )}
      </TopbarContainer>
    );
  }
  
  // App, Small variants
  if (type === 'App' && size === 'Small') {
    // Event, Organiser, or Checkout states (with back button)
    if (state === 'Event' || state === 'Organiser' || state === 'Checkout') {
      return (
        <TopbarContainer $type={type} $size={size} $state={effectiveState}>
          <MainContent $size={size} $state={effectiveState}>
            <IconButton onClick={onBackClick}>
              <BackIcon />
            </IconButton>
            {actionButtons || <div style={{ width: '32px', height: '32px' }} />}
          </MainContent>
        </TopbarContainer>
      );
    }
    
    // Default App State (logo + location)
    return (
      <TopbarContainer $type={type} $size={size} $state={effectiveState}>
        <MainContent $size={size} $state={effectiveState}>
          <LogoContainer $size={size}>
            {renderLogo()}
          </LogoContainer>
          {location && (
            <LocationButton onClick={onLocationClick}>
              {location}
              <ChevronDownIcon />
            </LocationButton>
          )}
        </MainContent>
      </TopbarContainer>
    );
  }
  
  return null;
};
