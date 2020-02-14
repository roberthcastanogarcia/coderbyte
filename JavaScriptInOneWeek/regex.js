// --- charAt

// var str = "Hello";
//
// console.log(str.charAt(0));
// console.log(str.charAt(3));
// console.log(str.charAt(7));

// --- charCodeAt y fromCharCode

// var str = "Hello world";
//
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(6));
//
// console.log(String.fromCharCode( str.charCodeAt(0) + 1 )); // H + 1 = I

// --- split

// var str = "Hello planet Earth";
//
// var arr1 = str.split("");
// var arr2 = str.split(" ");
//
// console.log(arr1);
// console.log(arr2);

// --- replace

// var str = "Hello planet Earth";
// var str2 = str.replace("Earth", "Mars");
//
// console.log(str2);

// --- substr

// var str = "Hello planet Earth";
// var part = str.substr(6, 6);

// console.log(part);

// --- Regular Expresions ---

// var pattern = /(a|b|c)/gi

// --- replace the a character everywhere in String

// var str = "An apple was eaten";
// console.log(str.replace(/a/gi, "4"));

// --- replace all numbers with x's

// var str = "My phone number is 551-555-5555";
// console.log(str.replace(/[0-9]/gi, "x"));

// --- get all words that only start with a letter

// var str = "Hey 4get these words 3_please";
// var wor = str.match(/\b[a-z]+/gi);
//
// console.log(wor);

// --- find the position in the string where the character A is exactly 2 spaces away from b

// var str = "ABxxAxxB";
// var pos = str.search(/A..B/gi);
//
// console.log(pos);
