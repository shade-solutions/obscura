import React from 'react';

export interface AgentFlowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const AgentFlow: React.FC<AgentFlowProps> = ({ 
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
    <circle cx="5" cy="12" r="3" stroke="currentColor" stroke-width="2"/><circle cx="19" cy="12" r="3" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="6" r="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="18" r="2" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 12h8m-4-4v2m0 4v2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7 10 3-2m-3 6 3 2m7-6-3-2m3 6-3 2"/><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="6" r=".5" fill="currentColor"/><circle cx="12" cy="18" r=".5" fill="currentColor"/>
  </svg>
);

AgentFlow.displayName = 'AgentFlow';
