# 🕵️‍♂️ Obscura — The Icons You’ve Been Missing

**NPM:** [Obscura on NPM](https://www.npmjs.com/package/obscura)
**GitHub:** [github.com/shade-solutions/obscura](https://github.com/shade-solutions/obscura)

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fshade-solutions%2Fobscura&countColor=%23263759&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fshade-solutions%2Fobscura)

A minimal React icon library with **unique, rare, and niche icons** that other libraries miss.

> Obscura doesn’t try to replace Lucide — it completes it. We focus on icons for AI, SaaS dashboards, developer workflows, automation, agents, and more.

---

## ✨ Features

* 📦 **Tree-shakable React components**
* 🧠 **AI-first & SaaS-specific icons** (e.g. LLM, workflow, token, conversion rate)
* 🧩 **Unique modern UI/UX needs** (e.g. feature flag, roadmap, mind map)
* 🎨 **Lightweight SVGs** optimized for performance
* 🛠️ **Super easy to add new icons** via `icons/` folder
* 🔍 **Full searchable web viewer** to explore and copy icons
* ⚡ Copy as **JSX** or raw **SVG** like lucide.dev

---

## 🚀 Installation

```bash
npm install obscura
# or
pnpm add obscura
```

---

## 🧪 Usage

```tsx
import { AIAssistant, WorkflowBranch, SaaSChart } from 'obscura';

function App() {
  return (
    <div>
      <AIAssistant />
      <WorkflowBranch />
    </div>
  );
}
```

---

## 📚 Icon Categories

* 🤖 AI / Automation
* 📈 SaaS & Startup Dashboards
* ⚙️ Developer Tooling
* 🎨 Design System Controls
* 📚 EdTech & Productivity
* 🌐 Web3 / Tokens
* 🧩 UI Widgets & Embedded Tools

---

## 🧩 Add Your Icon (Super Simple)

1. Add your SVG to `icons/` directory as `my-icon.svg`
2. Run:

```bash
pnpm build
```

3. Your icon will be auto-converted into a React component

Naming convention: use `kebab-case.svg` → becomes `PascalCase` component

Example: `ai-brain.svg` → `<AIBrain />`

---

## 🌐 Obscura Viewer Website

We’re building a beautiful icon explorer at:
👉 https://obscura-icons.pages.dev

(coming soon)*

Features:

* 🔍 Searchable icon grid
* 📋 Copy as SVG or JSX
* 🌙 Dark/light theme
* ⌨️ Keyboard shortcuts
* 📤 Request & submit new icons

---

## 🛠️ Roadmap

* [x] SVG → React generator
* [x] Simple build system
* [x] Publish to NPM
* [ ] Web UI with copy features
* [ ] Autocomplete VS Code extension
* [ ] Animated SVG support
* [ ] Icon category filtering

---

## 🧑‍💻 Contribute

We welcome PRs with new icons! Just follow the instructions in `CONTRIBUTING.md`.

---

## 📄 License

MIT — Free for personal and commercial use.

---

Made by [Shaswat Raj](https://shaswat.live) at [Shade Solutions](https://github.com/shade-solutions)
# obscura
