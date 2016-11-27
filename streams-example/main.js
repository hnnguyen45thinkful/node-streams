var Alphabet = require('./alphabet');
var Cache = require('./cache');
var alpha = new Alphabet();
var cache = new Cache({ key: 'alpha1' });

alpha.pipe(cache);

cache.on('finish', function() {
    console.log('cache store:', Cache.store);
});

//alphabet.js
// var stream = require('stream');

// function Alphabet(options) {
//     stream.Readable.call(this, options);
//     this._start = 'a';
//     this._end = 'z';
//     this._curr = this._start.charCodeAt(0);
// };
// Alphabet.prototype = Object.create(stream.Readable.prototype);
// Alphabet.prototype.constructor = stream.Readable;

// Alphabet.prototype._read = function() {
//     var letter = String.fromCharCode(this._curr);
//     var buf = new Buffer(letter, 'utf8');
//     this.push(buf);
//     this._curr++;
//     if (letter === this._end) {
//         this.push(null);
//     }
// };

// module.exports = Alphabet;

//cache.js
// var stream = require('stream');

// function Cache(options) {
//     stream.Writable.call(this, options);
//     this._key = options.key;
//     this._value = null;
//     this.on('finish', function() {
//         Cache.store[this._key] = this._value;
//     });
// };
// Cache.store = {};
// Cache.prototype = Object.create(stream.Writable.prototype);
// Cache.prototype.constructor = stream.Writable;

// Cache.prototype._write = function(chunk, encoding, callback) {
//     if (!this._value) {
//         this._value = chunk;
//     }
//     else {
//         this._value = Buffer.concat([this._value, chunk]);
//     }
//     callback();
// };

// module.exports = Cache;