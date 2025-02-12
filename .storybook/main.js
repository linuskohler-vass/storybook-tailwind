import path from "path";

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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

    return config;
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
};
export default config;
