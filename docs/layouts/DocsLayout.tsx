/**
 * Documentation Layout Component
 * Consistent layout wrapper for all documentation pages
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, typography, spacing } from '../../tokens';
import { Sidebar } from '../components/Sidebar';
import { ThemeToggle } from '../components/ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import { 
  getBackgroundColor, 
  getBorderColor, 
  getTextColor, 
  getTextColorSecondary,
  getCodeBlockBackground,
  getCodeBlockBorder,
  getCodeBlockText,
  getInlineCodeBackground
} from '../utils/themeColors';

interface DocsLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

const LayoutContainer = styled.div<{ $theme: 'light' | 'dark' }>`
  display: flex;
  min-height: 100vh;
  background-color: ${props => getBackgroundColor(props.$theme)};
  transition: background-color 200ms ease;
`;

const TopHeader = styled.header<{ $theme: 'light' | 'dark' }>`
  position: fixed;
  top: 0;
  left: 280px;
  right: 0;
  height: 64px;
  background-color: ${props => getBackgroundColor(props.$theme)};
  border-bottom: 1px solid ${props => getBorderColor(props.$theme)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${spacing[16]};
  z-index: 50;
  transition: background-color 200ms ease, border-color 200ms ease;
  
  @media (max-width: 768px) {
    left: 0;
    padding: 0 ${spacing[12]};
  }
`;

const MainContent = styled.main<{ $theme: 'light' | 'dark' }>`
  flex: 1;
  margin-left: 280px; /* Sidebar width */
  padding: ${spacing[20]} ${spacing[16]} ${spacing[12]} ${spacing[16]};
  max-width: 1200px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: ${spacing[16]} ${spacing[12]} ${spacing[8]} ${spacing[12]};
  }
`;

const PageHeader = styled.header<{ $theme: 'light' | 'dark' }>`
  margin-bottom: ${spacing[12]};
  padding-bottom: ${spacing[8]};
  border-bottom: 1px solid ${props => getBorderColor(props.$theme)};
  transition: border-color 200ms ease;
`;

const PageTitle = styled.h1<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[300].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[300].lineHeight};
  letter-spacing: ${typography.desktop.heading[300].letterSpacing};
  color: ${props => getTextColor(props.$theme)};
  margin: 0 0 ${spacing[4]} 0;
  transition: color 200ms ease;
`;

const PageDescription = styled.p<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[200].fontSize};
  line-height: ${typography.desktop.body.regular[200].lineHeight};
  color: ${props => getTextColorSecondary(props.$theme)};
  margin: 0;
  max-width: 720px;
  transition: color 200ms ease;
`;

const ContentArea = styled.div`
  /* Content styles */
`;

export const DocsLayout: React.FC<DocsLayoutProps> = ({ 
  children, 
  currentPath 
}) => {
  const { theme } = useTheme();
  
  return (
    <LayoutContainer $theme={theme}>
      <Sidebar currentPath={currentPath} />
      <TopHeader $theme={theme}>
        <ThemeToggle />
      </TopHeader>
      <MainContent $theme={theme}>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

// Reusable components for documentation pages
export const DocsPageHeader: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  const { theme } = useTheme();
  return (
    <PageHeader $theme={theme}>
      <PageTitle $theme={theme}>{title}</PageTitle>
      <PageDescription $theme={theme}>{description}</PageDescription>
    </PageHeader>
  );
};

export const DocsSection = styled.section`
  margin-bottom: ${spacing[12]};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DocsSectionTitleStyled = styled.h2<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[600].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[600].lineHeight};
  letter-spacing: ${typography.desktop.heading[600].letterSpacing};
  color: ${props => getTextColor(props.$theme)};
  margin: 0 0 ${spacing[6]} 0;
  transition: color 200ms ease;
`;

export const DocsSectionTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { theme } = useTheme();
  return <DocsSectionTitleStyled {...props} $theme={theme} />;
};

const DocsSubsectionTitleStyled = styled.h3<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[700].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[700].lineHeight};
  letter-spacing: ${typography.desktop.heading[700].letterSpacing};
  color: ${props => getTextColor(props.$theme)};
  margin: ${spacing[8]} 0 ${spacing[4]} 0;
  transition: color 200ms ease;
`;

export const DocsSubsectionTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { theme } = useTheme();
  return <DocsSubsectionTitleStyled {...props} $theme={theme} />;
};

const DocsParagraphStyled = styled.p<{ $theme: 'light' | 'dark' }>`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${props => getTextColorSecondary(props.$theme)};
  margin: 0 0 ${spacing[4]} 0;
  max-width: 720px;
  transition: color 200ms ease;
`;

export const DocsParagraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (props) => {
  const { theme } = useTheme();
  return <DocsParagraphStyled {...props} $theme={theme} />;
};

const CodeBlockContainer = styled.div`
  position: relative;
  margin: ${spacing[4]} 0;
`;

const CodeBlockPre = styled.pre<{ $theme: 'light' | 'dark' }>`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => getCodeBlockText(props.$theme)};
  background-color: ${props => getCodeBlockBackground(props.$theme)};
  border: 1px solid ${props => getCodeBlockBorder(props.$theme)};
  border-radius: 8px;
  padding: ${spacing[4]};
  padding-right: ${spacing[16]}; /* Space for copy button */
  margin: 0;
  overflow-x: auto;
  transition: background-color 200ms ease, border-color 200ms ease, color 200ms ease;
`;

const CopyButton = styled.button<{ $copied: boolean; $theme: 'light' | 'dark' }>`
  position: absolute;
  top: ${spacing[3]};
  right: ${spacing[3]};
  background-color: ${props => props.$copied ? colors.wellness[600] : (props.$theme === 'dark' ? colors.neutral[800] : colors.neutral[900])};
  color: ${colors.neutral[50]};
  border: none;
  border-radius: 6px;
  padding: ${spacing[2]} ${spacing[3]};
  font-family: ${typography.fontFamily.primary};
  font-size: 12px;
  font-weight: ${typography.fontWeights.medium};
  cursor: pointer;
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  gap: ${spacing[1]};
  
  &:hover {
    background-color: ${props => props.$copied ? colors.wellness[700] : (props.$theme === 'dark' ? colors.neutral[700] : colors.neutral[800])};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const CopyIcon = styled.span`
  font-size: 14px;
  line-height: 1;
`;

export const DocsCodeBlock: React.FC<{ children: string }> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <CodeBlockContainer>
      <CodeBlockPre $theme={theme}>{children}</CodeBlockPre>
      <CopyButton onClick={handleCopy} $copied={copied} $theme={theme}>
        <CopyIcon>{copied ? '✓' : '📋'}</CopyIcon>
        {copied ? 'Copied!' : 'Copy'}
      </CopyButton>
    </CodeBlockContainer>
  );
};

const DocsInlineCodeStyled = styled.code<{ $theme: 'light' | 'dark' }>`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9em;
  color: ${props => props.$theme === 'dark' ? colors.primary[400] : colors.primary[600]};
  background-color: ${props => getInlineCodeBackground(props.$theme)};
  padding: 2px ${spacing[2]};
  border-radius: 4px;
  transition: background-color 200ms ease, color 200ms ease;
`;

export const DocsInlineCode: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const { theme } = useTheme();
  return <DocsInlineCodeStyled {...props} $theme={theme} />;
};
