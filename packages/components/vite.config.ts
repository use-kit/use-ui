import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    // minify: false,
    lib: {
      entry: 'index.ts',
      name: 'use-ui',
      fileName: 'use-ui'
    },
  },
  plugins: [vue()]
})
