function LetterCapitalize(str){
  var words = str.split(" ");


  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

readline = "i ran there";

console.log(LetterCapitalize(readline));
