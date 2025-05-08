import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), tsconfigPaths(), react()],
  optimizeDeps: {
    include: ['@heroicons/react/24/outline', '@heroicons/react/24/solid'],
  },
});
