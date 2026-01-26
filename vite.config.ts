import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({
    workbox:{
navigateFallback:"/offline.html",
runtimeCaching:[{
  urlPattern: /^https:\/\/api\.github\.com\//,
  handler: 'CacheFirst',
  options:{
    cacheName:'GithubApi-cache',
    expiration:{
      maxEntries:90,
      maxAgeSeconds: 60 * 60 * 24, // 1 day
    }
  }
}],
    },
     registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "3d_port",
        short_name: "Portfolio",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
  
  })],
  assetsInclude:["**/*.glb"],
})
