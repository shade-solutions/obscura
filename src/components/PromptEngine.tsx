import React from 'react';

export interface PromptEngineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const PromptEngine: React.FC<PromptEngineProps> = ({ 
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
    <rect width="20" height="16" x="2" y="4" stroke="currentColor" stroke-width="2" rx="3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 8h12M6 10h10M6 12h8"/><circle cx="18" cy="16" r="2" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.5 14.5 3 3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m2 8 4-4m16 4-4-4"/><circle cx="6" cy="4" r="1" fill="currentColor"/><circle cx="18" cy="4" r="1" fill="currentColor"/>
  </svg>
);

PromptEngine.displayName = 'PromptEngine';
