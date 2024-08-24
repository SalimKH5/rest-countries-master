import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/rest-countries-master/",
  build: {
    sourcemap: true, // Ensure sourcemaps are enabled
  },
  plugins: [react()],
})
