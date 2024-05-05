import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/darkyrobin/",
  server: {
    watch: {
      usePolling: true,
      ignored: ['node_modules/**'],
    }
  }
})
