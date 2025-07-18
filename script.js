// Icon data - in a real app, this would come from the package
const icons = [
    { name: 'AiBrain', category: 'AI & Automation', description: 'Neural network style brain icon' },
    { name: 'LlmNode', category: 'AI & Automation', description: 'Large language model block' },
    { name: 'AiAssistant', category: 'AI & Automation', description: 'Friendly AI bot with chat bubbles' },
    { name: 'PromptEngine', category: 'AI & Automation', description: 'AI prompt generator/runner' },
    { name: 'AgentFlow', category: 'AI & Automation', description: 'Agentic workflow icon' },
    { name: 'ToolCall', category: 'AI & Automation', description: 'AI tools calling external functions' },
    { name: 'MemoryBank', category: 'AI & Automation', description: 'Persistent memory or context' },
    { name: 'TokenGrid', category: 'AI & Automation', description: 'Token visualization grid' },
    { name: 'FeatureFlag', category: 'SaaS & Analytics', description: 'Feature toggle icon' },
    { name: 'MrrChart', category: 'SaaS & Analytics', description: 'Monthly Recurring Revenue chart' },
    { name: 'ChurnRate', category: 'SaaS & Analytics', description: 'Customer drop-off analytics' },
    { name: 'GrowthArrow', category: 'SaaS & Analytics', description: 'Startup-style growth graph' },
    { name: 'FunnelConversion', category: 'SaaS & Analytics', description: 'Conversion funnel illustration' },
    { name: 'Roadmap', category: 'SaaS & Analytics', description: 'Milestone-style roadmap' },
    { name: 'BetaBadge', category: 'SaaS & Analytics', description: 'Apps in beta/testing phase' },
    { name: 'ApiGateway', category: 'Developer Tools', description: 'API endpoints icon' },
    { name: 'CliTerminal', category: 'Developer Tools', description: 'Dev terminal or CLI icon' },
    { name: 'JwtToken', category: 'Developer Tools', description: 'JWT / auth tokens' },
    { name: 'ConfigFile', category: 'Developer Tools', description: 'Config/JSON/YAML file icon' },
    { name: 'Webhook', category: 'Developer Tools', description: 'Webhooks and triggers' },
    { name: 'WorkflowBranch', category: 'Developer Tools', description: 'Workflow branching' },
    { name: 'ChatWidget', category: 'UI Widgets', description: 'Live chat widget' }
];

// SVG icons as strings (simplified versions for demo)
const iconSvgs = {
    'AiBrain': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 2.8 1.3 3.8-.8.7-1.3 1.7-1.3 2.7 0 2 1.6 3.5 3.5 3.5h3c1.9 0 3.5-1.5 3.5-3.5 0-1-.5-2-1.3-2.7.8-1 1.3-2.3 1.3-3.8 0-3.5-2.5-6-6-6z"/><circle cx="9" cy="7" r="1" fill="currentColor"/><circle cx="15" cy="7" r="1" fill="currentColor"/></svg>`,
    'LlmNode': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M7 10h10M7 12h8M7 14h6" stroke-width="1.5"/></svg>`,
    'AiAssistant': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><circle cx="10" cy="7" r="1" fill="currentColor"/><circle cx="14" cy="7" r="1" fill="currentColor"/></svg>`,
    'PromptEngine': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M6 8h12M6 10h10M6 12h8" stroke-width="1.5"/></svg>`,
    'FeatureFlag': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20"/><path d="M4 6h12l-2 3 2 3H4"/></svg>`,
    'MrrChart': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20h18M3 20V4"/><path d="M7 16V12M11 16V8M15 16V10M19 16V6"/></svg>`,
    'ChurnRate': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20h18M3 20V4"/><path d="M7 8l4 4 4-2 4 6"/></svg>`,
    'Roadmap': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"/><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>`,
    'ApiGateway': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="8" height="16" rx="2"/><path d="M2 8h6M2 12h6M2 16h6M16 8h6M16 12h6M16 16h6"/></svg>`,
    'Webhook': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 16.5c0 2.5-2 4.5-4.5 4.5S9 19 9 16.5s2-4.5 4.5-4.5"/><path d="M14.5 3C17 3 19 5 19 7.5S17 12 14.5 12"/></svg>`,
    'ChatWidget': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    'WorkflowBranch': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/></svg>`,
    'TokenGrid': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="4" height="4" rx="1"/><rect x="8" y="2" width="4" height="4" rx="1"/><rect x="14" y="2" width="4" height="4" rx="1"/></svg>`
};

// Category colors
const categoryColors = {
    'AI & Automation': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'SaaS & Analytics': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Developer Tools': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'UI Widgets': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
};

// Render icons
function renderIcons() {
    const iconGrid = document.getElementById('icon-grid');
    const iconCount = document.getElementById('icon-count');
    
    iconCount.textContent = icons.length;
    
    iconGrid.innerHTML = icons.map(icon => `
        <div class="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
             onclick="copyIconCode('${icon.name}')">
            <div class="flex flex-col items-center text-center space-y-3">
                <div class="w-12 h-12 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    ${iconSvgs[icon.name] || '<div class="w-full h-full bg-gray-200 rounded"></div>'}
                </div>
                <div>
                    <h4 class="font-medium text-gray-900 dark:text-white text-sm">${icon.name}</h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${icon.description}</p>
                    <span class="inline-block mt-2 px-2 py-1 text-xs rounded-full ${categoryColors[icon.category] || 'bg-gray-100 text-gray-800'}">${icon.category}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Copy icon code to clipboard
function copyIconCode(iconName) {
    const code = `import { ${iconName} } from 'obscura-icons';

<${iconName} size={24} />`;
    
    navigator.clipboard.writeText(code).then(() => {
        // Show toast notification
        showToast(`${iconName} code copied to clipboard!`);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(`${iconName} code copied to clipboard!`);
    });
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderIcons();
});