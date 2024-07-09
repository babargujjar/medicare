// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js
const nextConfig = {};

module.exports = {
  webpack: (config, { isServer }) => {
    // Only apply HTML loader for client-side bundles
    if (!isServer) {
      config.module.rules.push({
        test: /\.html$/, // Match HTML files
        use: 'html-loader' // Use html-loader to process HTML files
      });
    }

    return config;
  }
};

