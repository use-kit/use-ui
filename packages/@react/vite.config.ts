import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import unoCSS from 'unocss/vite'
import dts from 'vite-plugin-dts'
import libCSS from 'vite-plugin-libcss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@use-ui/react',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react(),
    unoCSS(),
    dts({
      outputDir: 'dist/types',
    }),
    libCSS(),
  ],
})
