let haystack = "hello";
let needle = "ll";
function firstOccur(haystack, needle) {
  const occur = [];
  const nonOccur = [];
  for (i = 0; i < haystack.length; i++) {
    let data = haystack.slice(i, needle.length + i);
    if (data === needle) {
      occur.push(i);
    } else {
      nonOccur.push(i);
    }
  }
  if (occur.length > 0) {
    return occur[0];
  } else {
    return -1;
  }
}

console.log(firstOccur(haystack, needle));
