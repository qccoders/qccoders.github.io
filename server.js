//setup basic server using express

//require in modules from package.json
const express = require('express')
const app = express()

//serve static content that's in the public directory (automatically finds index.html)
// __dirname is a built in Node variable to get the full directory path: C:\Users\blah\blah\blah
app.use(express.static(__dirname + '/public'))

/*
  tell the server to start on port 3000 (since site is hosted on github, this is
  useful if wanting to develop locally
*/

app.listen(3000, () => {
    //log a message when the server starts
    console.log('Express app listening on port 3000');
})
