// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    strictMIME: false,
    cors: {
       origin: 'https://rajeshthangapandi.github.io', // Allow requests from any origin
        methods: 'GET, POST, PUT, DELETE', // Allow specified HTTP methods
        allowedHeaders: '*', // Allow any headers
        exposedHeaders: '', // Expose no additional headers
        credentials: true, // Allow credentials (cookies, etc.)
        maxAge: 3600, // Cache preflight requests for 1 hour (optional)
        preflightContinue: false, // Disable preflight requests (optional)
        optionsSuccessStatus: 204 // Set the status code for successful OPTIONS requests (optional)
      }
  },
  plugins: [
    // Add plugins here
  ]
});
