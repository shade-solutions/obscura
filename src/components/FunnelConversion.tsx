import React from 'react';

export interface FunnelConversionProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const FunnelConversion: React.FC<FunnelConversionProps> = ({ 
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
    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h16l-2 4H6zM6 8h12l-2 4H8zM8 12h8l-2 4h-4zM10 16h4l-1 2h-2z"/><circle cx="12" cy="20" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 6v2m0 2v2m0 2v2"/><text x="20" y="6" fill="currentColor" font-size="3">100%</text><text x="20" y="10" fill="currentColor" font-size="3">75%</text><text x="20" y="14" fill="currentColor" font-size="3">50%</text><text x="20" y="18" fill="currentColor" font-size="3">25%</text>
  </svg>
);

FunnelConversion.displayName = 'FunnelConversion';
