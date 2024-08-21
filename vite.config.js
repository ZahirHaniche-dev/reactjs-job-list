import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reactjs-job-list/', // Spécifiez le chemin de base pour GitHub Pages
  build: {
    outDir: 'dist',
  },
});
