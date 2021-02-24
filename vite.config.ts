import { defineConfig, optimizeDeps } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import alias from "@rollup/plugin-alias";
// https://vitejs.dev/config/
export default defineConfig({
  // https://github.com/vitejs/vite/issues/334
  optimizeDeps: {
    include: ["excelts"],
  },
  plugins: [
    reactRefresh(),
    alias({
      entries: [{ find: "@", replacement: "/src/" }],
    }),
  ],
});
