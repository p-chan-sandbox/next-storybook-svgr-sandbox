/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      /**
       * @see https://github.com/vercel/next.js/issues/48177#issuecomment-1506251112
       */
      // issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}

module.exports = nextConfig
