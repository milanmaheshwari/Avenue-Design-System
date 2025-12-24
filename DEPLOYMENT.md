# Deployment Guide - GitHub Pages

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named: `Avenue-Design-System`
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 2: Push to GitHub

Run these commands in your terminal:

```bash
cd "/Users/milanmaheshwari/Desktop/Avenue Design System"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Avenue-Design-System.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. The workflow will automatically trigger and deploy your site

### Step 4: Access Your Site

After the workflow completes (2-3 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/Avenue-Design-System/
```

## 📋 What's Included

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on every push to `main`
- Uses Node.js 20 and npm ci for fast, reliable builds
- Deploys to GitHub Pages with proper permissions

✅ **Vite Configuration** (`vite.config.ts`)
- Configured with correct base path for GitHub Pages
- Supports both local development and production deployment

✅ **Git Configuration**
- `.gitignore` excludes node_modules and build artifacts
- Initial commit with all project files

## 🔄 Continuous Deployment

Every time you push changes to the `main` branch:
1. GitHub Actions automatically triggers
2. Builds your project (`npm run build`)
3. Deploys to GitHub Pages
4. Updates your live site

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

- **Components**: 5 production-ready components
  - AddItem
  - AppNavBar
  - ArtistCard
  - EventCard
  - Topbar

- **Design Tokens**: 400+ tokens
  - Colors (primary, neutral, semantic, category colors with alpha variants)
  - Typography (desktop & mobile variants)
  - Spacing (8px-based scale)

- **Documentation Site**: Complete with
  - Interactive component demos
  - Props documentation
  - Usage guidelines
  - Accessibility notes
  - Developer code examples

## 🎯 Deployment Status

Check deployment status at:
```
https://github.com/YOUR_USERNAME/Avenue-Design-System/actions
```

## 🔧 Troubleshooting

### If deployment fails:
1. Check the Actions tab for error logs
2. Ensure GitHub Pages is enabled in Settings
3. Verify the workflow has proper permissions

### If site shows 404:
1. Wait 2-3 minutes for first deployment
2. Check that base path in `vite.config.ts` matches your repo name
3. Clear browser cache and try again

## 📝 Notes

- First deployment may take 2-3 minutes
- Subsequent deployments are faster (1-2 minutes)
- Site automatically updates on every push to `main`
- No manual deployment needed after initial setup

