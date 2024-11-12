const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "assets.ctfassets.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
