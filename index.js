

var recipes = {};

function updateObjectWithKeyAndValue(o, k, v) {
  var r = {};
  r[k] = v;
  return Object.assign( {}, o, r );
}
