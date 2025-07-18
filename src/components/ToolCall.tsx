import React from 'react';

export interface ToolCallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ToolCall: React.FC<ToolCallProps> = ({ 
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
    <rect width="18" height="12" x="3" y="4" stroke="currentColor" stroke-width="2" rx="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 8h4m-4 2h6m-6 2h3"/><circle cx="16" cy="10" r="2" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 8 2 2-2 2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 18 4 2 4-2 4 2 4-2"/><circle cx="16" cy="10" r=".5" fill="currentColor"/>
  </svg>
);

ToolCall.displayName = 'ToolCall';
