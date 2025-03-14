import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server : {
    proxy : {
      "/api" : {
        changeOrigin : true,
        target : "https://auth-backend-93eo.onrender.com",
        secure : false
      }
    }
  }
});
