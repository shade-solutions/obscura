# Obscura Icons Website

This is the icon explorer website for Obscura Icons library.

## Deployment

### GitHub Pages
1. Push the `website/` folder to the `gh-pages` branch
2. Enable GitHub Pages in repository settings

### Vercel/Netlify
1. Connect your GitHub repository
2. Set build directory to `website/`
3. Deploy

### Manual Deployment
Simply upload the contents of the `website/` folder to any static hosting service.

## Local Development

```bash
# Serve locally (requires Python)
cd website
python -m http.server 8000

# Or with Node.js
npx serve .
```

Visit `http://localhost:8000` to view the site.

## Features

- 📱 Responsive design
- 🌙 Dark mode support
- 📋 Click to copy icon code
- 🔍 Icon categories and descriptions
- ⚡ Fast loading with minimal dependencies