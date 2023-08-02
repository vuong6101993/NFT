/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig
