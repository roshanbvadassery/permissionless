/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/shop',
          destination: 'https://shop.permissionless.net/',
        },
        {
          source: '/products/:slug*',
          destination: 'https://shop.permissionless.net/products/:slug*',
        },
        {
          source: '/collections/all',
          destination: 'https://shop.permissionless.net/collections/all',
        },
        {
          source: '/cart',
          destination: 'https://shop.permissionless.net/cart',
        },
        {
          source: '/cart/add',
          destination: 'https://shop.permissionless.net/cart/add',
        },
        {
          source: '/cart/:slug*',
          destination: 'https://shop.permissionless.net/cart/:slug*',
        },
        {
          source: '/search',
          destination: 'https://shop.permissionless.net/search',
        },
        {
          source: '/search/:slug*',
          destination: 'https://shop.permissionless.net/search/:slug*',
        },
        {
          source: '/contact',
          destination: 'https://shop.permissionless.net/contact',
        },
        {
          source: '/contact',
          destination: 'https://shop.permissionless.net/contact',
        },
      ],
    };
  },
};

module.exports = nextConfig;
