/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Add your Cloud Workstations URL here
    allowedDevOrigins: [
      "https://3000-firebase-portfolio-website-1757432963470.cluster-fbfjltn375c6wqxlhoehbz44sk.cloudworkstations.dev"
    ],
  },
}

export default nextConfig
