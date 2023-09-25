const nums = [3, 5, 7, 9, 10];
let target = 8;

if (nums.includes(target)) {
  let indexOfTarget = nums.indexOf(5);
  console.log(indexOfTarget);
} else {
  nums.push(target);
  const newNums = nums.sort((a, b) => a - b);
  console.log(newNums);
  let indexOfTarget = newNums.indexOf(target);
  console.log(indexOfTarget);
}
