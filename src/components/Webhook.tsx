import React from 'react';

export interface WebhookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Webhook: React.FC<WebhookProps> = ({ 
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
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 16.5c0 2.5-2 4.5-4.5 4.5S9 19 9 16.5s2-4.5 4.5-4.5M14.5 3C17 3 19 5 19 7.5S17 12 14.5 12M3 7.5C3 5 5 3 7.5 3S12 5 12 7.5"/><circle cx="7.5" cy="7.5" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="14.5" cy="7.5" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="13.5" cy="16.5" r="2" stroke="currentColor" stroke-width="1.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 9.5 11 11m3.5-1.5L13 11m-1.5 3.5L13 13"/>
  </svg>
);

Webhook.displayName = 'Webhook';
