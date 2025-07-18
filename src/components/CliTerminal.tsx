import React from 'react';

export interface CliTerminalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const CliTerminal: React.FC<CliTerminalProps> = ({ 
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
    <rect width="20" height="16" x="2" y="4" stroke="currentColor" stroke-width="2" rx="2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8 4 3-4 3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 14h6"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="12" cy="6" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" d="M2 8h20"/>
  </svg>
);

CliTerminal.displayName = 'CliTerminal';
