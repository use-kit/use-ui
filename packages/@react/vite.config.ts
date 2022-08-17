import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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
    react(),
    unocss(),
    dts({
      outputDir: 'dist/types'
    }),
    libCss(),
  ]
})
