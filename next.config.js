/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

/*ONLY ALLOW IMAGES FROM THESES URLS*/
module.exports = {
  images: {
    domains: ["links.papareact.com", "setwork.ai"],
  },
};
