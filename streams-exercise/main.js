// Try It!
// Create your own examples of a Readable, Writable, and Transform streams (which implement the _transform method to read a chunk and push new data). For example, your readable stream could produce a list of random numbers. Your transform stream could filter out the numbers which are less than 100. And your writable stream could print the numbers to the console.
var Random = require('./random')
var Filter = require('./filter')
var Printer = require('./printer')

var random = new Random()
var filter = new Filter()
var printer = new Printer()


random.pipe(filter).pipe(printer)
