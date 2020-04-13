/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type import('webpack').Configuration */
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const BUILD_ROOT = path.join(__dirname, './dist');
const SRC_ROOT = path.join(__dirname, './src');

module.exports = {
  context: SRC_ROOT,
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: {
    'server.js': path.resolve('src', 'index.ts'),
  },
  output: {
    filename: '[name]',
    path: BUILD_ROOT,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|dist)/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.mjs'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  externals: [nodeExternals()],
};
