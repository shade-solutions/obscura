import React from 'react';

export interface JwtTokenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const JwtToken: React.FC<JwtTokenProps> = ({ 
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
    <rect width="18" height="8" x="3" y="8" stroke="currentColor" stroke-width="2" rx="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 12h10"/><circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17.5 10.5 3 3m0-3-3 3"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 6 4-2 4 2 4-2 4 2v4l-4 2-4-2-4 2-4-2z"/><circle cx="7" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
);

JwtToken.displayName = 'JwtToken';
