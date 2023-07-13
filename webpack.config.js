const globToRegExp = require('glob-to-regexp');

// ignore warnings from our package aliases. warnings are emitted because JL4
// packages have source maps but JL3 packages don't.
module.exports = {
  ignoreWarnings: [
    {
      module: globToRegExp('./node_modules/@jl3/*')
    },
    {
      module: globToRegExp('./node_modules/@jl4/*')
    }
  ]
};
