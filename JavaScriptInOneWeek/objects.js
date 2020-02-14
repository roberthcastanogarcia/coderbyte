var str = 'hello world i am a sentence';
var obj = {};

for (var i = 0; i < str.length; i++) {
  var currentChar = str.charAt(i);
  if (obj[currentChar] === undefined) {
    obj[currentChar] = 1;
  } else {
    obj[currentChar] += 1;
  }
}

console.log(obj);
