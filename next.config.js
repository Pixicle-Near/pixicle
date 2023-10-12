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
    ],
  },
};

module.exports = nextConfig;
