/**
 * CategoryCard Component Examples
 * Demonstrates the CategoryCard component in different themes and sizes
 */

import React from 'react';
import { CategoryCard } from './CategoryCard';

export default function CategoryCardExamples() {
  const themes = ['music', 'nightlife', 'coffee', 'sports', 'movies', 'comedy', 'wellness', 'themeParks'] as const;
  
  return (
    <div style={{ 
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '60px',
      backgroundColor: '#000',
      minHeight: '100vh'
    }}>
      {/* Big Size */}
      <div>
        <h2 style={{ 
          color: '#fff', 
          marginBottom: '30px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '28px'
        }}>
          Big Size (300×360px)
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 300px)',
          gap: '24px'
        }}>
          {themes.map(theme => (
            <CategoryCard
              key={theme}
              theme={theme}
              size="big"
              onClick={() => console.log(`Clicked ${theme}`)}
            />
          ))}
        </div>
      </div>

      {/* Small Size */}
      <div>
        <h2 style={{ 
          color: '#fff', 
          marginBottom: '30px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '28px'
        }}>
          Small Size (160×220px)
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 160px)',
          gap: '16px'
        }}>
          {themes.map(theme => (
            <CategoryCard
              key={theme}
              theme={theme}
              size="small"
              onClick={() => console.log(`Clicked ${theme}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
