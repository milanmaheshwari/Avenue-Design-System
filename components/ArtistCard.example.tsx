/**
 * ArtistCard Component Examples
 * Demonstrates different sizes and categories
 */

import React from 'react';
import { ArtistCard } from './ArtistCard';
import demoImage1 from '../assets/fae9216881de499113dd7791f82ff50e3aaa7af1.png';
import demoImage2 from '../assets/fd092aafde0b7229084b06b4cb61662024365b50.png';

// Demo images
const DEMO_IMAGE_1 = demoImage1;
const DEMO_IMAGE_2 = demoImage2;

export const ArtistCardExamples = () => {
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
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Big Size Variants</h2>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <ArtistCard
            size="big"
            name="The Acoustic Duo"
            genre="Electronic"
            imageUrl={DEMO_IMAGE_1}
            category="music"
            onClick={() => console.log('Clicked: The Acoustic Duo')}
          />
          <ArtistCard
            size="big"
            name="Marty O'Neill"
            genre="Indie"
            imageUrl={DEMO_IMAGE_2}
            category="comedy"
            onClick={() => console.log('Clicked: Marty O\'Neill')}
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Small Size Variants</h2>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <ArtistCard
            size="small"
            name="The Acoustic Duo"
            genre="Electronic"
            imageUrl={DEMO_IMAGE_1}
            category="music"
          />
          <ArtistCard
            size="small"
            name="Marty O'Neill"
            genre="Indie"
            imageUrl={DEMO_IMAGE_2}
            category="comedy"
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>All Categories (Small)</h2>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <ArtistCard
            size="small"
            name="The Jazzers"
            genre="Jazz"
            imageUrl={DEMO_IMAGE_1}
            category="music"
          />
          <ArtistCard
            size="small"
            name="Stand Up Star"
            genre="Comedy"
            imageUrl={DEMO_IMAGE_2}
            category="comedy"
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Interactive Grid</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '32px'
        }}>
          <ArtistCard
            size="big"
            name="Luna Rivers"
            genre="Pop"
            imageUrl={DEMO_IMAGE_1}
            category="music"
            onClick={() => alert('Clicked: Luna Rivers')}
          />
          <ArtistCard
            size="big"
            name="Mike Johnson"
            genre="Stand-up"
            imageUrl={DEMO_IMAGE_2}
            category="comedy"
            onClick={() => alert('Clicked: Mike Johnson')}
          />
          <ArtistCard
            size="big"
            name="The Band"
            genre="Rock"
            imageUrl={DEMO_IMAGE_1}
            category="music"
            onClick={() => alert('Clicked: The Band')}
          />
          <ArtistCard
            size="big"
            name="Sarah Cooper"
            genre="Improv"
            imageUrl={DEMO_IMAGE_2}
            category="comedy"
            onClick={() => alert('Clicked: Sarah Cooper')}
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Without Click Handler</h2>
        <div style={{ display: 'flex', gap: '32px' }}>
          <ArtistCard
            size="big"
            name="Static Artist"
            genre="No Hover"
            imageUrl={DEMO_IMAGE_1}
            category="music"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistCardExamples;

