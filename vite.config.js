import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , qrcode()],
  server:{
    port: 3000
  },
  server:{
    historyApiFallback: true
  }
})
