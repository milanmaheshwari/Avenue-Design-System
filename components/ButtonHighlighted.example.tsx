/**
 * ButtonHighlighted Component Examples
 */

import React from 'react';
import { ButtonHighlighted } from './ButtonHighlighted';

export const ButtonHighlightedExamples = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#0a0a0a' }}>
      <h2 style={{ color: '#fafafa', marginBottom: '24px' }}>ButtonHighlighted Examples</h2>
      
      {/* Type Variants */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fafafa', marginBottom: '16px' }}>Type Variants</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ButtonHighlighted type="primary">Sign Up</ButtonHighlighted>
          <ButtonHighlighted type="neutral">Sign Up</ButtonHighlighted>
        </div>
      </div>
      
      {/* Custom Text */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#fafafa', marginBottom: '16px' }}>Custom Text</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ButtonHighlighted type="primary">Get Started</ButtonHighlighted>
          <ButtonHighlighted type="neutral">Learn More</ButtonHighlighted>
          <ButtonHighlighted type="primary">Join Now</ButtonHighlighted>
        </div>
      </div>
      
      {/* Interactive Examples */}
      <div>
        <h3 style={{ color: '#fafafa', marginBottom: '16px' }}>Interactive</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <ButtonHighlighted 
            type="primary"
            onClick={() => alert('Primary clicked!')}
          >
            Click Me
          </ButtonHighlighted>
          <ButtonHighlighted 
            type="neutral"
            disabled
          >
            Disabled
          </ButtonHighlighted>
        </div>
      </div>
    </div>
  );
};

export default ButtonHighlightedExamples;

