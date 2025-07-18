# Obscura Usage Examples

## Installation

```bash
npm install obscura
# or
pnpm add obscura
# or
yarn add obscura
```

## Basic Usage

```tsx
import React from 'react';
import { AiBrain, LlmNode, FeatureFlag, MrrChart } from 'obscura';

function App() {
  return (
    <div>
      {/* AI Icons */}
      <AiBrain size={32} color="#3B82F6" />
      <LlmNode size={24} />
      
      {/* SaaS Icons */}
      <FeatureFlag size={20} color="#10B981" />
      <MrrChart size={28} color="#F59E0B" />
      
      {/* With custom props */}
      <AiBrain 
        size={40} 
        color="#8B5CF6" 
        className="my-icon"
        onClick={() => console.log('AI Brain clicked!')}
      />
    </div>
  );
}

export default App;
```

## Available Icons

### 🤖 AI & Automation
- `<AiBrain />` - Neural network style brain icon
- `<LlmNode />` - Large language model block
- `<AiAssistant />` - Friendly AI bot with chat bubbles

### 📈 SaaS & Analytics
- `<MrrChart />` - Monthly Recurring Revenue chart
- `<FeatureFlag />` - Feature toggle icon

### ⚙️ Developer Tools
- `<ApiGateway />` - API endpoints icon
- `<ChatWidget />` - Live chat widget
- `<WorkflowBranch />` - Workflow branching
- `<TokenGrid />` - Token visualization grid

## Props

All icons accept the following props:

```tsx
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;  // Default: 24
  color?: string;          // Default: 'currentColor'
  className?: string;
  onClick?: () => void;
  // ... any other SVG props
}
```

## Styling

Icons inherit the current text color by default:

```css
.my-container {
  color: #3B82F6; /* Icons will be blue */
}

.custom-icon {
  color: #EF4444; /* This specific icon will be red */
}
```

## TypeScript Support

Obscura is built with TypeScript and includes full type definitions:

```tsx
import { AiBrain, type AiBrainProps } from 'obscura';

const MyComponent: React.FC<{ iconProps: AiBrainProps }> = ({ iconProps }) => {
  return <AiBrain {...iconProps} />;
};
```