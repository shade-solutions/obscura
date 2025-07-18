# 🌐 GitHub Pages Setup Guide

## Quick Setup Steps

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. Click **Save**

### 2. Trigger Deployment
```bash
# Push any change to trigger deployment
git add .
git commit -m "trigger pages deployment"
git push origin main
```

### 3. Check Deployment
- Go to **Actions** tab in your repository
- Look for "Deploy Website to GitHub Pages" workflow
- Once green ✅, your site will be live at:
  **https://shade-solutions.github.io/obscura**

## Alternative: Manual Deployment

If GitHub Actions don't work, you can deploy manually:

```bash
# 1. Create gh-pages branch
git checkout --orphan gh-pages

# 2. Remove all files
git rm -rf .

# 3. Copy website files
cp -r website/* .
cp website/.* . 2>/dev/null || true

# 4. Commit and push
git add .
git commit -m "Deploy website"
git push origin gh-pages

# 5. Go back to main
git checkout main
```

Then in GitHub Settings > Pages, select:
- **Source**: Deploy from a branch
- **Branch**: gh-pages
- **Folder**: / (root)

## Troubleshooting

### If deployment fails:
1. Check that Pages is enabled in repository settings
2. Ensure repository is public (or you have GitHub Pro)
3. Verify the workflow has proper permissions
4. Try the manual deployment method above

### Common Issues:
- **"Not Found" error**: Repository might be private
- **Permission denied**: Enable Pages in settings first
- **Workflow fails**: Check Actions tab for detailed logs

## Success Indicators

✅ **GitHub Actions**: Green checkmark in Actions tab
✅ **Pages Settings**: Shows "Your site is live at..."
✅ **Website**: Loads at https://shade-solutions.github.io/obscura

---

Need help? Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or open an issue!