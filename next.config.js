const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/producten.html", destination: "/products", permanent: true },
      { source: "/technieken.html", destination: "/products", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

module.exports = nextConfig;
