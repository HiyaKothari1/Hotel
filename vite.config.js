import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the built site work on GitHub Pages (any sub-path)
export default defineConfig({
  base: "./",
  plugins: [react()],
});
