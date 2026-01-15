import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 👇 AQUI ESTÁ A "VACINA" PARA O ERRO NOVO
  experimental: {
    turbo: {
      resolveAlias: {
        // Deixamos vazio para o Vercel parar de reclamar
      },
    },
  },
};

export default withPWA(nextConfig);