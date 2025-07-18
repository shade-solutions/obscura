# 🕵️‍♂️ Obscura Icons

<div align="center">

**The React icon library for unique, rare, and niche icons that other libraries miss**

[![NPM Version](https://img.shields.io/npm/v/obscura-icons?color=blue&logo=npm)](https://www.npmjs.com/package/obscura-icons)
[![NPM Downloads](https://img.shields.io/npm/dm/obscura-icons?color=green)](https://www.npmjs.com/package/obscura-icons)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/obscura-icons?color=orange)](https://bundlephobia.com/package/obscura-icons)
[![GitHub Stars](https://img.shields.io/github/stars/shade-solutions/obscura?style=social)](https://github.com/shade-solutions/obscura)

[**🌐 Explore Icons**](https://shade-solutions.github.io/obscura) • [**📦 NPM Package**](https://www.npmjs.com/package/obscura-icons) • [**💻 GitHub**](https://github.com/shade-solutions/obscura)

</div>

---

## ✨ Why Obscura?

> **Obscura doesn't try to replace Lucide or Heroicons — it completes them.**

While general icon libraries cover common needs, **Obscura focuses on the gaps**: AI workflows, SaaS dashboards, developer tools, and modern app features that are missing everywhere else.

### 🎯 **Perfect for:**
- 🤖 **AI & ML Applications** - LLM nodes, agent flows, prompt engines
- 📈 **SaaS Dashboards** - MRR charts, churn rates, feature flags
- ⚙️ **Developer Tools** - API gateways, webhooks, JWT tokens
- 🧩 **Modern UI Patterns** - Beta badges, config files, memory banks

---

## 🚀 Quick Start

```bash
npm install obscura-icons
```

```tsx
import { AiBrain, FeatureFlag, MrrChart, CliTerminal } from 'obscura-icons';

function Dashboard() {
  return (
    <div className="flex gap-4">
      <AiBrain size={32} color="#3B82F6" />
      <FeatureFlag size={24} />
      <MrrChart size={28} color="#10B981" />
      <CliTerminal size={20} />
    </div>
  );
}
```

---

## 📚 Icon Categories

<table>
<tr>
<td width="25%">

### 🤖 AI & Automation
- `AiBrain` - Neural networks
- `LlmNode` - Language models  
- `AgentFlow` - AI workflows
- `PromptEngine` - Prompt systems
- `ToolCall` - Function calling
- `MemoryBank` - Context storage
- `TokenGrid` - Token visualization
- `AiAssistant` - AI chat bots

</td>
<td width="25%">

### 📈 SaaS & Analytics  
- `MrrChart` - Revenue tracking
- `ChurnRate` - Customer analytics
- `GrowthArrow` - Growth metrics
- `FunnelConversion` - Sales funnels
- `FeatureFlag` - Feature toggles
- `Roadmap` - Project planning
- `BetaBadge` - Beta indicators

</td>
<td width="25%">

### ⚙️ Developer Tools
- `ApiGateway` - API management
- `CliTerminal` - Command line
- `JwtToken` - Authentication
- `ConfigFile` - Configuration
- `Webhook` - API integrations
- `WorkflowBranch` - Process flows

</td>
<td width="25%">

### 🧩 UI Widgets
- `ChatWidget` - Live chat
- *More coming soon...*

</td>
</tr>
</table>

---

## 🎨 Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 📦 **Tree Shakable** | Import only what you need |
| 🎯 **TypeScript** | Full type definitions included |
| ⚡ **Lightweight** | Optimized SVGs, ~7.7kB total |
| 🎨 **Customizable** | Size, color, and all SVG props |
| 🔄 **Consistent** | Same API as popular icon libraries |
| 🌙 **Theme Ready** | Works with dark/light modes |

</div>

---

## 🌐 Icon Explorer

**[🔍 Browse all 22 icons →](https://shade-solutions.github.io/obscura)**

Our interactive website lets you:
- 🔍 **Search & filter** icons by category
- 📋 **Click to copy** JSX or SVG code
- 🌙 **Toggle dark/light** mode
- 📱 **Responsive design** for all devices

---

## 📖 Usage Examples

### Basic Usage
```tsx
import { AiBrain } from 'obscura-icons';

<AiBrain size={24} color="currentColor" />
```

### With Custom Props
```tsx
<FeatureFlag 
  size={32} 
  color="#10B981"
  className="hover:scale-110 transition-transform"
  onClick={() => toggleFeature()}
/>
```

### TypeScript Support
```tsx
import { MrrChart, type MrrChartProps } from 'obscura-icons';

const IconWrapper: React.FC<{ iconProps: MrrChartProps }> = ({ iconProps }) => {
  return <MrrChart {...iconProps} />;
};
```

### Styling with CSS
```css
.icon-container {
  color: #3B82F6; /* Icons inherit this color */
}

.icon-hover:hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}
```

---

## 🛠️ Adding New Icons

Contributing new icons is super simple:

1. **Add SVG** to `icons/` directory using `kebab-case.svg`
2. **Run build** with `npm run build`  
3. **Icon auto-generated** as React component

```bash
# Example: adding a new icon
echo '<svg>...</svg>' > icons/my-new-icon.svg
npm run build
# Now available as <MyNewIcon />
```

**Naming Convention:** `kebab-case.svg` → `PascalCase` component
- `ai-brain.svg` → `<AiBrain />`
- `feature-flag.svg` → `<FeatureFlag />`

---

## 🎯 Roadmap

- [x] **22 Core Icons** - Essential AI, SaaS, and dev tools
- [x] **GitHub Pages Website** - Interactive icon explorer  
- [x] **NPM Package** - Production-ready library
- [ ] **50+ Icons** - Expand to cover more use cases
- [ ] **VS Code Extension** - Autocomplete and snippets
- [ ] **Figma Plugin** - Design system integration
- [ ] **Animated Variants** - Micro-interactions
- [ ] **Icon Requests** - Community-driven additions

---

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution
1. Fork the repository
2. Add your SVG to `icons/` directory
3. Run `npm run build` to generate components
4. Submit a Pull Request

### Icon Guidelines
- Use `viewBox="0 0 24 24"` for consistency
- Use `stroke="currentColor"` for theming
- Keep designs minimal and recognizable
- Focus on unique icons not found elsewhere

---

## 📄 License

**MIT License** - Free for personal and commercial use.

---

<div align="center">

**Made with ❤️ by [Shaswat Raj](https://sh20raj.github.io/) at [Shade Solutions](https://github.com/shade-solutions)**

[⭐ Star on GitHub](https://github.com/shade-solutions/obscura) • [🐦 Follow Updates](https://twitter.com/sh20raj) • [💬 Join Discussion](https://github.com/shade-solutions/obscura/discussions)

</div>