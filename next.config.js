/** @type {import('next').NextConfig} */


const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },

  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'none',
  },

];

const nextConfig = {
  reactStrictMode: true,


  images: {
    minimumCacheTTL: 360,
    formats: ['image/webp'],
  },

  async headers() {
    return [
      {
        source: '/(/*)',
        headers: securityHeaders,
      },
    ];
  },

}


// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  sw: 'service-worker.js',
});

module.exports = withPWA(nextConfig);

// module.exports = nextConfig
