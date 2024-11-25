import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIOREACT/', // Replace 'PORTFOLIOREACT' with your repository name
})
