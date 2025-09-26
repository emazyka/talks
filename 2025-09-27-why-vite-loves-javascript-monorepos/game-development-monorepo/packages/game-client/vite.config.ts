import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@game-shared': resolve(__dirname, '../game-shared/src'),
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
