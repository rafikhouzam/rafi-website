import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const config: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: __dirname },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return []
  },
}

export default withMDX(config)
