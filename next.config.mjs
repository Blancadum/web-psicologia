import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Extiende la configuración de Webpack para definir alias personalizados
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("./"), // Alias para acceder a la raíz del proyecto con "@"
    };
    return config; // Devuelve la configuración extendida
  },
};

export default nextConfig;
