const Path = require("path");
const Webpack = require("webpack");
const { merge } = require("webpack-merge");
// const StylelintPlugin = require("stylelint-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  target: "web",
  mode: "development",
  devtool: "inline-cheap-source-map",
  output: {
    chunkFilename: "js/[name].chunk.js",
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    // new StylelintPlugin({
    //   files: Path.join("src", "**/*.s?(a|c)ss"),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, "../src"),
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, "../src"),
        loader: "babel-loader",
      },
    ],
  },
});
