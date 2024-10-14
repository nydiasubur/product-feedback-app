import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Build output directory
  },
  publicDir: "public", // Directory for static assets
  base: "/", // This is crucial for correct asset paths
});
