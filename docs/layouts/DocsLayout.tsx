/**
 * Documentation Layout Component
 * Consistent layout wrapper for all documentation pages
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, typography, spacing } from '../../tokens';
import { Sidebar } from '../components/Sidebar';

interface DocsLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${colors.neutral[50]};
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px; /* Sidebar width */
  padding: ${spacing[12]} ${spacing[16]};
  max-width: 1200px;
  
  @media (max-width: 768px) {
    padding: ${spacing[8]} ${spacing[12]};
  }
`;

const PageHeader = styled.header`
  margin-bottom: ${spacing[12]};
  padding-bottom: ${spacing[8]};
  border-bottom: 1px solid ${colors.neutral[200]};
`;

const PageTitle = styled.h1`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[300].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[300].lineHeight};
  letter-spacing: ${typography.desktop.heading[300].letterSpacing};
  color: ${colors.neutral[900]};
  margin: 0 0 ${spacing[4]} 0;
`;

const PageDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[200].fontSize};
  line-height: ${typography.desktop.body.regular[200].lineHeight};
  color: ${colors.neutral[600]};
  margin: 0;
  max-width: 720px;
`;

const ContentArea = styled.div`
  /* Content styles */
`;

export const DocsLayout: React.FC<DocsLayoutProps> = ({ 
  children, 
  currentPath 
}) => {
  return (
    <LayoutContainer>
      <Sidebar currentPath={currentPath} />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

// Reusable components for documentation pages
export const DocsPageHeader: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <PageHeader>
    <PageTitle>{title}</PageTitle>
    <PageDescription>{description}</PageDescription>
  </PageHeader>
);

export const DocsSection = styled.section`
  margin-bottom: ${spacing[12]};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DocsSectionTitle = styled.h2`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[600].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[600].lineHeight};
  letter-spacing: ${typography.desktop.heading[600].letterSpacing};
  color: ${colors.neutral[900]};
  margin: 0 0 ${spacing[6]} 0;
`;

export const DocsSubsectionTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[700].fontSize};
  font-weight: ${typography.fontWeights.bold};
  line-height: ${typography.desktop.heading[700].lineHeight};
  letter-spacing: ${typography.desktop.heading[700].letterSpacing};
  color: ${colors.neutral[900]};
  margin: ${spacing[8]} 0 ${spacing[4]} 0;
`;

export const DocsParagraph = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${colors.neutral[600]};
  margin: 0 0 ${spacing[4]} 0;
  max-width: 720px;
`;

const CodeBlockContainer = styled.div`
  position: relative;
  margin: ${spacing[4]} 0;
`;

const CodeBlockPre = styled.pre`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.neutral[900]};
  background-color: ${colors.neutral[100]};
  border: 1px solid ${colors.neutral[200]};
  border-radius: 8px;
  padding: ${spacing[4]};
  padding-right: ${spacing[16]}; /* Space for copy button */
  margin: 0;
  overflow-x: auto;
`;

const CopyButton = styled.button<{ $copied: boolean }>`
  position: absolute;
  top: ${spacing[3]};
  right: ${spacing[3]};
  background-color: ${props => props.$copied ? colors.wellness[600] : colors.neutral[900]};
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
    background-color: ${props => props.$copied ? colors.wellness[700] : colors.neutral[800]};
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
      <CodeBlockPre>{children}</CodeBlockPre>
      <CopyButton onClick={handleCopy} $copied={copied}>
        <CopyIcon>{copied ? '✓' : '📋'}</CopyIcon>
        {copied ? 'Copied!' : 'Copy'}
      </CopyButton>
    </CodeBlockContainer>
  );
};

export const DocsInlineCode = styled.code`
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9em;
  color: ${colors.primary[600]};
  background-color: ${colors.primary.alpha[5]};
  padding: 2px ${spacing[2]};
  border-radius: 4px;
`;
