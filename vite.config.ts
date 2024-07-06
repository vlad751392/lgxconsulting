import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // For handling TypeScript path aliases
    svgr(), // For handling SVG files as React components
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
