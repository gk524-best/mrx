/* config-overrides.js */
const { useBabelRc: BableRc, override, addWebpackAlias, addWebpackPlugin  } = require('customize-cra');
const path = require('path');
const Webpackbar = require('webpackbar');

module.exports = override(
  BableRc(),
  addWebpackAlias({
    '@': path.resolve(__dirname, "./src"),
    '@package': path.resolve(__dirname, "./package"),

  }),
  addWebpackPlugin(new Webpackbar()),
)