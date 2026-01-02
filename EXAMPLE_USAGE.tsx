/**
 * Example Usage of Avenue Design System Tokens
 * This file demonstrates how to use the design tokens in React components
 */

import React from 'react';
import styled from 'styled-components';
import { theme, colors, typography, spacing, shadows } from './tokens';

// ============================================================================
// Example 1: Basic Button with Tokens
// ============================================================================

const PrimaryButton = styled.button`
  /* Colors */
  background-color: ${colors.primary[600]};
  color: ${colors.semantic.labelsPrimary};

  /* Typography */
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.button[300].fontSize};
  font-weight: ${typography.desktop.button[300].fontWeight};

  /* Spacing */
  padding: ${spacing[4]} ${spacing[6]};

  /* Borders */
  border: none;
  border-radius: ${theme.borders.radius.md};

  /* Effects */
  box-shadow: ${shadows.sm};
  transition: ${theme.transitions.default};
  cursor: pointer;

  /* Hover state */
  &:hover {
    background-color: ${colors.primary[700]};
    box-shadow: ${shadows.md};
  }

  /* Active state */
  &:active {
    transform: scale(0.98);
  }

  /* Disabled state */
  &:disabled {
    background-color: ${colors.neutral[400]};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// ============================================================================
// Example 2: Category Card Component
// ============================================================================

interface CategoryCardProps {
  category: 'comedy' | 'nightlife' | 'sports' | 'music' | 'movies' | 'wellness';
  title: string;
  description: string;
}

const CardContainer = styled.div<{ categoryColor: string }>`
  background-color: ${colors.neutral[50]};
  border-radius: ${theme.borders.radius.lg};
  padding: ${spacing[6]};
  box-shadow: ${shadows.card};
  transition: ${theme.transitions.default};

  &:hover {
    box-shadow: ${shadows.cardHover};
    transform: translateY(-2px);
  }

  /* Category indicator */
  border-top: 4px solid ${(props) => props.categoryColor};
`;

const CardTitle = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.heading[700].fontSize};
  font-weight: ${typography.desktop.heading[700].fontWeight};
  line-height: ${typography.desktop.heading[700].lineHeight};
  letter-spacing: ${typography.desktop.heading[700].letterSpacing};
  color: ${colors.neutral[900]};
  margin: 0 0 ${spacing[2]} 0;
`;

const CardDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  line-height: ${typography.desktop.body.regular[300].lineHeight};
  color: ${colors.neutral[600]};
  margin: 0;
`;

const CategoryCard: React.FC<CategoryCardProps> = ({ category, title, description }) => {
  return (
    <CardContainer categoryColor={colors[category][600]}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

// ============================================================================
// Example 3: Responsive Typography
// ============================================================================

const ResponsiveHeading = styled.h1`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[900]};

  /* Mobile */
  font-size: ${typography.mobile.heading[100].fontSize};
  line-height: ${typography.mobile.heading[100].lineHeight};
  letter-spacing: ${typography.mobile.heading[100].letterSpacing};

  /* Desktop */
  ${theme.mediaQueries.md} {
    font-size: ${typography.desktop.heading[100].fontSize};
    line-height: ${typography.desktop.heading[100].lineHeight};
    letter-spacing: ${typography.desktop.heading[100].letterSpacing};
  }
`;

// ============================================================================
// Example 4: Layout Container with Spacing
// ============================================================================

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${spacing[6]};

  ${theme.mediaQueries.md} {
    padding: ${spacing[8]};
  }

  ${theme.mediaQueries.lg} {
    padding: ${spacing[12]};
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${spacing[6]};
  grid-template-columns: 1fr;

  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing[8]};
  }

  ${theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacing[10]};
  }
`;

// ============================================================================
// Example 5: Modal Overlay with Z-Index
// ============================================================================

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.neutral.dark.alpha[75]};
  z-index: ${theme.zIndex.modalBackdrop};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: ${theme.borders.radius.xl};
  padding: ${spacing[8]};
  box-shadow: ${theme.shadows.semantic.modal};
  z-index: ${theme.zIndex.modal};
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

// ============================================================================
// Example 6: Input Field with States
// ============================================================================

const Input = styled.input`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.regular[300].fontSize};
  color: ${colors.neutral[900]};
  background-color: ${colors.neutral[50]};
  border: ${theme.borders.widths[2]} solid ${colors.neutral[200]};
  border-radius: ${theme.borders.radius.semantic.input};
  padding: ${spacing[3]} ${spacing[4]};
  transition: ${theme.transitions.default};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${colors.primary[600]};
    box-shadow: 0 0 0 3px ${colors.primary.alpha[10]};
  }

  &:hover:not(:focus) {
    border-color: ${colors.neutral[400]};
  }

  &:disabled {
    background-color: ${colors.neutral[100]};
    color: ${colors.neutral[400]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.neutral[400]};
  }
`;

// ============================================================================
// Example 7: Badge Component
// ============================================================================

interface BadgeProps {
  variant?: 'primary' | 'success' | 'error';
  children: React.ReactNode;
}

const StyledBadge = styled.span<{ variant: 'primary' | 'success' | 'error' }>`
  display: inline-flex;
  align-items: center;
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.desktop.body.medium[400].fontSize};
  font-weight: ${typography.desktop.body.medium[400].fontWeight};
  padding: ${spacing[1]} ${spacing[3]};
  border-radius: ${theme.borders.radius.semantic.badge};
  
  ${(props) => {
    switch (props.variant) {
      case 'success':
        return `
          background-color: ${colors.wellness[100]};
          color: ${colors.wellness[700]};
        `;
      case 'error':
        return `
          background-color: ${colors.movies[100]};
          color: ${colors.movies[700]};
        `;
      default:
        return `
          background-color: ${colors.primary[100]};
          color: ${colors.primary[700]};
        `;
    }
  }}
`;

const Badge: React.FC<BadgeProps> = ({ variant = 'primary', children }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

// ============================================================================
// Example 8: Complete Page Layout
// ============================================================================

const ExamplePage: React.FC = () => {
  return (
    <Container>
      <ResponsiveHeading>Avenue Design System</ResponsiveHeading>
      
      <Grid>
        <CategoryCard
          category="music"
          title="Music Events"
          description="Discover live concerts and music festivals"
        />
        <CategoryCard
          category="sports"
          title="Sports Events"
          description="Watch your favorite teams compete"
        />
        <CategoryCard
          category="comedy"
          title="Comedy Shows"
          description="Laugh out loud at comedy nights"
        />
      </Grid>

      <div style={{ marginTop: spacing[8] }}>
        <PrimaryButton>Book Tickets</PrimaryButton>
        <Badge variant="success">Popular</Badge>
      </div>
    </Container>
  );
};

// ============================================================================
// Export Examples
// ============================================================================

export {
  PrimaryButton,
  CategoryCard,
  ResponsiveHeading,
  Container,
  Grid,
  ModalBackdrop,
  ModalContent,
  Input,
  Badge,
  ExamplePage,
};

