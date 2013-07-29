var GS = require('../')

var gs = new GS({
  'boolean': '',
  'array': 2,
  'string': '',
  'number': '',
  'object': 3
}, 10)

gs.on('data', function (data) {
  console.log(data);
})

gs.resume()