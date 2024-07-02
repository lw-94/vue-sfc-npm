import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), dts({
    outDir: 'dist/types',
    include: ['./src/pkg/**/*'],
  })],
  build: {
    lib: {
      entry: './src/pkg/index.ts',
      name: 'v3cUI',
      fileName: 'v3c-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包的依赖
      external: ['vue'],
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
