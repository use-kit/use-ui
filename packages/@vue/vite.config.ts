import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unoCSS from 'unocss/vite'
import dts from 'vite-plugin-dts'
import libCSS from 'vite-plugin-libcss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@use-ui/vue',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    unoCSS(),
    dts({
      outputDir: 'dist/types',
    }),
    libCSS(),
  ],
})
