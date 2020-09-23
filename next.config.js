const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  // optimizeImagesInDev: true,
  mozjpeg: {
    quality: 30,
  },
  optipng: {
    optimizationLevel: 5
  }
  // your config for other plugins or the general next.js here...
});
