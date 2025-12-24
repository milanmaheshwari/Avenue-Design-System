/**
 * Topbar Examples
 * Demonstrates all 9 variants from Figma design
 */

import React from 'react';
import { Topbar } from './Topbar';

const TopbarExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', backgroundColor: '#0a0a0a', padding: '60px 40px' }}>
      
      {/* WEB BIG VARIANTS */}
      <div>
        <h2 style={{ color: '#fafafa', marginBottom: '40px', fontSize: '24px' }}>Web, Big Variants</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Variant 1: Web, Big, Default */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=Web, Size=Big, State=Default</p>
            <Topbar
              type="Web"
              size="Big"
              state="Default"
              logo="Avenue Ticket"
              location="New York"
              onLocationClick={() => console.log('Location clicked')}
              navLinks={[
                { label: 'Find Events', onClick: () => console.log('Find Events') },
                { label: 'Create Event', onClick: () => console.log('Create Event') },
                { label: 'My Events', onClick: () => console.log('My Events') },
              ]}
              onSignUp={() => console.log('Sign Up clicked')}
            />
          </div>
          
          {/* Variant 2: Web, Big, Neutral */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=Web, Size=Big, State=Neutral</p>
            <Topbar
              type="Web"
              size="Big"
              state="Neutral"
              logo="Avenue Ticket"
              location="New York"
              onLocationClick={() => console.log('Location clicked')}
              navLinks={[
                { label: 'Find Events', onClick: () => console.log('Find Events') },
                { label: 'Create Event', onClick: () => console.log('Create Event') },
                { label: 'My Events', onClick: () => console.log('My Events') },
              ]}
              onSignUp={() => console.log('Sign Up clicked')}
            />
          </div>
          
          {/* Variant 3: Web, Big, Signed In */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=Web, Size=Big, State=Signed In</p>
            <Topbar
              type="Web"
              size="Big"
              state="Signed In"
              logo="Avenue Ticket"
              location="New York"
              onLocationClick={() => console.log('Location clicked')}
              navLinks={[
                { label: 'Find Events', onClick: () => console.log('Find Events') },
                { label: 'Create Event', onClick: () => console.log('Create Event') },
                { label: 'My Events', onClick: () => console.log('My Events') },
                { label: 'Profile', onClick: () => console.log('Profile') },
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* WEB SMALL VARIANTS */}
      <div>
        <h2 style={{ color: '#fafafa', marginBottom: '40px', fontSize: '24px' }}>Web, Small Variants</h2>
        
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Variant 4: Web, Small, Default */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=Web, Size=Small, State=Default</p>
            <Topbar
              type="Web"
              size="Small"
              state="Default"
              logo="Avenue"
              onMenuToggle={() => console.log('Menu toggled')}
              navLinks={[
                { label: 'Find Events', onClick: () => console.log('Find Events') },
                { label: 'Create Event', onClick: () => console.log('Create Event') },
                { label: 'My Events', onClick: () => console.log('My Events') },
                { label: 'Profile', onClick: () => console.log('Profile') },
              ]}
            />
          </div>
          
          {/* Variant 5: Web, Small, Expanded */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=Web, Size=Small, State=Expanded</p>
            <Topbar
              type="Web"
              size="Small"
              state="Expanded"
              logo="Avenue"
              navLinks={[
                { label: 'Find Events', onClick: () => console.log('Find Events') },
                { label: 'Create Event', onClick: () => console.log('Create Event') },
                { label: 'My Events', onClick: () => console.log('My Events') },
                { label: 'Profile', onClick: () => console.log('Profile') },
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* APP SMALL VARIANTS */}
      <div>
        <h2 style={{ color: '#fafafa', marginBottom: '40px', fontSize: '24px' }}>App, Small Variants</h2>
        
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Variant 6: App, Small, Default */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=App, Size=Small, State=Default</p>
            <Topbar
              type="App"
              size="Small"
              state="Default"
              logo="Avenue"
              location="New York"
              onLocationClick={() => console.log('Location clicked')}
            />
          </div>
          
          {/* Variant 7: App, Small, Event */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=App, Size=Small, State=Event</p>
            <Topbar
              type="App"
              size="Small"
              state="Event"
              onBackClick={() => console.log('Back clicked')}
              actionButtons={
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ 
                    padding: '6px',
                    borderRadius: '20px',
                    border: 'none',
                    background: 'linear-gradient(161.05deg, rgba(250, 250, 250, 0.1) 1.43%, rgba(250, 250, 250, 0.05) 101.55%)',
                    cursor: 'pointer'
                  }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="7" stroke="#fafafa" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button style={{ 
                    padding: '6px',
                    borderRadius: '20px',
                    border: 'none',
                    background: 'linear-gradient(161.05deg, rgba(250, 250, 250, 0.1) 1.43%, rgba(250, 250, 250, 0.05) 101.55%)',
                    cursor: 'pointer'
                  }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path d="M10 5v10m-5-5h10" stroke="#fafafa" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              }
            />
          </div>
          
          {/* Variant 8: App, Small, Organiser */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=App, Size=Small, State=Organiser</p>
            <Topbar
              type="App"
              size="Small"
              state="Organiser"
              onBackClick={() => console.log('Back clicked')}
              actionButtons={
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ 
                    padding: '6px',
                    borderRadius: '20px',
                    border: 'none',
                    background: 'linear-gradient(161.05deg, rgba(250, 250, 250, 0.1) 1.43%, rgba(250, 250, 250, 0.05) 101.55%)',
                    cursor: 'pointer'
                  }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <rect x="5" y="5" width="10" height="10" stroke="#fafafa" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button style={{ 
                    padding: '6px',
                    borderRadius: '20px',
                    border: 'none',
                    background: 'linear-gradient(161.05deg, rgba(250, 250, 250, 0.1) 1.43%, rgba(250, 250, 250, 0.05) 101.55%)',
                    cursor: 'pointer'
                  }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="3" stroke="#fafafa" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button style={{ 
                    padding: '6px',
                    borderRadius: '20px',
                    border: 'none',
                    background: 'linear-gradient(161.05deg, rgba(250, 250, 250, 0.1) 1.43%, rgba(250, 250, 250, 0.05) 101.55%)',
                    cursor: 'pointer'
                  }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path d="M5 10h10M10 5v10" stroke="#fafafa" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              }
            />
          </div>
          
          {/* Variant 9: App, Small, Checkout */}
          <div>
            <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>Type=App, Size=Small, State=Checkout</p>
            <Topbar
              type="App"
              size="Small"
              state="Checkout"
              onBackClick={() => console.log('Back clicked')}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TopbarExamples;
