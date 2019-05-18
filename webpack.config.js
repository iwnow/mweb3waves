const path = require("path"),
  HtmlWebPackPlugin = require("html-webpack-plugin");

const srcPath = path.resolve(__dirname, "src"),
  distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(srcPath, "main.js"),
  output: {
    path: distPath,
    filename: "main.bundle.js"
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
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(srcPath, "index.html"),
      filename: path.resolve(distPath, "index.html")
    })
  ]
};
