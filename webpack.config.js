// next.config.js
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

