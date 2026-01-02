/**
 * Documentation Site App Component
 * Main entry point for the documentation site
 */

import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

// Pages
import { HomePage } from './pages/HomePage';
import { ColorsPage } from './pages/foundations/ColorsPage';
import { TypographyPage } from './pages/foundations/TypographyPage';
import { SpacingPage } from './pages/foundations/SpacingPage';
import { AddItemPage } from './pages/components/AddItemPage';
import { AppNavBarPage } from './pages/components/AppNavBarPage';
import { ArtistCardPage } from './pages/components/ArtistCardPage';
import { ButtonHighlightedPage } from './pages/components/ButtonHighlightedPage';
import { ButtonPrimaryPage } from './pages/components/ButtonPrimaryPage';
import { CategoryCardPage } from './pages/components/CategoryCardPage';
import { EventCardPage } from './pages/components/EventCardPage';
import { LogoPage } from './pages/components/LogoPage';
import { TopbarPage } from './pages/components/TopbarPage';

/**
 * Simple routing for documentation pages
 * In a real application, you would use React Router or Next.js
 */
export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  // Intercept link clicks for client-side routing
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          setCurrentPath(href);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Route to page component
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/components/add-item':
        return <AddItemPage />;
      case '/components/app-nav-bar':
        return <AppNavBarPage />;
      case '/components/artist-card':
        return <ArtistCardPage />;
      case '/components/button-highlighted':
        return <ButtonHighlightedPage />;
      case '/components/button-primary':
        return <ButtonPrimaryPage />;
      case '/components/category-card':
        return <CategoryCardPage />;
      case '/components/event-card':
        return <EventCardPage />;
      case '/components/logo':
        return <LogoPage />;
      case '/components/topbar':
        return <TopbarPage />;
      case '/foundations/colors':
        return <ColorsPage />;
      case '/foundations/typography':
        return <TypographyPage />;
      case '/foundations/spacing':
        return <SpacingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <GlobalStyles />
      {renderPage()}
    </>
  );
};

export default App;

