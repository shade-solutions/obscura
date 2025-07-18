import React from 'react';

export interface GrowthArrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const GrowthArrow: React.FC<GrowthArrowProps> = ({ 
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
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 20 21 4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h6v6M7 16l4-4 4 2 4-4"/><circle cx="7" cy="16" r="1.5" fill="currentColor"/><circle cx="11" cy="12" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><circle cx="19" cy="10" r="1.5" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" d="m5 18 2-2m2-2 2-2m2 4 2-2m2-2 2-2"/>
  </svg>
);

GrowthArrow.displayName = 'GrowthArrow';
