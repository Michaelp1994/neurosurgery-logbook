const webpack = require("@nativescript/webpack");
const { resolve } = require("path");

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack
  webpack.chainWebpack((config) => {
    // change the "@" alias to "app/libs"
    config.resolve.alias.set("@", resolve(__dirname, "src"));
  });
  return webpack.resolveConfig();
};
