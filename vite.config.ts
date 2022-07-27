import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@c": resolve(__dirname, "./src/components"),
    },
  },
})
