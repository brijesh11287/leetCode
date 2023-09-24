const paranthesis = ["()", "[]", "{}"];
let str = "()";
for (let i = 0; i < str.length; i++) {
  console.log(str[i] + str[i + 1]);
  i++;
  // if (paranthesis.includes(str)) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
}
