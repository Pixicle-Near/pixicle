/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    Contract_Address: "pixicle.testnet",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "bafybeib7ew24y5c2675hattojwptd2qqg2mh5erkslodcelzhawfnrqihy.ipfs.nftstorage.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nftstorage.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.nftstorage.link",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};

module.exports = nextConfig;
