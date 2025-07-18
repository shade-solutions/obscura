# Contributing to Obscura

Thank you for your interest in contributing to Obscura! We welcome contributions of new icons, bug fixes, and improvements.

## Adding New Icons

### Quick Steps

1. **Add your SVG** to the `icons/` directory using `kebab-case.svg` naming
2. **Run the build** with `npm run build`
3. **Test your icon** by importing it in a React app

### Icon Guidelines

- **Size**: Use `viewBox="0 0 24 24"` for consistency
- **Stroke**: Use `stroke="currentColor"` and `stroke-width="2"` as default
- **Fill**: Use `fill="currentColor"` or `fill="none"`
- **Style**: Keep it minimal, clean, and recognizable at small sizes
- **Uniqueness**: Ensure the icon represents something not found in other libraries

### Naming Convention

- Use `kebab-case.svg` for file names
- Examples:
  - `ai-brain.svg` → `<AIBrain />`
  - `workflow-branch.svg` → `<WorkflowBranch />`
  - `mrr-chart.svg` → `<MRRChart />`

### SVG Requirements

```svg
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Your icon content here -->
  <path d="..." stroke="currentColor" stroke-width="2"/>
</svg>
```

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shade-solutions/obscura.git
   cd obscura
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your icons** to the `icons/` directory

4. **Build the library**
   ```bash
   npm run build
   ```

5. **Test locally**
   ```bash
   npm link
   # In your test project:
   npm link obscura
   ```

## Icon Categories We Need

- 🤖 AI & Automation
- 📈 SaaS & Analytics  
- ⚙️ Developer Tools
- 🎨 Design Systems
- 🌐 Web3 & Crypto
- 🧩 UI Widgets

## Submitting Changes

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b add-new-icons`
3. **Add** your icons and test them
4. **Commit** your changes: `git commit -m "Add AI workflow icons"`
5. **Push** to your fork: `git push origin add-new-icons`
6. **Create** a Pull Request

## Icon Requests

If you need an icon but can't create it yourself:

1. **Open an issue** with the "icon request" label
2. **Describe** what the icon should represent
3. **Provide** examples or references if possible
4. **Explain** the use case and why existing libraries don't have it

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain the library's quality and consistency

## Questions?

- Open an issue for questions
- Check existing issues before creating new ones
- Tag @shaswatraj for urgent matters

Thank you for helping make Obscura the best rare icon library! 🚀