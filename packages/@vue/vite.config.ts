import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    // minify: false,
    lib: {
      entry: 'index.ts',
      name: 'use-ui',
      fileName: 'use-ui'
    },
  },
  plugins: [
    vue(),
    unocss({
      mode: 'vue-scoped',
    }),
    dts({
      outputDir: 'dist/types'
    }),
    libCss(),
  ]
})
