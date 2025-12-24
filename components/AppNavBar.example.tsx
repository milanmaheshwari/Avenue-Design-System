/**
 * AppNavBar Component Examples
 * Demonstrates different states and usage patterns
 */

import React, { useState } from 'react';
import { AppNavBar, NavTab } from './AppNavBar';

export const AppNavBarExamples = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '48px',
      backgroundColor: '#000',
      minHeight: '100vh'
    }}>
      <div>
        <h2 style={{ color: '#fff', marginBottom: '16px' }}>Interactive Example</h2>
        <AppNavBar 
          active={activeTab} 
          onTabClick={(tab) => {
            setActiveTab(tab);
            console.log('Tab clicked:', tab);
          }} 
        />
        <p style={{ color: '#aaa', marginTop: '16px' }}>
          Current tab: {activeTab}
        </p>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '16px' }}>All States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <p style={{ color: '#aaa', marginBottom: '8px' }}>Home Active</p>
            <AppNavBar active="home" />
          </div>
          <div>
            <p style={{ color: '#aaa', marginBottom: '8px' }}>Events Active</p>
            <AppNavBar active="events" />
          </div>
          <div>
            <p style={{ color: '#aaa', marginBottom: '8px' }}>Tickets Active</p>
            <AppNavBar active="tickets" />
          </div>
          <div>
            <p style={{ color: '#aaa', marginBottom: '8px' }}>Profile Active</p>
            <AppNavBar active="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavBarExamples;

