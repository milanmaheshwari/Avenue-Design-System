/**
 * Logo Component Examples
 * Demonstrates the Logo component in different sizes
 */

import React from 'react';
import { Logo } from './Logo';

export default function LogoExamples() {
  return (
    <div style={{ 
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      backgroundColor: '#000',
      minHeight: '100vh'
    }}>
      {/* Big Size */}
      <div>
        <h3 style={{ 
          color: '#fff', 
          marginBottom: '20px',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          Big Size (Default)
        </h3>
        <Logo size="big" />
      </div>

      {/* Small Size */}
      <div>
        <h3 style={{ 
          color: '#fff', 
          marginBottom: '20px',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          Small Size
        </h3>
        <Logo size="small" />
      </div>

      {/* Comparison */}
      <div>
        <h3 style={{ 
          color: '#fff', 
          marginBottom: '20px',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          Size Comparison
        </h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '30px' 
        }}>
          <Logo size="big" />
          <Logo size="small" />
        </div>
      </div>
    </div>
  );
}
