/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress source map warnings without changing devtool
  webpack: (config, { dev }) => {
    if (dev) {
      // Suppress source map warnings for Next.js internal files
      config.ignoreWarnings = [
        /Failed to parse source map/,
        /Could not read source map/,
        /ENOENT: no such file or directory.*\.map/,
      ];
    }
    return config;
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
