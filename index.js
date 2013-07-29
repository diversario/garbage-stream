var garbage = require('./garbage')
  , Stream = require('stream').Stream
  , util = require('util')

util.inherits(GarbageStream, Stream);

module.exports = GarbageStream

function GarbageStream(opts, count) {
  Stream.call(this)
  this._emit = false
  this.opts = opts || {}
  this._count = count || Infinity
  this._emitted = 0
}

GarbageStream.prototype.resume = function() {
  var self = this
  this._emit = true
  
  process.nextTick(function () {
    if (!Object.keys(self.opts).length) {
      self.emit('data', garbage())
    } else {
      var type = Object.keys(self.opts)[Math.ceil(Math.random() * Object.keys(self.opts).length-1)]
      self.emit('data', garbage[type](self.opts[type]))
    }
    
    if (self._emit && ++self._emitted <= self._count) {
      setImmediate(function () {
        self.resume()
      })
    }
  })
}

GarbageStream.prototype.pause = function() {
  this._emit = false
}