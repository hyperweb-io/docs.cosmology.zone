const fs = require("fs");
const path = require("path");
const glob = require("glob");

const seo = require("../config/seo");
const siteInfo = require("../config/site");

const canonical = seo.canonical;
const OUT_DIR = path.resolve(__dirname, "../../out");

// Generate empty sitemaps to prevent indexing
const emptyXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

const robotsTxt = `
# This site has been deprecated and moved to https://docs.hyperweb.io
# Please update your bookmarks and links

User-agent: *
Disallow: /

# Canonical site
Host: https://docs.cosmology.zone
`;

// Write empty sitemaps and restrictive robots.txt
fs.writeFileSync("out/sitemap.xml", emptyXml);
require("mkdirp").sync("out/sitemaps");
fs.writeFileSync("out/sitemaps/pages.xml", emptyXml);
fs.writeFileSync("out/sitemaps/legal.xml", emptyXml);
fs.writeFileSync("out/robots.txt", robotsTxt);
