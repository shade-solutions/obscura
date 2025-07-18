import React from 'react';

export interface AiAssistantProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ 
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
    <circle cx="12" cy="8" r="5" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="7" r="1" fill="currentColor"/><circle cx="14" cy="7" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 9.5c.5.5 1.5.5 2 0s1.5-.5 2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 13c0 2.8 2.2 5 5 5s5-2.2 5-5M5 16l2-1m12 1-2-1"/><ellipse cx="4" cy="19" stroke="currentColor" stroke-width="1.5" rx="2" ry="1"/><ellipse cx="20" cy="19" stroke="currentColor" stroke-width="1.5" rx="2" ry="1"/><path stroke="currentColor" stroke-linecap="round" d="M4 19c0-.5.5-1 1-1h1m14 1c0-.5-.5-1-1-1h-1"/>
  </svg>
);

AiAssistant.displayName = 'AiAssistant';
