import { defineConfig } from 'vite'

export default defineConfig({
  base: '/mr-mr-bot-terms/', // Replace with your repository name
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})