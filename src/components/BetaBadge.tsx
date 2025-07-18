import React from 'react';

export interface BetaBadgeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const BetaBadge: React.FC<BetaBadgeProps> = ({ 
  size = 24, 
  color = 'currentColor',
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="18" height="12" x="3" y="6" stroke="currentColor" stroke-width="2" rx="3"/><path stroke="currentColor" stroke-width="1.5" d="M8 10h2a2 2 0 0 1 0 4H8zM8 12h2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 10v4m0-4h2a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-2m0 0h2a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-2"/><circle cx="20" cy="4" r="3" fill="currentColor"/><path stroke="#fff" stroke-linecap="round" d="M19 3v2m-1-1h2"/>
  </svg>
);

BetaBadge.displayName = 'BetaBadge';
