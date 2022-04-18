/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

/*ONLY ALLOW IMAGES FROM THESES URLS*/
module.exports = {
  images: {
    domains: ["links.papareact.com", "setwork.ai"],
  },

  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2V0d29yayIsImEiOiJjbDIzYTJ3bDMwNXd3M2NuMDdiOXdpdmFlIn0.xAwY-MaexijlXw4BdwVj7Q",
  },
};
