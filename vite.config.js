import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cat-explorer-app/',
  plugins: [react()],
});
