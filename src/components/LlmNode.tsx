import React from 'react';

export interface LlmNodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const LlmNode: React.FC<LlmNodeProps> = ({ 
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
    <rect width="18" height="12" x="3" y="6" stroke="currentColor" stroke-width="2" rx="3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 10h10M7 12h8m-8 2h6"/><circle cx="6" cy="3" r="1" fill="currentColor"/><circle cx="12" cy="3" r="1" fill="currentColor"/><circle cx="18" cy="3" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" d="M6 4v1m6-1v1m6-1v1"/><circle cx="6" cy="21" r="1" fill="currentColor"/><circle cx="12" cy="21" r="1" fill="currentColor"/><circle cx="18" cy="21" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" d="M6 19v1m6-1v1m6-1v1"/>
  </svg>
);

LlmNode.displayName = 'LlmNode';
