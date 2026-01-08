import {mergeConfig} from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';

export default {
  stories: ['../src/**/*.stories.js'],
  staticDirs: ['../public'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [
        handlebars({
          partialDirectory: path.resolve(__dirname, '../src/helpers'),
        }),
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },

      assetsInclude: ['**/*.hbs'],
    });
  },
};
