const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false,
  },
  latex: true,
});

module.exports = withNextra({
  output: "export",
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "github.com",
      "img.shields.io",
      "cosmology.zone",
    ],
    unoptimized: true,
  },
});
