import {defineConfig} from 'vite';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  base: '/webresources/',
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src/helpers'),
    }),
    solidPlugin(),
  ],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: () => {
          return 'js/main.js';
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') {
            return 'css/main.css';
          }
          if (/\.(ttf|otf|eot|woff2?)$/.test(assetInfo.name)) {
            return 'fonts/[name][extname]';
          }
          if (/\.(svg|png|jpe?g)$/.test(assetInfo.name)) {
            return 'images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
