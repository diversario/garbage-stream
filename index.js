var garbage = require('./garbage')
  , Readable = require('stream').Readable
  , util = require('util')

util.inherits(GarbageStream, Readable);

module.exports = GarbageStream

function GarbageStream(opts) {
  Readable.call(this, {objectMode: true})
  this.opts = opts || {}
}

GarbageStream.prototype._read = function() {
  if (!Object.keys(this.opts).length) {
    this.push(garbage())
  } else {
    var type = Object.keys(this.opts)[Math.ceil(Math.random() * Object.keys(this.opts).length-1)]
    this.push(garbage[type](this.opts[type]))
  }
}
