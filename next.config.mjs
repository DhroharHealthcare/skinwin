/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;