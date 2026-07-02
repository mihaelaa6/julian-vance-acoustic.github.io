import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/julian-vance-acoustic.github.io/', // 💻 Match the full repository name perfectly!
})