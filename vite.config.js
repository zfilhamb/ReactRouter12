import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import * as url from 'url';

const dirName = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(dirName, "src/components/"),
      "@pages": path.resolve(dirName, "src/pages/"),
      "@constants": path.resolve(dirName, "src/constants/"),
      "@fetcher": path.resolve(dirName, "src/fetcher/"),
      "@utils": path.resolve(dirName, "src/utils/"),
    },
  },
});
