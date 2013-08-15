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
})

gs.on('readable', function () {
  while(true) {
    console.log(gs.read())
  }
})

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
var gs = new GarbageStream({})
```
Constructor takes an object with options for [node-garbage](https://github.com/substack/node-garbage).