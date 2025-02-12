const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

/* eslint-disable import/no-extraneous-dependencies */
const CopyPlugin = require('copy-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

// -------------------------------------------
// plugins
// -------------------------------------------
const generatePlugins = (env) => {
  const plugins = [];

  plugins.push(
    new MiniCssExtractPlugin({
      filename: `css/[name]${env.prod ? '.[contenthash]' : ''}.css`,
    }),
  );

  plugins.push(
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'images' },
      ],
    }),
  );

  if (!env.prod) {
    plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    );
  }

  return plugins;
};

// -------------------------------------------
// rules
// -------------------------------------------
const generateRules = () => {
  const rules = [];

  rules.push({
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  });

  rules.push({
    test: /\.scss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      // 'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'autoprefixer',
              ],
            ],
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  });

  rules.push({
    test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name][ext]',
      publicPath: '/',
    },
  });

  rules.push({
    test: /.(svg(2)?)(\?[a-z0-9]+)?$/,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name][ext]',
      publicPath: '/',
    },
  });

  return rules;
};

// -------------------------------------------
// main config
// -------------------------------------------
module.exports = (env) => ({
  devtool: env.prod ? false : 'eval',
  watch: !env.prod,
  watchOptions: {
    ignored: [
      '**/node_modules',
      '/dist',
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'main',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  mode: env.prod ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: `js/[name]${env.prod ? '.[contenthash]' : ''}.js`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: env.prod ? '/etc.clientlibs/waw/clientlibs/clientlib-frontend-base/resources/' : '/',
  },
  module: {
    rules: generateRules(),
  },
  plugins: generatePlugins(env),
});
