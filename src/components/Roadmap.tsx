import React from 'react';

export interface RoadmapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Roadmap: React.FC<RoadmapProps> = ({ 
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
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 12h18"/><circle cx="6" cy="12" r="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="12" r="2" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 8V6a2 2 0 0 1 2-2h2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 8V6a2 2 0 0 0-2-2H8M18 8V6a2 2 0 0 1 2-2M6 16v2a2 2 0 0 0 2 2h2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16v2a2 2 0 0 1-2 2H8M18 16v2a2 2 0 0 0 2 2"/><circle cx="6" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="18" cy="12" r="1" fill="currentColor"/>
  </svg>
);

Roadmap.displayName = 'Roadmap';
