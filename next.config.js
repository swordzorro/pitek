const withImages = require("next-images");

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "ico"],
  distDir: "build",
  pageExtensions: ["jsx", "js"],
  webpack(config) {
    return {
      ...config,
    };
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
});
