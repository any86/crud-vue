import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'v-curd',
      // the proper extensions will be added
      fileName: 'v-curd'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue','lodash','xlsx','be-full','ant-design-vue','@ant-design/icons-vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@c": resolve(__dirname, "./src/components"),
    },
  },
})
