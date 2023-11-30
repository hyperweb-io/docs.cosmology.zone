const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  output: 'export',
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "github.com",
      "img.shields.io",
    ],
    unoptimized: true,
  },
});
