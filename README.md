garbage-stream
=======

```
npm install garbage-stream
```

A stream of randomly generated garbage json data.
Garbage generator is [node-garbage](https://github.com/substack/node-garbage) with few bugfixes.

Example
=======

````
var GS = require('garbage-stream')

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

// output
&=f5I
false
true
|QjD46`	
[ undefined ]
-1.1114219485428944
+O	V"RLrm@y;nQN-c
6.793499248478277
[ undefined ]
[ '(@L ' ]
12.597547340430635
````

Options
=======

```
var gs = new GarbageStream({}, 20)
```
Constructor takes an object with options for [node-garbage](https://github.com/substack/node-garbage) and a number of objects (items) to emit (default is Infinity).