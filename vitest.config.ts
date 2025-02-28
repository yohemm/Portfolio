import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // tailwindcss(),
    react()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve('./tests/setup.ts')],
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true'
    },
    include: ['./tests/**/*.test.[tj]s?(x)']
  },
  resolve: {
    alias: {
      '~': new URL('./app/', import.meta.url).pathname
    }
  }
});
