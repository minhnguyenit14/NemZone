const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  // optimizeImagesInDev: true,
  // mozjpeg: {
  //   quality: 30,
  // },
  // optipng: {
  //   optimizationLevel: 5
  // }
  // your config for other plugins or the general next.js here...
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const paths = {
      "/": { page: "/" },
      "/about": {
        page: "/about",
      },
      "/contact": {
        page: "/contact",
      },
      "/menu": {
        page: "/menu",
      },
      "/handbook": {
        page: "/handbook",
      },
    };
    if (!dev) {
      [1,2,3,4,5,6].map((id) => {
        paths[`/handbook/${id}`] = {
          page: `/handbook/[id]`,
          query: { id: `${id}` },
        };
      });
    }

    return paths;
  },
});
