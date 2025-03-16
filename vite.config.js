import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr"; // Импортируем плагин для SVG

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Vit-and-Mochi/", // Добавляем имя репозитория для GitHub Pages
  plugins: [
    react(),
    svgr() // Добавляем плагин svgr
  ],
  build: {
    sourcemap: true,
  }
});
