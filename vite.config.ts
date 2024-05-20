import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: '/wishorama-web/',
	resolve: {
    alias: {
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
    },
  },
})
