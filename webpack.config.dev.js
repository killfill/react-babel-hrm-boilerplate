module.exports = {

  entry: "./src/index.jsx",

  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/dist/"
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ["babel"],
      include: __dirname
    }]
  }

}