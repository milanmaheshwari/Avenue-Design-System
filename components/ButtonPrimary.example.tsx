/**
 * ButtonPrimary Component Examples
 */

import React from 'react';
import { ButtonPrimary } from './ButtonPrimary';

export const ButtonPrimaryExamples = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#0a0a0a' }}>
      <h2 style={{ color: '#fafafa', marginBottom: '24px' }}>ButtonPrimary Examples</h2>
      
      {/* Big Size Variants */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fafafa', marginBottom: '16px' }}>Big Size</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ButtonPrimary size="big" theme="wellness">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="music">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="nightlife">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="coffee">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="sports">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="movies">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="comedy">Button</ButtonPrimary>
          <ButtonPrimary size="big" theme="themeParks">Button</ButtonPrimary>
        </div>
      </div>
      
      {/* Small Size Variants */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fafafa', marginBottom: '16px' }}>Small Size</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ButtonPrimary size="small" theme="wellness">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="music">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="nightlife">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="coffee">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="sports">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="movies">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="comedy">View More</ButtonPrimary>
          <ButtonPrimary size="small" theme="themeParks">View More</ButtonPrimary>
        </div>
      </div>
      
      {/* Interactive Examples */}
      <div>
        <h3 style={{ color: '#fafafa', marginBottom: '16px' }}>Interactive</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ButtonPrimary 
            size="big" 
            theme="music"
            onClick={() => alert('Button clicked!')}
          >
            Click Me
          </ButtonPrimary>
          <ButtonPrimary 
            size="small" 
            theme="sports"
            disabled
          >
            Disabled
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ButtonPrimaryExamples;

