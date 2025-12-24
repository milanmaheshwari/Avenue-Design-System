/**
 * AddItem Component - Usage Examples
 */

import React from 'react';
import { AddItem } from './AddItem';
import placeholderImage from '../assets/a5561ce6332b43441a50ac1c989d165d124b3efd.png';

// Example 1: Big size with movies category
export const BigAddItemExample = () => {
  return (
    <div style={{ width: '240px' }}>
      <AddItem
        size="Big"
        title="Official Cosmic Collision Cap- Dark Blue"
        price="$100.00"
        imageUrl={placeholderImage}
        category="movies"
        onAdd={() => console.log('Added to cart')}
      />
    </div>
  );
};

// Example 2: Small size with music category
export const SmallAddItemExample = () => {
  return (
    <div style={{ width: '160px' }}>
      <AddItem
        size="Small"
        title="Concert T-Shirt"
        price="$45.00"
        imageUrl={placeholderImage}
        category="music"
        onAdd={() => console.log('Added to cart')}
      />
    </div>
  );
};

// Example 3: Grid layout with multiple items
export const ProductGridExample = () => {
  const products = [
    {
      id: 1,
      title: 'Official Cosmic Collision Cap- Dark Blue',
      price: '$100.00',
      imageUrl: placeholderImage,
      category: 'movies' as const,
    },
    {
      id: 2,
      title: 'Comedy Show Premium Ticket',
      price: '$75.00',
      imageUrl: placeholderImage,
      category: 'comedy' as const,
    },
    {
      id: 3,
      title: 'Sports Jersey - Home Edition',
      price: '$120.00',
      imageUrl: placeholderImage,
      category: 'sports' as const,
    },
    {
      id: 4,
      title: 'Music Festival Pass',
      price: '$250.00',
      imageUrl: placeholderImage,
      category: 'music' as const,
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '24px',
        padding: '24px',
      }}
    >
      {products.map((product) => (
        <AddItem
          key={product.id}
          size="Big"
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
          category={product.category}
          onAdd={() => console.log(`Added ${product.title} to cart`)}
        />
      ))}
    </div>
  );
};

// Example 4: Responsive grid (big on desktop, small on mobile)
export const ResponsiveGridExample = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile
          ? 'repeat(2, 1fr)'
          : 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: isMobile ? '16px' : '24px',
        padding: '24px',
      }}
    >
      <AddItem
        size={isMobile ? 'Small' : 'Big'}
        title="Official Cosmic Collision Cap- Dark Blue"
        price="$100.00"
        imageUrl={placeholderImage}
        category="movies"
        onAdd={() => console.log('Added to cart')}
      />
    </div>
  );
};

// Example 5: All categories showcase
export const AllCategoriesExample = () => {
  const categories = [
    { name: 'comedy', color: 'yellow' },
    { name: 'nightlife', color: 'purple' },
    { name: 'sports', color: 'orange' },
    { name: 'music', color: 'magenta' },
    { name: 'movies', color: 'red' },
    { name: 'wellness', color: 'green' },
    { name: 'themeParks', color: 'blue' },
    { name: 'coffee', color: 'brown' },
  ] as const;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '24px',
      }}
    >
      {categories.map((category) => (
        <AddItem
          key={category.name}
          size="Small"
          title={`${category.name.charAt(0).toUpperCase() + category.name.slice(1)} Item`}
          price="$50.00"
          imageUrl={placeholderImage}
          category={category.name}
          onAdd={() => console.log(`Added ${category.name} item`)}
        />
      ))}
    </div>
  );
};

