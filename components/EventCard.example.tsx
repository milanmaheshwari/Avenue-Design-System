/**
 * EventCard Component Examples
 * Demonstrates different sizes, themes, and types
 */

import React from 'react';
import { EventCard } from './EventCard';
import demoImage from '../assets/fac1b8921d7451f21cc3076e1e09e76dedf851f1.png';

// Demo image
const DEMO_IMAGE = demoImage;

export const EventCardExamples = () => {
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
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
            onClick={() => console.log('Clicked: Jazz event')}
          />
          <EventCard
            size="big"
            type="trending"
            trendingRank={2}
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
            onClick={() => console.log('Clicked: Trending event')}
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Medium Size Variants</h2>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <EventCard
            size="medium"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="music"
          />
          <EventCard
            size="medium"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="coffee"
          />
          <EventCard
            size="medium"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="comedy"
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Small Size Variants</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <EventCard
            size="small"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
          />
          <EventCard
            size="small"
            type="trending"
            trendingRank={2}
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
          />
          <EventCard
            size="small"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="music"
          />
          <EventCard
            size="small"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="comedy"
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>All Themes (Big)</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '32px'
        }}>
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="music"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="coffee"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="comedy"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="movies"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="nightlife"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="sports"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="themeParks"
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="wellness"
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>With Favorite Toggle</h2>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="primary"
            isFavorite={true}
            onFavoriteToggle={() => console.log('Toggle favorite')}
          />
          <EventCard
            size="big"
            title="Jazz Under the Stars"
            info="City Park • Dec 1"
            imageUrl={DEMO_IMAGE}
            theme="music"
            isFavorite={false}
            onFavoriteToggle={() => console.log('Toggle favorite')}
          />
        </div>
      </div>

      <div>
        <h2 style={{ color: '#fff', marginBottom: '24px' }}>Responsive Grid Example</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(156px, 1fr))',
          gap: '16px'
        }}>
          {[...Array(12)].map((_, i) => (
            <EventCard
              key={i}
              size="small"
              title="Jazz Under the Stars"
              info="City Park • Dec 1"
              imageUrl={DEMO_IMAGE}
              theme={(i % 2 === 0 ? 'primary' : 'music') as any}
              type={i === 0 || i === 3 ? 'trending' : 'default'}
              trendingRank={i === 0 ? 1 : i === 3 ? 2 : undefined}
              onClick={() => console.log(`Clicked event ${i + 1}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCardExamples;

