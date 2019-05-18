const path = require("path"),
  HtmlWebPackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const srcPath = path.resolve(__dirname, "src"),
  distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(srcPath, "main.js"),
  output: {
    path: distPath,
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: isProd ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
                includePaths: ["src/styles", "node_modules"]
            }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(srcPath, "index.html"),
      filename: path.resolve(distPath, "index.html")
    }),
    new MiniCssExtractPlugin()
  ]
};
