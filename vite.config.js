import { defineConfig } from 'vite'
import mix from 'vite-plugin-mix'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [
    reactRefresh(),
    mix({
      handler: './handler.ts',
    }),
  ],
})
