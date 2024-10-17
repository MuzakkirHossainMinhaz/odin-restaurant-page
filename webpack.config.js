const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Ensures that the dist folder is cleaned before each build
  },
  mode: "development",
  devServer: {
    static: "./dist", // Serve from 'dist' directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Use this template file for the HTML
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
