module.exports = {
  entry: "./src/app.js",
  devtool: "source-map",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|gif)$/, loader: "url-loader" },
    ],
  },
};
