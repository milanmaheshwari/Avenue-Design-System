/**
 * Navigation Icons Examples
 * Demonstrating full color control over SVG properties
 */

import React from 'react';
import { HomeIcon, EventsIcon, TicketsIcon, ProfileIcon } from './NavIcons';

export const NavIconsExamples = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '48px', 
      padding: '48px',
      backgroundColor: '#000',
      minHeight: '100vh'
    }}>
      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Default Icons</h2>
        <div style={{ display: 'flex', gap: '24px' }}>
          <HomeIcon />
          <EventsIcon />
          <TicketsIcon />
          <ProfileIcon />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Custom Background Colors</h2>
        <div style={{ display: 'flex', gap: '24px' }}>
          <HomeIcon 
            bgStart="#4f46e5" 
            bgEnd="#6366f1"
          />
          <EventsIcon 
            bgStart="#ec4899" 
            bgEnd="#f472b6"
          />
          <TicketsIcon 
            bgStart="#10b981" 
            bgEnd="#34d399"
          />
          <ProfileIcon 
            bgStart="#f59e0b" 
            bgEnd="#fbbf24"
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Custom Icon Stroke Colors</h2>
        <div style={{ display: 'flex', gap: '24px' }}>
          <HomeIcon 
            iconStroke="#4f46e5"
            iconOpacity={1}
          />
          <EventsIcon 
            iconStroke="#ec4899"
            iconOpacity={1}
          />
          <TicketsIcon 
            iconStroke="#10b981"
            iconOpacity={1}
          />
          <ProfileIcon 
            iconStroke="#f59e0b"
            iconOpacity={1}
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Custom Border Colors</h2>
        <div style={{ display: 'flex', gap: '24px' }}>
          <HomeIcon 
            borderStroke="#4f46e5"
            borderOpacity={0.8}
          />
          <EventsIcon 
            borderStroke="#ec4899"
            borderOpacity={0.8}
          />
          <TicketsIcon 
            borderStroke="#10b981"
            borderOpacity={0.8}
          />
          <ProfileIcon 
            borderStroke="#f59e0b"
            borderOpacity={0.8}
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Fully Custom (All Properties)</h2>
        <div style={{ display: 'flex', gap: '24px' }}>
          <HomeIcon 
            bgStart="#4f46e5"
            bgEnd="#312e81"
            borderStroke="#818cf8"
            iconStroke="#c7d2fe"
            borderOpacity={0.6}
            iconOpacity={0.9}
          />
          <EventsIcon 
            bgStart="#ec4899"
            bgEnd="#9f1239"
            borderStroke="#f9a8d4"
            iconStroke="#fce7f3"
            borderOpacity={0.6}
            iconOpacity={0.9}
          />
          <TicketsIcon 
            bgStart="#10b981"
            bgEnd="#065f46"
            borderStroke="#6ee7b7"
            iconStroke="#d1fae5"
            borderOpacity={0.6}
            iconOpacity={0.9}
          />
          <ProfileIcon 
            bgStart="#f59e0b"
            bgEnd="#92400e"
            borderStroke="#fcd34d"
            iconStroke="#fef3c7"
            borderOpacity={0.6}
            iconOpacity={0.9}
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Opacity Variations</h2>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>10% opacity</p>
            <HomeIcon iconOpacity={0.1} />
          </div>
          <div>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>30% opacity</p>
            <HomeIcon iconOpacity={0.3} />
          </div>
          <div>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>50% opacity</p>
            <HomeIcon iconOpacity={0.5} />
          </div>
          <div>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>70% opacity</p>
            <HomeIcon iconOpacity={0.7} />
          </div>
          <div>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>100% opacity</p>
            <HomeIcon iconOpacity={1} />
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '16px' }}>Available Props</h2>
        <pre style={{ 
          backgroundColor: '#1a1a1a', 
          padding: '16px', 
          borderRadius: '8px',
          color: '#d1d5db',
          fontSize: '14px',
          overflow: 'auto'
        }}>
{`interface IconProps {
  bgStart?: string;      // Background gradient start (default: '#FAFAFA')
  bgEnd?: string;        // Background gradient end (default: '#FAFAFA')
  borderStroke?: string; // Border stroke color (default: '#FAFAFA')
  iconStroke?: string;   // Icon path stroke color (default: '#FAFAFA')
  borderOpacity?: number; // Border opacity 0-1 (default: 0.05)
  iconOpacity?: number;  // Icon opacity 0-1 (default: 0.5)
  className?: string;    // Optional CSS class
}`}
        </pre>
      </div>
    </div>
  );
};

export default NavIconsExamples;

