var str = 'Hello World';
var arr = str.split('');

console.log(arr);

for (var i = 0; i < str.length; i++) {
  if (arr[i] === arr[i].toUpperCase()) {
    arr[i] = arr[i].toLowerCase();
  }
}


console.log(arr.join(''));
