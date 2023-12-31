const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function Roman(s) {
  let number = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      number = number - roman[s[i]];
    } else {
      number = number + roman[s[i]];
    }
  }
  return number;
}
console.log(Roman("IV"));
