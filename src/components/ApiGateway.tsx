import React from 'react';

export interface ApiGatewayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ApiGateway: React.FC<ApiGatewayProps> = ({ 
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
    <rect width="8" height="16" x="8" y="4" stroke="currentColor" stroke-width="2" rx="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8h4m-4 2h4m-4 2h4m-4 2h4m-4 2h4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 8h6m-6 4h6m-6 4h6M16 8h6m-6 4h6m-6 4h6"/><circle cx="5" cy="8" r="1" fill="currentColor"/><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="5" cy="16" r="1" fill="currentColor"/><circle cx="19" cy="8" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="16" r="1" fill="currentColor"/>
  </svg>
);

ApiGateway.displayName = 'ApiGateway';
