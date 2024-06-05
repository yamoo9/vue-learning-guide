import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';

export default defineConfig({
  appType: 'spa',
  plugins: [vue()],
  base: '/',
  server: {
    host: 'localhost',
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          gsap: ['gsap'],
        },
      },
    },
  },
});
