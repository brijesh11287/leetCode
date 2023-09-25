// balanced parenthethesis
const paranthesis = ["()", "[]", "{}"];
let str = "{[()]}";
const arr = [];
let i = 0;
while (i < str.length) {
  arr.push(str[i]);
  i++;
  let open = arr[arr.length - 2];
  let closed = arr[arr.length - 1];
  console.log(open);
  console.log(closed);
  let validParenthesis = open + closed;
  if (paranthesis.includes(validParenthesis)) {
    arr.pop();
    arr.pop();
  }
}
console.log(arr.length === 0);
