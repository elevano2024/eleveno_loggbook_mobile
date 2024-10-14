/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";
const { withExpo } = require("@expo/next-adapter");

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: /\//, // Cache all routes
        handler: "StaleWhileRevalidate",
      },
    ],
  },
  customWorkerSrc: "worker",
});

const nextConfig = {
  env: {
    HASURA_ENDPOINT_DEV: process.env.EXPO_PUBLIC_HASURA_ENDPOINT_DEV,
    HASURA_ADMIN_SECRET_DEV: process.env.EXPO_PUBLIC_HASURA_ADMIN_SECRET_DEV,
    HASURA_ENDPOINT_WS_DEV: process.env.EXPO_PUBLIC_HASURA_ENDPOINT_WS_DEV,
    HASURA_ENDPOINT_WS_PROD: process.env.EXPO_PUBLIC_HASURA_ENDPOINT_WS_PROD,
    HASURA_ENDPOINT_PROD: process.env.EXPO_PUBLIC_HASURA_ENDPOINT_PROD,
    HASURA_ADMIN_SECRET_PROD: process.env.EXPO_PUBLIC_HASURA_ADMIN_SECRET_PROD,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elevanologbookdev.s3.amazonaws.com",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "expo",
    // Add more React Native/Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
};

export default withExpo(withPWA(nextConfig));
