import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Vit-and-Mochi/", // Укажи имя репозитория
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
