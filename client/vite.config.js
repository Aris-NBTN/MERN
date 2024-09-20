import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env,
  },
  plugins: [react()],
  // build: { chunkSizeWarningLimit: 1600 },
  resolve: {
    alias: [
      { find: '~', replacement: '/src' },
      { find: 'Admin', replacement: '/src/pages/admin' },
      { find: 'Public', replacement: '/src/pages/public' },
      { find: 'User', replacement: '/src/pages/user' }
    ]
  }

})
