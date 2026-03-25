
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental Turbopack is sometimes unstable on Vercel builds
  // Disabling it for production builds can solve hanging issues
  transpilePackages: ["framer-motion", "lucide-react"],
  eslint: {
    // This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // Vercel: Skip static optimization for routes that require runtime
  staticPageGenerationTimeout: 120,
  // Prevent Vercel from timing out during builds
  outputFileTracingIncludes: {},
};

module.exports = nextConfig;
