var stream = require('stream')

function Read(options) {
	stream.Readable.call(this, options)
	this._max = 100
	this._index = 1
}

Read.prototype = Object.create(stream.Readable.prototype);
Read.prototype.constructor = stream.Readable

Read.prototype._read = function() {
	//
	//	https://developer.mozilla.org/en-US/docs/Web/ \
	//	JavaScript/Reference/Global_Objects/Math/random
	// Here on the botoom using the math random.
	var number = Math.floor(Math.random() * (120 - 10)) + 10;
	var i = this._index++
	if(i > this._max) {
		this.push(null);
	}
	else {
		var buf = new Buffer(number.toString(), 'utf8')
		this.push(buf)
	}
}

module.exports = Read

// var stream = require('stream')

// function Random(options) {
// 	stream.Readable.call(this, options)
// 	this._max = 100
// 	this._index = 1
// }

// Random.prototype = Object.create(stream.Readable.prototype);
// Random.prototype.constructor = stream.Readable

// Random.prototype._read = function() {
// 	//
// 	//	https://developer.mozilla.org/en-US/docs/Web/ \
// 	//	JavaScript/Reference/Global_Objects/Math/random
// 	// Here on the botoom using the math random.
// 	var number = Math.floor(Math.random() * (120 - 10)) + 10;
// 	var i = this._index++
// 	if(i > this._max) {
// 		this.push(null);
// 	}
// 	else {
// 		var buf = new Buffer(number.toString(), 'utf8')
// 		this.push(buf)
// 	}
// }

// module.exports = Random

