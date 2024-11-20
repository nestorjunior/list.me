import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/https://github.com/nestorjunior/list.me/",
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
      "@fortawesome/react-fontawesome": "@fortawesome/react-fontawesome",
      "@fortawesome/free-solid-svg-icons": "@fortawesome/free-solid-svg-icons",
    },
  },
});
