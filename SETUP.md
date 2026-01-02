# Setup & Preview Guide

## 🚀 Quick Start

Follow these steps to preview the documentation site in your browser.

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React & React DOM
- Styled Components
- Vite (dev server & bundler)
- TypeScript types
- All other dependencies

### 2. Start Development Server

```bash
npm run dev
```

This will:
- Start Vite development server
- Open browser automatically at `http://localhost:3000`
- Enable hot module reloading (changes update instantly)

### 3. View Documentation Site

The browser should open automatically. If not, navigate to:

```
http://localhost:3000
```

You'll see:
- Home page with design system overview
- Sidebar navigation on the left
- Click through Foundations and Components pages

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```
- Starts local development server
- Hot reload enabled
- Opens browser automatically on port 3000

### Build for Production

```bash
npm run build
```
- Creates optimized production build
- Output in `dist/` folder
- Minified and optimized

### Preview Production Build

```bash
npm run preview
```
- Preview the production build locally
- Useful for testing before deployment

### Type Check

```bash
npm run typecheck
```
- Runs TypeScript type checking
- No compilation, just validation

### Lint

```bash
npm run lint
```
- Runs ESLint on all TypeScript/TSX files
- Checks tokens, components, and docs

---

## 🛠️ Development Setup

### Project Structure

```
Avenue Design System/
├── tokens/          # Design tokens (imported by docs)
├── components/      # React components (imported by docs)
├── docs/            # Documentation site
│   ├── pages/       # Documentation pages
│   ├── components/  # Doc site components (Sidebar, etc.)
│   └── layouts/     # Page layouts
└── assets/          # Images and assets
```

### How It Works

1. **Entry Point**: `docs/index.html` loads `docs/index.tsx`
2. **Main App**: `docs/App.tsx` handles routing and rendering
3. **Pages**: Individual page components in `docs/pages/`
4. **Tokens**: All styling uses tokens from `tokens/`
5. **Hot Reload**: Changes auto-update in browser

---

## 🎨 Customization

### Port Configuration

Change the port in `vite.config.ts`:

```typescript
server: {
  port: 3000,  // Change to any port
  open: true,
}
```

### Adding New Pages

1. Create page in `docs/pages/`
2. Add to navigation in `docs/data/navigation.ts`
3. Add route in `docs/App.tsx`
4. Page will appear in sidebar automatically

---

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.ts
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check for type errors
npm run typecheck

# Fix by updating imports or types
```

### Styled Components Not Working

Make sure babel plugin is installed:

```bash
npm install -D babel-plugin-styled-components
```

---

## 📱 Mobile Preview

### Local Network Access

To preview on mobile devices:

1. Start dev server: `npm run dev`
2. Note your local IP (shown in terminal)
3. On mobile, navigate to: `http://YOUR_IP:3000`

Example:
```
http://192.168.1.100:3000
```

### Network Configuration

Add to `vite.config.ts`:

```typescript
server: {
  host: '0.0.0.0',  // Allow network access
  port: 3000,
}
```

---

## 🔥 Hot Module Reloading

Changes to these files will auto-update:

- ✅ All React components (`.tsx`, `.jsx`)
- ✅ All styles and tokens
- ✅ CSS and styled-components
- ✅ Navigation structure

No need to refresh the browser!

---

## 📦 Dependencies Installed

### Runtime
- `react` - UI library
- `react-dom` - React DOM rendering
- `styled-components` - CSS-in-JS styling

### Development
- `vite` - Dev server & bundler (fast!)
- `@vitejs/plugin-react` - React support for Vite
- `typescript` - Type checking
- `babel-plugin-styled-components` - Better styled-components DX
- Type definitions for all libraries

---

## 🎯 Next Steps

After running `npm run dev`:

1. ✅ Browse the documentation site
2. ✅ Click through different pages
3. ✅ Try editing a page and see live updates
4. ✅ Add new pages following the structure
5. ✅ Replace mock component pages with real ones

---

## 💡 Pro Tips

### Fast Refresh

- Edit any component → browser updates instantly
- CSS changes → no page reload needed
- Add console.logs → check browser console

### Debugging

```typescript
// Add to any component
console.log('Component rendered', { props, state });
```

### VS Code Extensions

Recommended extensions:
- **ES7+ React/Redux/React-Native snippets**
- **Styled Components**
- **TypeScript + JavaScript**
- **ESLint**

---

## ✨ That's It!

You're ready to preview and develop the documentation site!

```bash
npm install
npm run dev
```

Open browser → `http://localhost:3000` → Start exploring! 🚀

