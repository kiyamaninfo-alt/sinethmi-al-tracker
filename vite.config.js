import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

import { execSync } from 'child_process'

let appVersion = 'PRO v4.5'
try {
  const logStr = execSync('git log -n 20 --pretty=format:%s').toString()
  const match = logStr.match(/PRO v(\d+\.\d+)/i) || logStr.match(/v(\d+\.\d+)/i)
  if (match) appVersion = `PRO v${match[1]}`
} catch (e) {}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(appVersion)
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Sinethmi A/L Tracker',
        short_name: 'AL Tracker',
        description: 'A/L Technology Stream Study Progress Tracker',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
