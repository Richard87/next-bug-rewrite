import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: "100mb",
		},
		// dynamicIO: true,
		// ppr: true,
	},
	output: "standalone",
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	logging: {
		fetches: {
			fullUrl: false,
			hmrRefreshes: false,
		},
	},
	rewrites: async () => {
			return [
				{
					source: "/:path*",
					destination: "/demo.example.com/:path*",
				},
			]
	},
}

export default nextConfig
