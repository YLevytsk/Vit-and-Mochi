import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr'; // Плагин для работы с SVG

export default defineConfig({
  plugins: [
    react(),
    svgr(), // Добавляем плагин для работы с SVG
  ],
  build: {
    sourcemap: true,
  },
});


