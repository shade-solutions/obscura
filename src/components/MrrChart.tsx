import React from 'react';

export interface MrrChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const MrrChart: React.FC<MrrChartProps> = ({ 
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
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 20h18M3 20V4M7 16v-4m4 4V8m4 8v-6m4 6V6"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 12 4-4 4 2 4-4"/><circle cx="6" cy="12" r="1.5" fill="currentColor"/><circle cx="10" cy="8" r="1.5" fill="currentColor"/><circle cx="14" cy="10" r="1.5" fill="currentColor"/><circle cx="18" cy="6" r="1.5" fill="currentColor"/><text x="2" y="24" fill="currentColor" font-size="3">$</text>
  </svg>
);

MrrChart.displayName = 'MrrChart';
