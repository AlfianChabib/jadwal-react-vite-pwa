import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
// import { VitePWA } from "vite-plugin-pwa";
// import manifest from "./public/manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    // VitePWA({
    //   srcDir: "src",
    //   filename: "sw.ts",
    //   manifest,
    //   includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
    //   registerType: "autoUpdate",
    //   devOptions: {
    //     enabled: true,
    //   },
    //   workbox: {
    //     globPatterns: ["**/*.{js,ts,css,html,ico,png,svg}"],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
