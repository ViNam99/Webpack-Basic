const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    myTest: "./src/test.js",
  },

  output: {
    // filename: "main.js",
    // filename: "main.[hash].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
