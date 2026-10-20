import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // PROXY: React'teki fetch("api/urunler") istekleri, Vite tarafından backend'e(5000) iletilir. 
    // Böylece tarayıcı her şeyi aynı adresten(5173) istiyormuş gibi görür ve CORS hatası çıkmaz. 
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
