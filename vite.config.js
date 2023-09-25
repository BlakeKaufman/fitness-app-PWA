import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

const manifestForPlugin = {
  manifest: {
    name: "Workout App",
    short_name: "Workout App",
    description: "An easy way to track your progress.",
    icons: [
      {
        src: "./vite.svg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  devOptions: {
    enabled: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
