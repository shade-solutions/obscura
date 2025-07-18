import React from 'react';

export interface FeatureFlagProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const FeatureFlag: React.FC<FeatureFlagProps> = ({ 
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
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 2v20"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 6h12l-2 3 2 3H4"/><circle cx="18" cy="9" r="2" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.5 7.5 3 3m0-3-3 3"/><circle cx="7" cy="9" r="1" fill="currentColor"/><circle cx="10" cy="9" r="1" fill="currentColor"/>
  </svg>
);

FeatureFlag.displayName = 'FeatureFlag';
