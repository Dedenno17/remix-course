import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: boolean;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: false,
        v3_relativeSplatPath: false,
        v3_throwAbortReason: false,
        v3_singleFetch: false,
        v3_lazyRouteDiscovery: false,
      },
    }),
    tsconfigPaths(),
  ],
});
