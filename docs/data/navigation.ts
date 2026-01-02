/**
 * Documentation Site Navigation Structure
 * Categories and pages are alphabetically sorted as per doc-site-command rules
 */

export interface NavItem {
  title: string;
  href: string;
}

export interface NavCategory {
  title: string;
  items: NavItem[];
}

export const navigation: NavCategory[] = [
  {
    title: 'Foundations',
    items: [
      { title: 'Colors', href: '/foundations/colors' },
      { title: 'Spacing', href: '/foundations/spacing' },
      { title: 'Typography', href: '/foundations/typography' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Add Item', href: '/components/add-item' },
      { title: 'App Nav Bar', href: '/components/app-nav-bar' },
      { title: 'Artist Card', href: '/components/artist-card' },
      { title: 'Button Highlighted', href: '/components/button-highlighted' },
      { title: 'Button Primary', href: '/components/button-primary' },
      { title: 'Category Card', href: '/components/category-card' },
      { title: 'Event Card', href: '/components/event-card' },
      { title: 'Logo', href: '/components/logo' },
      { title: 'Topbar', href: '/components/topbar' },
    ],
  },
];
