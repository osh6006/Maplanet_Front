/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/*'
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/avatars/**'
      },
      {
        protocol: 'https',
        hostname: 'discord.com',
        port: '',
        pathname: '/assets/**'
      }
    ]
  }
};

export default nextConfig;
