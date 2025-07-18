import React from 'react';

export interface ChatWidgetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ 
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
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/><circle cx="20" cy="4" r="3" fill="currentColor"/><path stroke="#fff" stroke-linecap="round" d="M19 3v2m-1-1h2"/>
  </svg>
);

ChatWidget.displayName = 'ChatWidget';
