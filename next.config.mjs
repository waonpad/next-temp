import "./src/constants/env/client-env.mjs";
import "./src/constants/env/server-env.mjs";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  typescript: {
    tsconfigPath: "./tsconfig.build.json",
  },
  experimental: {
    typedRoutes: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"]
    .flatMap((extension) => {
      const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
      return isDevServer ? [`dev.${extension}`, extension] : extension;
    }),
});

export default nextConfig;
