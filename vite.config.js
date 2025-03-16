import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr"; // Импортируем плагин для SVG

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Для Vercel сайт разворачивается в корне
  plugins: [
    react(),
    svgr() // Добавляем плагин svgr
  ],
  build: {
    sourcemap: true,
  }
});

