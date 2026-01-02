import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/Avenue-Design-System/' : '/',
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@tokens': path.resolve(__dirname, './tokens'),
      '@components': path.resolve(__dirname, './components'),
      '@docs': path.resolve(__dirname, './docs'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});

