// Archivo de configuracion de Next
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    // Soporte para imagenes
    formats: ['image/avif', 'image/webp'],
    // Para img externas 
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
