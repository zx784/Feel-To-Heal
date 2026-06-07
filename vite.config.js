import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Feel-To-Heal/",
  plugins: [react(), tailwindcss()],
});
