/*
*@id each
*@section Consumption
*@name Stream.each(f)
*@param {Function} f
*@api public
*
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
