const withMDX = require("@next/mdx")();
const withImages = require("next-images");

// module.exports = withMDX(
//   withImages({
//     // Optionally, add any other Next.js config below
//     webpack(config, options) {
//       return config;
//     },
//     // Configure `pageExtensions` to include MDX files
//     pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
//   })
// );

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.module.rules.push({
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         loader: "file-loader",
//         options: {
//           outputPath: "static/_content",
//           publicPath: "/_next/static/_content",
//           name: "[name].[hash].[ext]",
//         },
//       });
//     }

//     return config;
//   },
// };

const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    // Add custom MDX loader
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: path.join(__dirname, "./src/utils/helpers/mdxLoader.ts"),
        },
        {
          loader: "@mdx-js/loader",
          options: {
            // Add any options here if needed
          },
        },
      ],
    });

    // Configure file-loader for images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            publicPath: `/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
