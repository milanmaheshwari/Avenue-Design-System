/**
 * Spacing Design Tokens
 * 8px-based spacing scale for consistent layout and spacing
 */

export const spacing = {
  0: '0px',
  1: '4px',    // 0.25rem
  2: '8px',    // 0.5rem
  3: '12px',   // 0.75rem
  4: '16px',   // 1rem
  5: '20px',   // 1.25rem
  6: '24px',   // 1.5rem
  7: '28px',   // 1.75rem
  8: '32px',   // 2rem
  9: '36px',   // 2.25rem
  10: '40px',  // 2.5rem
  11: '44px',  // 2.75rem
  12: '48px',  // 3rem
  14: '56px',  // 3.5rem
  16: '64px',  // 4rem
  20: '80px',  // 5rem
  24: '96px',  // 6rem
  28: '112px', // 7rem
  32: '128px', // 8rem
  36: '144px', // 9rem
  40: '160px', // 10rem
  44: '176px', // 11rem
  48: '192px', // 12rem
  52: '208px', // 13rem
  56: '224px', // 14rem
  60: '240px', // 15rem
  64: '256px', // 16rem
  72: '288px', // 18rem
  80: '320px', // 20rem
  96: '384px', // 24rem
} as const;

// Semantic spacing aliases for common use cases
export const spacingSemantic = {
  xs: spacing[1],      // 4px - Extra small spacing
  sm: spacing[2],      // 8px - Small spacing
  md: spacing[4],      // 16px - Medium spacing
  lg: spacing[6],      // 24px - Large spacing
  xl: spacing[8],      // 32px - Extra large spacing
  '2xl': spacing[12],  // 48px - 2x Extra large
  '3xl': spacing[16],  // 64px - 3x Extra large
  '4xl': spacing[24],  // 96px - 4x Extra large
  '5xl': spacing[32],  // 128px - 5x Extra large
} as const;

export type Spacing = typeof spacing;
export type SpacingSemantic = typeof spacingSemantic;

