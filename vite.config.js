import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@styles": "/src/assets/styles",
      "@images": "/src/assets/images",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@projects": "/src/pages/projects",
      "@home": "/src/pages/home",
      "@auth": "/src/pages/auth",
      "@store": "/src/store"
    }
  },
  server:{
    port: 3000,
    open: true
  },
  preview:{
    port: 8080,
    open: true
  }
});