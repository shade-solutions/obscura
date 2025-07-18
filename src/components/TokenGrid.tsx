import React from 'react';

export interface TokenGridProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const TokenGrid: React.FC<TokenGridProps> = ({ 
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
    <rect width="4" height="4" x="2" y="2" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="8" y="2" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="14" y="2" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="2" height="4" x="20" y="2" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="2" y="8" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="8" y="8" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="14" y="8" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="2" height="4" x="20" y="8" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="2" y="14" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="8" y="14" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="4" x="14" y="14" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="2" height="4" x="20" y="14" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="2" x="2" y="20" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="2" x="8" y="20" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="4" height="2" x="14" y="20" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="2" height="2" x="20" y="20" stroke="currentColor" stroke-width="1.5" rx="1"/>
  </svg>
);

TokenGrid.displayName = 'TokenGrid';
