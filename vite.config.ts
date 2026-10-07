import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all network interfaces so it works on any Wi-Fi connection
    port: 5173,
    cors: true, // Allow cross-origin requests across local devices
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    cors: true,
  },
});
