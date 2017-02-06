//require in the built-in node-module used for paths (directories)
const path = require('path')

//when someone requires this file (webpack.config.js), what they'll get back is whatever is exported
module.exports = {
  entry: "./public/index.js",
  output: {
    path: path.resolve(__dirname + '/public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[{use:"babel-loader", test:/\.js$/, exclude:/node_modules/}]
  }
}
