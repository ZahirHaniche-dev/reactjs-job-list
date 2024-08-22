import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reactjs-job-list/',
  build: {
    outDir: 'dist',
  },
});
