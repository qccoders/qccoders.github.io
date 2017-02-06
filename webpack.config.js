//require in the built-in node-module used for paths (directories)
const path = require('path')


//when someone requires this file (webpack.config.js), what they'll get back is whatever is exported

/*
1. Export this object using module.exports
2. Bundle everything from index.js
3. Take the bundled file and put it in the public/dist folder (creates one if not make)
4. Name that bundled file bundle.js
5. Peform some actions on the bundled code.
  -Load run it through babel, which in .babelrc I use 'env' and 'react'
    -meaning, convert my react code to regular javascript
    - convert my es2015+ code to JS that can be ran on any browser
  -Perform that on any file ending in .js
  -Exclude the node_modules folder
*/
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
