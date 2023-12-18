const withImages = require("next-images");
module.exports = withImages({
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
