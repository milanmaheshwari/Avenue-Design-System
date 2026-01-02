/**
 * Topbar Component Documentation
 * Complete documentation for all 9 Figma variants
 */

import React from 'react';
import styled from 'styled-components';
import { Topbar } from '../../../components';
import { colors, spacing, typography } from '../../../tokens';
import {
  DocsLayout,
  DocsPageHeader,
  DocsSection,
  DocsSectionTitle,
  DocsSubsectionTitle,
  DocsParagraph,
  DocsCodeBlock
} from '../../layouts/DocsLayout';

// Styled Components for Documentation
const ComponentDemo = styled.div`
  background-color: ${colors.neutral[900]};
  border-radius: 16px;
  padding: ${spacing[8]};
  margin: ${spacing[6]} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.neutral[800]};
`;

const VariantsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing[8]};
  margin: ${spacing[6]} 0;
`;

const VariantCard = styled.div`
  background-color: ${colors.neutral[900]};
  border-radius: 16px;
  padding: ${spacing[6]};
  border: 1px solid ${colors.neutral[800]};
`;

const VariantHeader = styled.div`
  margin-bottom: ${spacing[4]};
  padding-bottom: ${spacing[3]};
  border-bottom: 1px solid ${colors.neutral[800]};
`;

const VariantTitle = styled.h4`
  font-family: ${typography.fontFamily.primary};
  font-size: 18px;
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[50]};
  margin: 0 0 ${spacing[2]};
`;

const VariantDescription = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: 14px;
  color: ${colors.neutral[400]};
  margin: 0;
`;

const VariantPreview = styled.div`
  background-color: ${colors.neutral[950]};
  border-radius: 12px;
  padding: ${spacing[6]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.neutral[800]};
`;

const PropsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${spacing[6]} 0;
  font-family: ${typography.fontFamily.primary};
  font-size: 14px;
  
  th {
    text-align: left;
    padding: ${spacing[3]};
    background-color: ${colors.neutral[100]};
    border: 1px solid ${colors.neutral[200]};
    font-weight: ${typography.fontWeights.semibold};
    color: ${colors.neutral[900]};
  }
  
  td {
    padding: ${spacing[3]};
    border: 1px solid ${colors.neutral[200]};
    color: ${colors.neutral[900]};
    vertical-align: top;
    
    code {
      background-color: ${colors.neutral[100]};
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Monaco', 'Menlo', monospace;
      font-size: 13px;
    }
  }
`;

const GuidelineSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  margin: ${spacing[6]} 0;
`;

const GuidelineCard = styled.div<{ $type: 'do' | 'dont' }>`
  background-color: ${props => props.$type === 'do' ? colors.wellness.alpha[5] : 'rgba(220, 38, 38, 0.05)'};
  border: 2px solid ${props => props.$type === 'do' ? colors.wellness[600] : colors.semantic.error};
  border-radius: 12px;
  padding: ${spacing[6]};
`;

const GuidelineTitle = styled.h4`
  font-family: ${typography.fontFamily.primary};
  font-size: 16px;
  font-weight: ${typography.fontWeights.bold};
  color: ${colors.neutral[900]};
  margin: 0 0 ${spacing[2]};
`;

const GuidelineText = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-size: 14px;
  color: ${colors.neutral[700]};
  margin: 0;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: ${spacing[2]};
`;

const ActionButton = styled.button`
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
  color: ${colors.neutral[50]};
  
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

export const TopbarPage: React.FC = () => {
  return (
    <DocsLayout>
      <DocsPageHeader title="Topbar" />
      <DocsParagraph>
        A versatile navigation header component with glassmorphic styling. The Topbar adapts to different contexts
        (Web/App) and screen sizes, featuring sophisticated visual effects including backdrop blur and radial gradients.
        This component includes exactly 9 variants from the Figma design.
      </DocsParagraph>

      {/* Overview */}
      <DocsSection>
        <DocsSectionTitle>Overview</DocsSectionTitle>
        <DocsParagraph>
          The Topbar serves as the primary navigation header across the Avenue platform. It provides consistent
          branding, navigation controls, and contextual actions while maintaining visual elegance through glassmorphic
          effects and subtle animations.
        </DocsParagraph>
        
        <ComponentDemo>
          <Topbar
            type="Web"
            size="Big"
            state="Default"
            location="New York"
            onLocationClick={() => console.log('Location clicked')}
            navLinks={[
              { label: 'Find Events', onClick: () => {} },
              { label: 'Create Event', onClick: () => {} },
              { label: 'My Events', onClick: () => {} },
            ]}
            onSignUp={() => console.log('Sign Up')}
          />
        </ComponentDemo>
      </DocsSection>

      {/* All 9 Variants */}
      <DocsSection>
        <DocsSectionTitle>All Variants (9 Total)</DocsSectionTitle>
        <DocsParagraph>
          The component includes exactly 9 variants from Figma, organized by Type, Size, and State.
        </DocsParagraph>

        <VariantsGrid>
          {/* Web, Big, Default */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>1. Web, Big, Default</VariantTitle>
              <VariantDescription>Desktop web navigation with Sign Up button (primary variant)</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="Web"
                size="Big"
                state="Default"
                location="New York"
                navLinks={[
                  { label: 'Find Events', onClick: () => {} },
                  { label: 'Create Event', onClick: () => {} },
                  { label: 'My Events', onClick: () => {} },
                ]}
                onSignUp={() => {}}
              />
            </VariantPreview>
          </VariantCard>

          {/* Web, Big, Neutral */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>2. Web, Big, Neutral</VariantTitle>
              <VariantDescription>Desktop web navigation with neutral Sign Up button styling</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="Web"
                size="Big"
                state="Neutral"
                location="New York"
                navLinks={[
                  { label: 'Find Events', onClick: () => {} },
                  { label: 'Create Event', onClick: () => {} },
                  { label: 'My Events', onClick: () => {} },
                ]}
                onSignUp={() => {}}
              />
            </VariantPreview>
          </VariantCard>

          {/* Web, Big, Signed In */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>3. Web, Big, Signed In</VariantTitle>
              <VariantDescription>Desktop web navigation for authenticated users (includes Profile link)</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="Web"
                size="Big"
                state="Signed In"
                location="New York"
                navLinks={[
                  { label: 'Find Events', onClick: () => {} },
                  { label: 'Create Event', onClick: () => {} },
                  { label: 'My Events', onClick: () => {} },
                  { label: 'Profile', onClick: () => {} },
                ]}
              />
            </VariantPreview>
          </VariantCard>

          {/* Web, Small, Default */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>4. Web, Small, Default</VariantTitle>
              <VariantDescription>Mobile web navigation (collapsed)</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="Web"
                size="Small"
                state="Default"
                onMenuToggle={() => {}}
              />
            </VariantPreview>
          </VariantCard>

          {/* Web, Small, Expanded */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>5. Web, Small, Expanded</VariantTitle>
              <VariantDescription>Mobile web navigation (expanded menu)</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="Web"
                size="Small"
                state="Expanded"
                navLinks={[
                  { label: 'Find Events', onClick: () => {} },
                  { label: 'Create Event', onClick: () => {} },
                  { label: 'My Events', onClick: () => {} },
                  { label: 'Profile', onClick: () => {} },
                ]}
              />
            </VariantPreview>
          </VariantCard>

          {/* App, Small, Default */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>6. App, Small, Default</VariantTitle>
              <VariantDescription>Mobile app home navigation</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="App"
                size="Small"
                state="Default"
                location="New York"
              />
            </VariantPreview>
          </VariantCard>

          {/* App, Small, Event */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>7. App, Small, Event</VariantTitle>
              <VariantDescription>Mobile app event detail page with back button and actions</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="App"
                size="Small"
                state="Event"
                onBackClick={() => {}}
                actionButtons={
                  <ActionButtonsContainer>
                    <ActionButton>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.01081 10.906L11.995 13.294M11.9891 6.70601L8.01081 9.09401M15.25 5.8C15.25 6.79411 14.4665 7.6 13.5 7.6C12.5335 7.6 11.75 6.79411 11.75 5.8C11.75 4.80589 12.5335 4 13.5 4C14.4665 4 15.25 4.80589 15.25 5.8ZM8.25 10C8.25 10.9941 7.4665 11.8 6.5 11.8C5.5335 11.8 4.75 10.9941 4.75 10C4.75 9.00589 5.5335 8.2 6.5 8.2C7.4665 8.2 8.25 9.00589 8.25 10ZM15.25 14.2C15.25 15.1941 14.4665 16 13.5 16C12.5335 16 11.75 15.1941 11.75 14.2C11.75 13.2059 12.5335 12.4 13.5 12.4C14.4665 12.4 15.25 13.2059 15.25 14.2Z" stroke="#FAFAFA" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </ActionButton>
                    <ActionButton>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4268 4.83789C13.0361 4.68847 13.6768 4.72982 14.2627 4.95605C14.8483 5.18229 15.3526 5.58333 15.708 6.10645C16.0635 6.62995 16.253 7.2513 16.25 7.88672V7.88965C16.25 9.16544 15.4267 10.1728 14.3672 11.2402L10.5322 14.9785L10.4883 15.0254C10.4274 15.0959 10.352 15.1518 10.2686 15.1904C10.1852 15.2289 10.0951 15.2494 10.0039 15.25C9.91268 15.2506 9.82206 15.2317 9.73828 15.1943C9.65438 15.1568 9.57839 15.1009 9.5166 15.0312L9.47949 14.9922L5.62402 11.2324C4.5679 10.1675 3.75021 9.16954 3.75 7.89062C3.75001 7.25638 3.94082 6.63693 4.29688 6.11523C4.65294 5.59358 5.15724 5.19364 5.74219 4.96777C6.32707 4.74193 6.9665 4.70091 7.5752 4.84863C8.18372 4.99643 8.73473 5.32646 9.1543 5.79688C9.15752 5.80049 9.16077 5.80407 9.16406 5.80762C9.27059 5.92237 9.40009 6.01426 9.54395 6.07715C9.68774 6.13997 9.84288 6.17285 10 6.17285C10.1571 6.17285 10.3123 6.13998 10.4561 6.07715C10.5999 6.01425 10.7294 5.92237 10.8359 5.80762C10.8401 5.80316 10.8446 5.7985 10.8486 5.79395C11.2668 5.32069 11.8174 4.98732 12.4268 4.83789Z" stroke="#FAFAFA" strokeOpacity="0.9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </ActionButton>
                  </ActionButtonsContainer>
                }
              />
            </VariantPreview>
          </VariantCard>

          {/* App, Small, Organiser */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>8. App, Small, Organiser</VariantTitle>
              <VariantDescription>Mobile app organiser view with multiple actions</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="App"
                size="Small"
                state="Organiser"
                onBackClick={() => {}}
                actionButtons={
                  <ActionButtonsContainer>
                    <ActionButton>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.46967 14.4697C4.17678 14.7626 4.17678 15.2374 4.46967 15.5303C4.76256 15.8232 5.23744 15.8232 5.53033 15.5303L5 15L4.46967 14.4697ZM15.75 5C15.75 4.58579 15.4142 4.25 15 4.25H8.25C7.83579 4.25 7.5 4.58579 7.5 5C7.5 5.41421 7.83579 5.75 8.25 5.75H14.25V11.75C14.25 12.1642 14.5858 12.5 15 12.5C15.4142 12.5 15.75 12.1642 15.75 11.75V5ZM5 15L5.53033 15.5303L15.5303 5.53033L15 5L14.4697 4.46967L4.46967 14.4697L5 15Z" fill="#FAFAFA" fillOpacity="0.9"/>
                      </svg>
                    </ActionButton>
                    <ActionButton>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2C12.2 2 12.4667 2 13.3333 2C14.2 2.06667 14.7333 2.2 15.2667 2.4C15.8 2.6 16.2 2.86667 16.6667 3.33333C17.1333 3.8 17.4 4.26667 17.5333 4.8C17.7333 5.33333 17.8667 5.86667 17.9333 6.73333C18 7.53333 18 7.8 18 10C18 12.2 18 12.4667 17.9333 13.2667C17.8667 14.1333 17.7333 14.6667 17.5333 15.2C17.3333 15.7333 17.0667 16.1333 16.6 16.6C16.2 17.0667 15.7333 17.3333 15.2 17.5333C14.6667 17.7333 14.1333 17.8667 13.2667 17.9333C12.4667 18 12.2 18 10 18C7.8 18 7.53333 18 6.66667 18C5.8 17.9333 5.26667 17.8 4.73333 17.6C4.2 17.4 3.8 17.1333 3.33333 16.6667C2.86667 16.2 2.6 15.7333 2.46667 15.2C2.26667 14.6667 2.13333 14.1333 2.06667 13.2667C2 12.4667 2 12.2 2 10C2 7.8 2 7.53333 2.06667 6.73333C2.06667 5.86667 2.2 5.26667 2.4 4.73333C2.6 4.26667 2.86667 3.8 3.33333 3.33333C3.8 2.86667 4.26667 2.6 4.73333 2.4C5.26667 2.2 5.86667 2.06667 6.73333 2.06667C7.53333 2 7.8 2 10 2ZM10 3.46667C7.86667 3.46667 7.6 3.46667 6.8 3.46667C6 3.53333 5.53333 3.66667 5.26667 3.73333C4.93333 3.93333 4.66667 4.06667 4.33333 4.33333C4.06667 4.6 3.86667 4.86667 3.73333 5.26667C3.66667 5.53333 3.53333 6 3.53333 6.8C3.46667 7.6 3.46667 7.86667 3.46667 10C3.46667 12.1333 3.46667 12.3333 3.53333 13.2C3.53333 13.9333 3.66667 14.4 3.8 14.6667C3.93333 15.0667 4.13333 15.3333 4.4 15.6C4.66667 15.8667 4.93333 16.0667 5.33333 16.2C5.6 16.3333 6 16.4 6.8 16.4667C7.6 16.5333 7.86667 16.5333 10 16.5333C12.1333 16.5333 12.3333 16.5333 13.2 16.4667C13.9333 16.4667 14.4 16.3333 14.6667 16.2C15.0667 16.0667 15.3333 15.8667 15.6 15.6C15.8667 15.3333 16.0667 15.0667 16.2 14.6667C16.3333 14.4 16.4 14 16.4667 13.2C16.5333 12.4 16.5333 12.1333 16.5333 10C16.5333 7.86667 16.5333 7.66667 16.4667 6.8C16.4667 6.06667 16.3333 5.6 16.2 5.33333C16.0667 4.93333 15.8667 4.66667 15.6 4.4C15.3333 4.13333 15.0667 3.93333 14.6667 3.8C14.4 3.66667 14 3.6 13.2 3.53333C12.4 3.46667 12.1333 3.46667 10 3.46667ZM10 5.86667C12.2667 5.86667 14.1333 7.73333 14.1333 10C14.1333 12.2667 12.2667 14.1333 10 14.1333C7.73333 14.1333 5.86667 12.2667 5.86667 10C5.86667 7.73333 7.73333 5.86667 10 5.86667ZM10 12.6667C11.4667 12.6667 12.6667 11.4667 12.6667 10C12.6667 8.53333 11.4667 7.33333 10 7.33333C8.53333 7.33333 7.33333 8.53333 7.33333 10C7.33333 11.4667 8.53333 12.6667 10 12.6667ZM14.2667 6.66667C13.7512 6.66667 13.3333 6.2488 13.3333 5.73333C13.3333 5.21787 13.7512 4.8 14.2667 4.8C14.7821 4.8 15.2 5.21787 15.2 5.73333C15.2 6.2488 14.7821 6.66667 14.2667 6.66667Z" fill="#FAFAFA" fillOpacity="0.75"/>
                      </svg>
                    </ActionButton>
                    <ActionButton>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.95397 16.9874C13.046 16.9874 16.3264 11.9665 16.3264 7.61506C16.3264 7.48117 16.3264 7.34728 16.3264 7.21339C16.9958 6.74477 17.5314 6.14226 18 5.53975C17.3975 5.80753 16.795 6.00837 16.1255 6.07531C16.795 5.67364 17.3305 5.00418 17.5983 4.26778C16.9289 4.66946 16.2594 4.93724 15.523 5.07113C14.9205 4.40167 14.0502 4 13.113 4C11.3054 4 9.83264 5.4728 9.83264 7.28033C9.83264 7.54812 9.83264 7.8159 9.89958 8.01674C7.08787 7.8159 4.67782 6.47699 3.07113 4.46862C2.7364 5.00418 2.60251 5.53975 2.60251 6.14226C2.60251 7.28033 3.20502 8.28452 4.07531 8.88703C3.53975 8.88703 3.00418 8.75314 2.60251 8.48536C2.60251 8.48536 2.60251 8.48536 2.60251 8.5523C2.60251 10.159 3.74059 11.4979 5.28033 11.7657C5.01255 11.8326 4.74477 11.8996 4.41004 11.8996C4.20921 11.8996 4.00837 11.8996 3.80753 11.8326C4.20921 13.1715 5.41423 14.1088 6.88703 14.1088C5.74895 14.9791 4.3431 15.5146 2.80335 15.5146C2.53556 15.5146 2.26778 15.5146 2 15.4477C3.40586 16.3849 5.14644 16.9874 6.95397 16.9874Z" stroke="#FAFAFA" strokeOpacity="0.9" strokeWidth="1.21757" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </ActionButton>
                  </ActionButtonsContainer>
                }
              />
            </VariantPreview>
          </VariantCard>

          {/* App, Small, Checkout */}
          <VariantCard>
            <VariantHeader>
              <VariantTitle>9. App, Small, Checkout</VariantTitle>
              <VariantDescription>Mobile app checkout flow with back button only</VariantDescription>
            </VariantHeader>
            <VariantPreview>
              <Topbar
                type="App"
                size="Small"
                state="Checkout"
                onBackClick={() => {}}
              />
            </VariantPreview>
          </VariantCard>
        </VariantsGrid>
      </DocsSection>

      {/* Specifications */}
      <DocsSection>
        <DocsSectionTitle>Specifications</DocsSectionTitle>
        
        <DocsSubsectionTitle>Props</DocsSubsectionTitle>
        <PropsTable>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>type</code></td>
              <td><code>'Web' | 'App'</code></td>
              <td><code>'Web'</code></td>
              <td>Context type - Web for desktop/mobile web, App for mobile app</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>'Big' | 'Small'</code></td>
              <td><code>'Big'</code></td>
              <td>Size variant - Big for desktop, Small for mobile</td>
            </tr>
            <tr>
              <td><code>state</code></td>
              <td><code>'Default' | 'Neutral' | 'Signed In' | 'Expanded' | 'Event' | 'Organiser' | 'Checkout'</code></td>
              <td><code>'Default'</code></td>
              <td>State variant - determines layout and visible elements</td>
            </tr>
            <tr>
              <td><code>logo</code></td>
              <td><code>React.ReactNode</code></td>
              <td><code>Logo component</code></td>
              <td>Custom logo override (uses Logo component by default)</td>
            </tr>
            <tr>
              <td><code>location</code></td>
              <td><code>string</code></td>
              <td><code>'New York'</code></td>
              <td>Location text (shown in Web Big and App Small Default)</td>
            </tr>
            <tr>
              <td><code>onLocationClick</code></td>
              <td><code>{'() => void'}</code></td>
              <td>-</td>
              <td>Location dropdown click handler</td>
            </tr>
            <tr>
              <td><code>navLinks</code></td>
              <td><code>NavLink[]</code></td>
              <td><code>[...]</code></td>
              <td>Navigation links array</td>
            </tr>
            <tr>
              <td><code>onSignUp</code></td>
              <td><code>{'() => void'}</code></td>
              <td>-</td>
              <td>Sign up button click handler (Web Big only)</td>
            </tr>
            <tr>
              <td><code>onMenuToggle</code></td>
              <td><code>{'() => void'}</code></td>
              <td>-</td>
              <td>Menu toggle handler (Web Small only)</td>
            </tr>
            <tr>
              <td><code>onBackClick</code></td>
              <td><code>{'() => void'}</code></td>
              <td>-</td>
              <td>Back button handler (App Event/Organiser/Checkout)</td>
            </tr>
            <tr>
              <td><code>actionButtons</code></td>
              <td><code>React.ReactNode</code></td>
              <td>-</td>
              <td>Custom action buttons (App Event/Organiser)</td>
            </tr>
          </tbody>
        </PropsTable>

        <DocsSubsectionTitle>Design Tokens Used</DocsSubsectionTitle>
        <DocsParagraph>
          <strong>Colors:</strong> neutral.dark.alpha[10], neutral.dark.alpha[75], neutral.light.alpha[5], neutral.light.alpha[10], neutral.light.alpha[90], neutral[50], neutral[800], primary.alpha[5], primary.alpha[10]
        </DocsParagraph>
        <DocsParagraph>
          <strong>Spacing:</strong> spacing[1] (4px), spacing[2] (8px), spacing[3] (12px), spacing[4] (16px), spacing[6] (24px)
        </DocsParagraph>
        <DocsParagraph>
          <strong>Typography:</strong> fontFamily.primary (Satoshi), fontWeights.medium (500), fontWeights.bold (700), desktop.body.medium[300], desktop.button[300]
        </DocsParagraph>
        <DocsParagraph>
          <strong>Effects:</strong> backdrop-filter: blur(20px), radial gradient dividers, inset shadows
        </DocsParagraph>

        <DocsSubsectionTitle>Composed Components</DocsSubsectionTitle>
        <DocsParagraph>
          The Topbar component uses <strong>ButtonHighlighted</strong> for the Sign Up button in Web, Big variants (Default and Neutral states). 
          The button automatically adapts its type (primary or neutral) based on the Topbar state.
        </DocsParagraph>
        <ul style={{ color: colors.neutral[700], lineHeight: 1.6, paddingLeft: spacing[5], marginTop: spacing[3] }}>
          <li><strong>Default state:</strong> Uses ButtonHighlighted with type="primary"</li>
          <li><strong>Neutral state:</strong> Uses ButtonHighlighted with type="neutral"</li>
        </ul>
      </DocsSection>

      {/* Behavior */}
      <DocsSection>
        <DocsSectionTitle>Behavior</DocsSectionTitle>
        
        <DocsSubsectionTitle>Interactive Elements</DocsSubsectionTitle>
        <DocsParagraph>
          <strong>Location Button:</strong> Shows current location with dropdown indicator. Clicking triggers the onLocationClick handler for location selection.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Navigation Links:</strong> Text links with hover opacity effect. Number of links displayed varies by state (3 for Default/Neutral, 4 for Signed In).
        </DocsParagraph>
        <DocsParagraph>
          <strong>Sign Up Button:</strong> Primary CTA with gradient background and subtle hover animation. Styling changes between Default (primary) and Neutral (neutral) states.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Menu Toggle:</strong> Hamburger icon that expands mobile menu. Icon changes to close (X) when expanded.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Back Button:</strong> Glassmorphic button for app navigation states (Event, Organiser, Checkout).
        </DocsParagraph>
      </DocsSection>

      {/* Usage Guidelines */}
      <DocsSection>
        <DocsSectionTitle>Usage Guidelines</DocsSectionTitle>
        
        <GuidelineSection>
          <GuidelineCard $type="do">
            <GuidelineTitle>✓ Do</GuidelineTitle>
            <GuidelineText>
              Use Web Big variants for desktop experiences (1440px+) and Web/App Small variants for mobile (360px).
            </GuidelineText>
          </GuidelineCard>
          
          <GuidelineCard $type="do">
            <GuidelineTitle>✓ Do</GuidelineTitle>
            <GuidelineText>
              Match the state to the user's context: Default for logged-out, Signed In for authenticated, Expanded for open mobile menu.
            </GuidelineText>
          </GuidelineCard>
          
          <GuidelineCard $type="do">
            <GuidelineTitle>✓ Do</GuidelineTitle>
            <GuidelineText>
              Use consistent logo assets across all variants for brand continuity.
            </GuidelineText>
          </GuidelineCard>
          
          <GuidelineCard $type="dont">
            <GuidelineTitle>✗ Don't</GuidelineTitle>
            <GuidelineText>
              Don't mix Web and App types in the same product context - use Web for web experiences and App for native mobile.
            </GuidelineText>
          </GuidelineCard>
          
          <GuidelineCard $type="dont">
            <GuidelineTitle>✗ Don't</GuidelineTitle>
            <GuidelineText>
              Don't use the Big size variant on mobile screens - always use Small for viewports under 768px.
            </GuidelineText>
          </GuidelineCard>
        </GuidelineSection>
      </DocsSection>

      {/* Accessibility */}
      <DocsSection>
        <DocsSectionTitle>Accessibility</DocsSectionTitle>
        <DocsParagraph>
          <strong>Keyboard Navigation:</strong> All interactive elements are keyboard accessible. Tab order flows logically from left to right.
        </DocsParagraph>
        <DocsParagraph>
          <strong>ARIA Labels:</strong> Add descriptive aria-labels to icon-only buttons (menu toggle, back button, action buttons).
        </DocsParagraph>
        <DocsParagraph>
          <strong>Focus Indicators:</strong> Default browser focus indicators are visible. Consider adding custom focus styles for enhanced visibility.
        </DocsParagraph>
        <DocsParagraph>
          <strong>Color Contrast:</strong> All text meets WCAG AA standards for contrast against glassmorphic backgrounds.
        </DocsParagraph>
      </DocsSection>

      {/* Developer Code */}
      <DocsSection>
        <DocsSectionTitle>Developer Code</DocsSectionTitle>
        
        <DocsSubsectionTitle>Installation</DocsSubsectionTitle>
        <DocsCodeBlock>
{`import { Topbar } from '@avenue/design-system';`}
        </DocsCodeBlock>

        <DocsSubsectionTitle>Basic Usage</DocsSubsectionTitle>
        <DocsCodeBlock>
{`// Logo component is used by default
<Topbar
  type="Web"
  size="Big"
  state="Default"
  location="New York"
  onLocationClick={() => handleLocationChange()}
  navLinks={[
    { label: 'Find Events', onClick: () => navigate('/events') },
    { label: 'Create Event', onClick: () => navigate('/create') },
    { label: 'My Events', onClick: () => navigate('/my-events') },
  ]}
  onSignUp={() => navigate('/signup')}
/>`}
        </DocsCodeBlock>

        <DocsSubsectionTitle>Web Small (Mobile)</DocsSubsectionTitle>
        <DocsCodeBlock>
{`<Topbar
  type="Web"
  size="Small"
  state="Default"
  onMenuToggle={() => handleMenuToggle()}
  navLinks={[
    { label: 'Find Events', onClick: () => navigate('/events') },
    { label: 'Create Event', onClick: () => navigate('/create') },
    { label: 'My Events', onClick: () => navigate('/my-events') },
    { label: 'Profile', onClick: () => navigate('/profile') },
  ]}
/>

{/* Custom logo override example */}
<Topbar
  type="Web"
  size="Small"
  logo={<img src="/custom-logo.png" alt="Custom Logo" />}
  onMenuToggle={() => handleMenuToggle()}
/>`}
        </DocsCodeBlock>

        <DocsSubsectionTitle>App with Actions</DocsSubsectionTitle>
        <DocsCodeBlock>
{`<Topbar
  type="App"
  size="Small"
  state="Event"
  onBackClick={() => navigate(-1)}
  actionButtons={
    <React.Fragment>
      <IconButton onClick={handleShare}>
        <ShareIcon />
      </IconButton>
      <IconButton onClick={handleFavorite}>
        <HeartIcon />
      </IconButton>
    </React.Fragment>
  }
/>`}
        </DocsCodeBlock>

        <DocsSubsectionTitle>TypeScript Types</DocsSubsectionTitle>
        <DocsCodeBlock>
{`interface NavLink {
  label: string;
  onClick: () => void;
}

type TopbarType = 'Web' | 'App';
type TopbarSize = 'Big' | 'Small';
type TopbarState = 
  | 'Default' 
  | 'Neutral' 
  | 'Signed In' 
  | 'Expanded' 
  | 'Event' 
  | 'Organiser' 
  | 'Checkout';

interface TopbarProps {
  type?: TopbarType;
  size?: TopbarSize;
  state?: TopbarState;
  logo?: React.ReactNode;
  location?: string;
  onLocationClick?: () => void;
  navLinks?: NavLink[];
  onSignUp?: () => void;
  onMenuToggle?: () => void;
  onBackClick?: () => void;
  actionButtons?: React.ReactNode;
}`}
        </DocsCodeBlock>
      </DocsSection>
    </DocsLayout>
  );
};
