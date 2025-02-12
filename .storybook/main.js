const path = require('path');

/* eslint-disable import/no-extraneous-dependencies */
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '../src/**/*.stories.js',
  ],
  staticDirs: [
    '../dist',
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      options: {
        runtime: path.resolve(__dirname, '../src/helpers/handlebars.js'),
        precompileOptions: {
          knownHelpersOnly: false,
        },
      },
    });

    config.plugins.push(
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:6006',
      }),
    );

    return config;
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
};
export default config;
