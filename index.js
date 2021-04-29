const mcp = require('./parse.js')
const fs = require('fs/promises')

fs.readFile('input.md')
  .then(a => mcp(a))
  .then( ({contents}) => console.log(contents) );

