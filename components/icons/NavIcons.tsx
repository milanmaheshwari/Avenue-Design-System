/**
 * Navigation Icon Components
 * Inline SVG icons with full color control
 */

import React from 'react';
import { colors } from '../../tokens';

interface IconProps {
  /** Background gradient start color */
  bgStart?: string;
  /** Background gradient end color */
  bgEnd?: string;
  /** Background gradient start opacity */
  bgStartOpacity?: number;
  /** Background gradient end opacity */
  bgEndOpacity?: number;
  /** Border stroke color */
  borderStroke?: string;
  /** Icon path stroke color */
  iconStroke?: string;
  /** Border opacity */
  borderOpacity?: number;
  /** Icon stroke opacity */
  iconOpacity?: number;
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({
  bgStart = colors.neutral[50],
  bgEnd = colors.neutral[50],
  bgStartOpacity = 0.1,
  bgEndOpacity = 0.05,
  borderStroke = colors.neutral[50],
  iconStroke = colors.neutral[50],
  borderOpacity = 0.05,
  iconOpacity = 0.5,
  className
}) => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="32" height="32" rx="8" fill="url(#home-gradient)" />
    <rect 
      x="0.5" 
      y="0.5" 
      width="31" 
      height="31" 
      rx="7.5" 
      stroke={borderStroke}
      strokeOpacity={borderOpacity}
    />
    <path 
      d="M18 22V16.9479C18 16.7804 17.9298 16.6198 17.8047 16.5013C17.6797 16.3829 17.5101 16.3164 17.3333 16.3164H14.6667C14.4899 16.3164 14.3203 16.3829 14.1953 16.5013C14.0702 16.6198 14 16.7804 14 16.9479V22M10 15.0524C9.99995 14.8687 10.0422 14.6872 10.1239 14.5205C10.2055 14.3538 10.3245 14.2061 10.4727 14.0875L15.1393 10.2984C15.38 10.1057 15.6849 10 16 10C16.3151 10 16.62 10.1057 16.8607 10.2984L21.5273 14.0875C21.6755 14.2061 21.7945 14.3538 21.8761 14.5205C21.9578 14.6872 22 14.8687 22 15.0524V20.736C22 21.071 21.8595 21.3923 21.6095 21.6291C21.3594 21.866 21.0203 21.9991 20.6667 21.9991H11.3333C10.9797 21.9991 10.6406 21.866 10.3905 21.6291C10.1405 21.3923 10 21.071 10 20.736V15.0524Z" 
      stroke={iconStroke}
      strokeOpacity={iconOpacity}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="home-gradient" x1="5.2" y1="-2.4" x2="18.8" y2="37.2" gradientUnits="userSpaceOnUse">
        <stop stopColor={bgStart} stopOpacity={bgStartOpacity} />
        <stop offset="1" stopColor={bgEnd} stopOpacity={bgEndOpacity} />
      </linearGradient>
    </defs>
  </svg>
);

export const EventsIcon: React.FC<IconProps> = ({
  bgStart = colors.neutral[50],
  bgEnd = colors.neutral[50],
  bgStartOpacity = 0.1,
  bgEndOpacity = 0.05,
  borderStroke = colors.neutral[50],
  iconStroke = colors.neutral[50],
  borderOpacity = 0.05,
  iconOpacity = 0.5,
  className
}) => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="32" height="32" rx="8" fill="url(#events-gradient)" />
    <rect 
      x="0.5" 
      y="0.5" 
      width="31" 
      height="31" 
      rx="7.5" 
      stroke={borderStroke}
      strokeOpacity={borderOpacity}
    />
    <path 
      d="M22 22L19.1067 19.1067M20.6667 15.3333C20.6667 18.2789 18.2788 20.6667 15.3333 20.6667C12.3878 20.6667 10 18.2789 10 15.3333C10 12.3878 12.3878 10 15.3333 10C18.2788 10 20.6667 12.3878 20.6667 15.3333Z" 
      stroke={iconStroke}
      strokeOpacity={iconOpacity}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="events-gradient" x1="5.2" y1="-2.4" x2="18.8" y2="37.2" gradientUnits="userSpaceOnUse">
        <stop stopColor={bgStart} stopOpacity={bgStartOpacity} />
        <stop offset="1" stopColor={bgEnd} stopOpacity={bgEndOpacity} />
      </linearGradient>
    </defs>
  </svg>
);

export const TicketsIcon: React.FC<IconProps> = ({
  bgStart = colors.neutral[50],
  bgEnd = colors.neutral[50],
  bgStartOpacity = 0.1,
  bgEndOpacity = 0.05,
  borderStroke = colors.neutral[50],
  iconStroke = colors.neutral[50],
  borderOpacity = 0.05,
  iconOpacity = 0.5,
  className
}) => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="32" height="32" rx="8" fill="url(#tickets-gradient)" />
    <rect 
      x="0.5" 
      y="0.5" 
      width="31" 
      height="31" 
      rx="7.5" 
      stroke={borderStroke}
      strokeOpacity={borderOpacity}
    />
    <path 
      d="M16.9286 10V11.7143M16.9286 20.2857V22M16.9286 15.1429V16.8571M7.5 13.4286C8.18199 13.4286 8.83604 13.6995 9.31827 14.1817C9.80051 14.664 10.0714 15.318 10.0714 16C10.0714 16.682 9.80051 17.336 9.31827 17.8183C8.83604 18.3005 8.18199 18.5714 7.5 18.5714V20.2857C7.5 20.7404 7.68061 21.1764 8.0021 21.4979C8.32359 21.8194 8.75963 22 9.21429 22H22.9286C23.3832 22 23.8193 21.8194 24.1408 21.4979C24.4622 21.1764 24.6429 20.7404 24.6429 20.2857V18.5714C23.9609 18.5714 23.3068 18.3005 22.8246 17.8183C22.3423 17.336 22.0714 16.682 22.0714 16C22.0714 15.318 22.3423 14.664 22.8246 14.1817C23.3068 13.6995 23.9609 13.4286 24.6429 13.4286V11.7143C24.6429 11.2596 24.4622 10.8236 24.1408 10.5021C23.8193 10.1806 23.3832 10 22.9286 10H9.21429C8.75963 10 8.32359 10.1806 8.0021 10.5021C7.68061 10.8236 7.5 11.2596 7.5 11.7143V13.4286Z" 
      stroke={iconStroke}
      strokeOpacity={iconOpacity}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="tickets-gradient" x1="5.2" y1="-2.4" x2="18.8" y2="37.2" gradientUnits="userSpaceOnUse">
        <stop stopColor={bgStart} stopOpacity={bgStartOpacity} />
        <stop offset="1" stopColor={bgEnd} stopOpacity={bgEndOpacity} />
      </linearGradient>
    </defs>
  </svg>
);

export const ProfileIcon: React.FC<IconProps> = ({
  bgStart = colors.neutral[50],
  bgEnd = colors.neutral[50],
  bgStartOpacity = 0.1,
  bgEndOpacity = 0.05,
  borderStroke = colors.neutral[50],
  iconStroke = colors.neutral[50],
  borderOpacity = 0.05,
  iconOpacity = 0.5,
  className
}) => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="32" height="32" rx="8" fill="url(#profile-gradient)" />
    <rect 
      x="0.5" 
      y="0.5" 
      width="31" 
      height="31" 
      rx="7.5" 
      stroke={borderStroke}
      strokeOpacity={borderOpacity}
    />
    <path 
      d="M20 22V20.6667C20 19.9594 19.7291 19.2811 19.2468 18.781C18.7646 18.281 18.1106 18 17.4286 18H13.5714C12.8894 18 12.2354 18.281 11.7532 18.781C11.2709 19.2811 11 19.9594 11 20.6667V22M18.0714 12.6667C18.0714 14.1394 16.9202 15.3333 15.5 15.3333C14.0798 15.3333 12.9286 14.1394 12.9286 12.6667C12.9286 11.1939 14.0798 10 15.5 10C16.9202 10 18.0714 11.1939 18.0714 12.6667Z" 
      stroke={iconStroke}
      strokeOpacity={iconOpacity}
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="profile-gradient" x1="5.2" y1="-2.4" x2="18.8" y2="37.2" gradientUnits="userSpaceOnUse">
        <stop stopColor={bgStart} stopOpacity={bgStartOpacity} />
        <stop offset="1" stopColor={bgEnd} stopOpacity={bgEndOpacity} />
      </linearGradient>
    </defs>
  </svg>
);

