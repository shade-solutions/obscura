import React from 'react';

export interface MemoryBankProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MemoryBank: React.FC<MemoryBankProps> = ({ 
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
    <rect width="16" height="18" x="4" y="3" stroke="currentColor" stroke-width="2" rx="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 7h8M8 9h6m-6 2h8m-8 2h5m-5 2h7m-7 2h4"/><circle cx="18" cy="6" r="2" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.5 4.5 3 3"/><rect width="2" height="8" x="2" y="8" stroke="currentColor" stroke-width="1.5" rx="1"/><rect width="2" height="8" x="20" y="8" stroke="currentColor" stroke-width="1.5" rx="1"/><circle cx="18" cy="6" r=".5" fill="currentColor"/>
  </svg>
);

MemoryBank.displayName = 'MemoryBank';
