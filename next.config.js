const withMDX = require("@next/mdx")();
const withImages = require("next-images");

module.exports = withMDX(
  withImages({
    // Optionally, add any other Next.js config below
    webpack(config, options) {
      return config;
    },
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  })
);
