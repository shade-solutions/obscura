import React from 'react';

export interface WorkflowBranchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const WorkflowBranch: React.FC<WorkflowBranchProps> = ({ 
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
    <circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6" r="3" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="18" r="3" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 6h6M6 9v6m12-6v6m-9 3h6"/><path stroke="currentColor" stroke-dasharray="2 2" stroke-linecap="round" stroke-width="2" d="M12 6v12"/><circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

WorkflowBranch.displayName = 'WorkflowBranch';
