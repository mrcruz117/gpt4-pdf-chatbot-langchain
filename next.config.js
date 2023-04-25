/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'info.aersale.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// next.config.js
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'info.aersale.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// };
export default nextConfig;
