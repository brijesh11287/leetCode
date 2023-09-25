let s = "   fly me   to   the moon  ";

console.log(s.trimEnd());

let newStr = s.trimEnd().split(" ");

console.log(newStr);

let word = newStr[newStr.length - 1];
console.log(word.length);
