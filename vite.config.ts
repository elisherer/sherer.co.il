import { defineConfig, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import history from "connect-history-api-fallback";

// TODO: until we use vite v5
function redirectAll() {
  return {
    name: "rewrite-all",
    configureServer(server: ViteDevServer) {
      return () => {
        const handler = history({
          disableDotRule: true,
          rewrites: [{ from: /\/$/, to: () => "/index.html" }],
        });

        server.middlewares.use((req, res, next) => {
          handler(req, res, next);
        });
      };
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    redirectAll(),
  ],
  build: {},
  server: {
    port: 3000,
    strictPort: true,
  },
});
