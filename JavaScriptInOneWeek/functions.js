function doubling(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}

console.log(doubling([1, 2, 3, 4]));
