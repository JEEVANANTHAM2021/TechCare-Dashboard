import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // src folder ----
      "@": "/src",
      "@src": "/src",
      "@components": "/src/components",
      "@types": "/src/data",
      "@api": "/src/api",
      "@assets": "/src/assets",
      //Allow .js/.jsx/.ts/.tsx imports without extension ----
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  //Serve assets from /public as root ----
  publicDir: "public",
});