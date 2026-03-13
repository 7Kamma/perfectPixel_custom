
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/perfectPixel_custom/', // GitHub Pages 项目页面路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
