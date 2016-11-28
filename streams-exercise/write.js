var stream = require('stream')

function Write(options){
  stream.Transform.call(this, options)
}

Write.prototype = Object.create(stream.Transform.prototype)
Write.prototype.constructor = stream.Transform


Write.prototype._transform = function (chunk, encoding, done) {
  var number = chunk.toString()
  if (number > 100) {
    this.push(number)
  }
  
  done()
}

module.exports = Write

// var stream = require('stream')

// function Filter(options){
//   stream.Transform.call(this, options)
// }

// Filter.prototype = Object.create(stream.Transform.prototype)
// Filter.prototype.constructor = stream.Transform


// Filter.prototype._transform = function (chunk, encoding, done) {
//   var number = chunk.toString()
//   if (number > 100) {
//     this.push(number)
//   }
  
//   done()
// }


// module.exports = Filter
