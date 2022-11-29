import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// add dev and prod process.env
// add access to .env file variables
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  },
});
