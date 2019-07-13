const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  // yarn add webpack-dev-server to auto reload after save
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  // using  /expression/ between / and  / => regular expression
  module: {
    rules: [
      {
        test: /\.js$/, //regular expression to find all js files
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, //i case-insensitive
        use: { loader: "file-loader" }
      }
    ]
  }
};
