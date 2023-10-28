const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new webpack.ProvidePlugin({
      gsap: 'gsap',
    }));
    return config;
  },
};