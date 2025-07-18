import React from 'react';

export interface ConfigFileProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ConfigFile: React.FC<ConfigFileProps> = ({ 
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
    <path stroke="currentColor" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2v6h6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 12h8m-8 2h6m-6 2h4"/><circle cx="7" cy="12" r="1" fill="currentColor"/><circle cx="7" cy="14" r="1" fill="currentColor"/><circle cx="7" cy="16" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 18 2-2-2-2"/>
  </svg>
);

ConfigFile.displayName = 'ConfigFile';
