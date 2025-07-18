import React from 'react';

export interface AiBrainProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AiBrain: React.FC<AiBrainProps> = ({ 
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
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 2.8 1.3 3.8-.8.7-1.3 1.7-1.3 2.7 0 2 1.6 3.5 3.5 3.5h3c1.9 0 3.5-1.5 3.5-3.5 0-1-.5-2-1.3-2.7.8-1 1.3-2.3 1.3-3.8 0-3.5-2.5-6-6-6z"/><circle cx="9" cy="7" r="1" fill="currentColor"/><circle cx="15" cy="7" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10h8m-7 2h6m-5 2h4M12 16v2m-2 0h4"/>
  </svg>
);

AiBrain.displayName = 'AiBrain';
