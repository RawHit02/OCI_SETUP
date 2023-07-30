/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*async redirects() {
    return [
      {
        source: '/Index',
        destination: '/', // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: '/Splash',
        destination: '/splash', // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: '/SignUp',
        destination: '/sign-up', // Matched parameters can be used in the destination
        permanent: false,
      }
    ];
  },*/
}

module.exports = nextConfig
