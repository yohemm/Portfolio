import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [
      // tailwindcss(),
      react(),
      ],
      test: {
        globals: true,
        environment: "jsdom",
        setupFiles: [path.resolve(__dirname, 'test/setup.ts')],
        env: {
            IS_REACT_ACT_ENVIRONMENT: 'true',
        },
        // include: ['__tests__/**/*.[tj]s?(x)']
      },
      resolve: {
        alias: {
            '~': "./app/"
        }
      }
  });