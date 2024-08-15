function isFunction(possibleFunction) {
  return typeof possibleFunction === 'function';
}

function fun() {}

let defined = 'Not defined';
if (isFunction(fun)) {
  defined = "Defined";
}

console.log("Function " + defined);
