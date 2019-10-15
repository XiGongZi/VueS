// Load the full build.
var _ = require('lodash');

let a = _.chunk(['a', 'b', 'c', 'd'], 2)
console.log("hello")
console.log(a)
// => [['a', 'b'], ['c', 'd']]