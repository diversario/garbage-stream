var GS = require('../')

var gs = new GS({
  'boolean': '',
  'array': 2,
  'string': '',
  'number': '',
  'object': 3
})

gs.on('readable', function () {
  while (true) console.log(gs.read());
})

