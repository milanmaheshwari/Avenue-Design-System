# Avenue Design System - Components

React components built with Avenue Design System tokens.

## Components

### 1. AddItem

A product card component with an add-to-cart button. Supports two size variants.

### 2. AppNavBar

A mobile navigation bar with glassmorphic styling and four primary navigation tabs.

### 3. ArtistCard

A card component for displaying artist/performer information with category-themed styling. Supports Music and Comedy categories.

### 4. ButtonPrimary

A themeable call-to-action button with gradient backgrounds and arrow indicator. Supports 8 theme colors aligned with event categories.

### 5. EventCard

A comprehensive card component for displaying event information with theme-based styling, multiple size variants, and optional trending indicators.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'Big' \| 'Small'` | `'Big'` | Size variant of the card |
| `title` | `string` | Required | Product title |
| `price` | `string` | Required | Product price (formatted) |
| `imageUrl` | `string` | Required | Product image URL |
| `onAdd` | `() => void` | Optional | Callback when ADD button is clicked |
| `category` | `'comedy' \| 'nightlife' \| 'sports' \| 'music' \| 'movies' \| 'wellness' \| 'themeParks' \| 'coffee'` | `'movies'` | Category for color theming |

**Usage:**

```tsx
import { AddItem } from '@avenue/design-system/components';

function ProductGrid() {
  const handleAdd = () => {
    console.log('Added to cart!');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '24px' }}>
      <AddItem
        size="Big"
        title="Official Cosmic Collision Cap- Dark Blue"
        price="$100.00"
        imageUrl="/images/cap.png"
        category="movies"
        onAdd={handleAdd}
      />
      
      <AddItem
        size="Small"
        title="Concert T-Shirt"
        price="$45.00"
        imageUrl="/images/tshirt.png"
        category="music"
        onAdd={handleAdd}
      />
    </div>
  );
}
```

**Tokens Used:**

The component uses the following design tokens:

- **Colors:**
  - `colors.neutral.light.alpha[90]` - Title text
  - `colors.neutral.light.alpha[75]` - Price text
  - `colors.neutral.light.alpha[10]` - Border
  - `colors.neutral.light.alpha[5]` - Button gradient
  - `colors.primary[50]` - Button text
  - Category colors for gradient overlay

- **Typography:**
  - Desktop: `heading[800]`, `body.medium[400]`, `button[300]`
  - Mobile: `heading[600]`, `body.medium[300]`, `button[200]`

- **Spacing:**
  - Various spacing tokens for padding and gaps

- **Shadows:**
  - `shadows['2xl']` - Card shadow

- **Borders:**
  - `theme.borders.radius.lg` - Button radius
  - Custom radius for card (20px/16px)

---

### 2. AppNavBar (continued)

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `active` | `'home' \| 'events' \| 'tickets' \| 'profile'` | `'home'` | Currently active tab |
| `onTabClick` | `(tab: NavTab) => void` | Optional | Callback when tab is clicked |

**Usage:**

```tsx
import { AppNavBar, NavTab } from '@avenue/design-system/components';
import { useState } from 'react';

function MobileApp() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  return (
    <div>
      {/* Your page content */}
      
      {/* Fixed navigation at bottom */}
      <div style={{ 
        position: 'fixed', 
        bottom: '16px', 
        left: '50%', 
        transform: 'translateX(-50%)'
      }}>
        <AppNavBar 
          active={activeTab} 
          onTabClick={setActiveTab}
        />
      </div>
    </div>
  );
}
```

**Tokens Used:**

The component uses the following design tokens:

- **Colors:**
  - `colors.neutral.dark.alpha[75/90]` - Background gradient
  - `colors.neutral.light.alpha[5]` - Border
  - `colors.neutral.light.alpha[50]` - Inactive labels
  - `colors.neutral.light.alpha[90]` - Icon strokes
  - `colors.primary[600]` - Active label and indicator

- **Typography:**
  - Mobile: `overline[300]` - Tab labels (12px, medium, 10% tracking)

- **Spacing:**
  - `spacing[3]` (12px) - Horizontal padding
  - `spacing[2]` (8px) - Vertical padding
  - `spacing[1]` (4px) - Tab padding
  - 6px - Icon-label gap

- **Effects:**
  - Backdrop blur: 20px
  - Border radius: 16px
  - Smooth transitions: 250-300ms

---

### 4. ArtistCard (continued)

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'big' \| 'small'` | `'big'` | Size variant of the card |
| `name` | `string` | Required | Artist or performer name |
| `genre` | `string` | Required | Genre or performance type |
| `imageUrl` | `string` | Required | Artist image URL (1:1 ratio recommended) |
| `category` | `ArtistCategory` | `'music'` | Category for color theming |
| `onClick` | `() => void` | Optional | Optional click handler |

**Usage:**

```tsx
import { ArtistCard } from '@avenue/design-system/components';

function ArtistGrid() {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '32px'
    }}>
      <ArtistCard
        size="big"
        name="The Acoustic Duo"
        genre="Electronic"
        imageUrl="/images/artist1.jpg"
        category="music"
        onClick={() => console.log('Artist clicked')}
      />
      <ArtistCard
        size="small"
        name="Marty O'Neill"
        genre="Indie"
        imageUrl="/images/artist2.jpg"
        category="comedy"
      />
    </div>
  );
}
```

**Tokens Used:**

The component uses the following design tokens:

- **Colors:**
  - `colors[category].alpha[5]` - Category overlay (5% opacity)
  - `colors[category][100]` - Text colors (artist name and genre)

- **Typography:**
  - Desktop: `heading[700]` (20px), `body.regular[300]` (16px)
  - Mobile: `heading[600]` (14px), `body.regular[300]` (13px)

- **Spacing:**
  - `spacing[5]` (20px) - Image-text gap (big)
  - `spacing[3]` (12px) - Image-text gap (small)
  - `spacing[2]` (8px) - Name-genre gap (big)

- **Effects:**
  - Image shadow: 0px 13.714px 27.429px rgba(0,0,0,0.32)
  - Border radius: 40px (big) / 24px (small)

---

### 4. ButtonPrimary (continued)

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `'Button'` | Button text content |
| `size` | `'big' \| 'small'` | `'big'` | Size variant of the button |
| `theme` | `ButtonTheme` | `'wellness'` | Theme color variant |
| `onClick` | `() => void` | Optional | Click handler function |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | Optional | Additional CSS class |

**Usage:**

```tsx
import { ButtonPrimary } from '@avenue/design-system/components';

function CategorySection() {
  return (
    <section>
      <h2>Music Events</h2>
      {/* Event cards */}
      <ButtonPrimary
        size="small"
        theme="music"
        onClick={() => navigate('/events/music')}
      >
        View More
      </ButtonPrimary>
    </section>
  );
}
```

**Tokens Used:**

The component uses the following design tokens:

- **Colors:**
  - `colors[theme].alpha[5]` - First gradient stop
  - `colors[theme].alpha[25]` - Second gradient stop
  - `colors[theme].alpha[10]` - Inset shadow
  - `colors[theme][50]` - Text color

- **Typography:**
  - Font Family: Satoshi Bold
  - Big: 20px, Small: 16px
  - Line height: 1, Letter spacing: 0

- **Spacing:**
  - Big: padding `spacing[6]` (24px), border-radius 16px
  - Small: padding `spacing[4]` (16px), border-radius 12px
  - Gap: `spacing[2]` (8px) between text and arrow

- **Effects:**
  - Dual gradient backgrounds with theme-specific alpha values
  - Inset box shadow: 12px blur + 32px bottom shadow
  - Hover: -1px translateY for lift effect

**Theme Options:**

`wellness` (green), `music` (magenta), `nightlife` (purple), `coffee` (brown), `sports` (orange), `movies` (red), `comedy` (yellow), `themeParks` (blue)

---

### 5. EventCard

A comprehensive card component for displaying event information with rich visual styling.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'big' \| 'medium' \| 'small'` | `'big'` | Size variant of the card |
| `type` | `'default' \| 'trending'` | `'default'` | Card type with optional trending indicator |
| `title` | `string` | Required | Event title |
| `info` | `string` | Required | Location and date information |
| `imageUrl` | `string` | Required | Event image URL (portrait recommended) |
| `theme` | `EventTheme` | `'primary'` | Theme for color styling |
| `trendingRank` | `number` | Optional | Rank number (only shown when type='trending') |
| `isFavorite` | `boolean` | `false` | Is favorited (controlled mode) |
| `onFavoriteToggle` | `() => void` | Optional | Favorite toggle handler |
| `onClick` | `() => void` | Optional | Optional click handler |

**Usage:**

```tsx
import { EventCard } from '@avenue/design-system/components';

function EventsGrid() {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(292px, 1fr))',
      gap: '24px'
    }}>
      <EventCard
        size="medium"
        title="Jazz Under the Stars"
        info="City Park • Dec 1"
        imageUrl="/images/event1.jpg"
        theme="music"
        onClick={() => navigate('/events/jazz-stars')}
      />
      <EventCard
        size="medium"
        type="trending"
        trendingRank={2}
        title="Comedy Night"
        info="The Laugh Club • Dec 5"
        imageUrl="/images/event2.jpg"
        theme="comedy"
        isFavorite={true}
        onFavoriteToggle={() => handleFavoriteToggle(eventId)}
      />
    </div>
  );
}
```

**Tokens Used:**

The component uses the following design tokens:

- **Colors:**
  - `colors.neutral[950]` - Background base
  - `colors[theme].alpha[5/10/5]` - Gradient background
  - `colors[theme].alpha[5]` - Image overlay
  - `colors[theme][100]` - Text colors
  - `colors.neutral.light.alpha[5]` - Border
  - `colors.neutral.light.alpha[90]` - Favorite icon

- **Typography:**
  - Big: `heading[700]` (20px), `body.regular[300]` (16px)
  - Medium: `heading[800]` (16px), `body.regular[400]` (14px)
  - Small: `heading[700]` (13px), `body.regular[400]` (12px)
  - Trending number: 120px (big), 95px (medium), 60px (small)

- **Spacing:**
  - Content padding: `spacing[5/4/2]` horizontal
  - Content padding: `spacing[6/5/3]` bottom
  - Title-Info gap: `spacing[2/1]` or 2px
  - Favorite button position: `spacing[4/2]`

- **Effects:**
  - Background gradient: 113.68° angle with theme colors
  - Blur circles: radial-gradient decorative effects
  - Border: inset shadow with 2px/1px width
  - Border radius: 24px (big/medium) / 12px (small)
  - Trending number: gradient from theme[600] to theme[950]

---

## Design System Integration

All components are built using the Avenue Design System tokens, ensuring:

- ✅ Consistent spacing and sizing
- ✅ Type-safe props with TypeScript
- ✅ Accessible markup
- ✅ Responsive design support
- ✅ Theme-able with category colors
- ✅ Performance optimized

### 6. Topbar

A versatile navigation header with glassmorphic styling. Built to match Figma exactly with **9 distinct variants**.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'Web' \| 'App'` | `'Web'` | Context type (Web or App) |
| `size` | `'Big' \| 'Small'` | `'Big'` | Size variant (desktop or mobile) |
| `state` | `TopbarState` | `'Default'` | Current UI state (see below) |
| `logo` | `ReactNode` | `'Avenue'` | Logo content or element |
| `location` | `string` | `'New York'` | Location text |
| `onLocationClick` | `() => void` | - | Location click handler |
| `navLinks` | `NavLink[]` | `[...]` | Navigation links array |
| `onSignUp` | `() => void` | - | Sign up button handler |
| `onMenuToggle` | `() => void` | - | Menu toggle handler |
| `onBackClick` | `() => void` | - | Back button handler |
| `actionButtons` | `ReactNode` | - | Custom action buttons for app states |

**All 9 Figma Variants:**

*Web, Big (Desktop):*
1. `type="Web"` `size="Big"` `state="Default"` - Primary Sign Up button
2. `type="Web"` `size="Big"` `state="Neutral"` - Neutral Sign Up button
3. `type="Web"` `size="Big"` `state="Signed In"` - Profile link added

*Web, Small (Mobile Web):*
4. `type="Web"` `size="Small"` `state="Default"` - Collapsed menu
5. `type="Web"` `size="Small"` `state="Expanded"` - Open menu overlay

*App, Small (Mobile App):*
6. `type="App"` `size="Small"` `state="Default"` - Home with location
7. `type="App"` `size="Small"` `state="Event"` - Event detail + actions
8. `type="App"` `size="Small"` `state="Organiser"` - Organiser + actions
9. `type="App"` `size="Small"` `state="Checkout"` - Back button only

**Usage:**

```tsx
import { Topbar } from '@avenue/design-system/components';

// Variant 1: Web, Big, Default
<Topbar
  type="Web"
  size="Big"
  state="Default"
  logo="Avenue Ticket"
  location="New York"
  onLocationClick={() => handleLocationSelect()}
  navLinks={[
    { label: 'Find Events', onClick: () => navigate('/events') },
    { label: 'Create Event', onClick: () => navigate('/create') },
    { label: 'My Events', onClick: () => navigate('/my-events') },
  ]}
  onSignUp={() => navigate('/signup')}
/>

// Variant 3: Web, Big, Signed In
<Topbar
  type="Web"
  size="Big"
  state="Signed In"
  logo="Avenue Ticket"
  location="New York"
  navLinks={[
    { label: 'Find Events', onClick: () => navigate('/events') },
    { label: 'Create Event', onClick: () => navigate('/create') },
    { label: 'My Events', onClick: () => navigate('/my-events') },
    { label: 'Profile', onClick: () => navigate('/profile') },
  ]}
/>

// Variant 5: Web, Small, Expanded
<Topbar
  type="Web"
  size="Small"
  state="Expanded"
  logo={<img src="/logo.png" alt="Avenue" />}
  navLinks={[
    { label: 'Find Events', onClick: () => {} },
    { label: 'Create Event', onClick: () => {} },
    { label: 'My Events', onClick: () => {} },
    { label: 'Profile', onClick: () => {} },
  ]}
/>

// Variant 7: App, Small, Event
<Topbar
  type="App"
  size="Small"
  state="Event"
  onBackClick={() => router.back()}
  actionButtons={
    <>
      <IconButton><ShareIcon /></IconButton>
      <IconButton><HeartIcon /></IconButton>
    </>
  }
/>

// Variant 9: App, Small, Checkout
<Topbar
  type="App"
  size="Small"
  state="Checkout"
  onBackClick={() => router.back()}
/>
```

**Design Tokens Used:**
- Background: `neutral.dark.alpha[10]` (default), `neutral.dark.alpha[75]` (expanded)
- Text: `neutral.light.alpha[90]` (links), `neutral[50]` (buttons)
- Primary button: `primary.alpha[5-10]` with gradients
- Neutral button: `neutral.light.alpha[5-10]` with gradients
- Effects: backdrop-filter blur(20px), radial gradient dividers
- Typography: Desktop Body Medium 300, Desktop Button 300, Mobile Body Regular 100

## Development

```bash
# Type check components
npm run typecheck

# Lint components
npm run lint
```

