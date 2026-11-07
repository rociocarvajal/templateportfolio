const basePath = "/templateportfolio"

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig