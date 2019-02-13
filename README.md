### Highland
---
http://highlandjs.org/

stream, controllerflow

```
npm install highland
```

```js
// Stream.each(f)
// https://github.com/caolan/highland/blob/2.13.0/lib/index.js#L1815
/*
*@id each
*@section Consumption
*@name Stream.each(f)
*@param {Function} f
*@api public
* _([1, 2, 3, 4]).each(function (x) {
* });
*/
Stream.prototype.each = function (f) {
  var self = this;
  var s = this.consume(function (err, x, push, next) {
    if (err) {
      self.emit('error', err);
    }
    else if (x === nil) {
      push(null, nil);
    }
    else {
      f(x);
      next();
    }
  });
  s.resume();
  return s;
};
exposeMethod('each');
```

```
var add1 = add(1);
var mul3 = mul(3);
var add1mule = seq(add1, mul3);
add1mul3(2) == 9

var addAll = function () {
  var args = Array.prototype.slice.call(arguments);
  return fold1(add, args);
};
var f = partial(addAll, 1, 2);
f(3, 4) == 10
```

```
```

