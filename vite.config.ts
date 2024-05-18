/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const baseUrl = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    host: true,
    strictPort: true,
    origin: "http://0.0.0.0:3000",
  },

  resolve: {
    alias: {
      "@": baseUrl,
      "@components": path.resolve(baseUrl, "components"),
      "@constants": path.resolve(baseUrl, "constants"),
      "@context": path.resolve(baseUrl, "context"),
      "@routes": path.resolve(baseUrl, "routes"),
      "@scripts": path.resolve(baseUrl, "scripts"),
      "@services": path.resolve(baseUrl, "services"),
      "@styles": path.resolve(baseUrl, "styles"),
      "@typings": path.resolve(baseUrl, "types"),
      "@tests": path.resolve(baseUrl, "..", "tests"),
    },
  },
  
  test: {
    environment: "jsdom"
  },
});
