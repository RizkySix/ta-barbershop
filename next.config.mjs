
/** @type {import('next').NextConfig} */
import { config } from 'dotenv';

// Memuat variabel lingkungan dari file .env
const { parsed } = config();

// Konfigurasi Next.js
const nextConfig = {
  env: {
    ...parsed,
    // Tambahkan variabel lingkungan tambahan di sini jika diperlukan
  },
  // Opsi konfigurasi Next.js lainnya dapat ditambahkan di sini
  // distDir: "dist",
};

export default nextConfig;
