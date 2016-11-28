// Try It!
// Create your own examples of a Readable, Writable, and Transform streams (which implement the _transform method to read a chunk and push new data). For example, your readable stream could produce a list of random numbers. Your transform stream could filter out the numbers which are less than 100. And your writable stream could print the numbers to the console.
var Read = require('./read')
var Write = require('./write')
var Trans = require('./trans')

var read = new Read()
var write = new Write()
var trans = new Trans()


read.pipe(write).pipe(trans)
