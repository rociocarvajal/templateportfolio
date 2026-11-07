/** @type {import('next').NextConfig} */

const basePath = "/templateportfolio"

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/templateportfolio",
  assetPrefix: "/templateportfolio/",
}

export default nextConfig