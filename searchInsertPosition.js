const nums = [3, 5, 7, 9, 10];
let target = 8;
function searchInsertPosition(nums, target) {
  if (nums.includes(target)) {
    let indexOfTarget = nums.indexOf(5);
    return indexOfTarget;
  } else {
    nums.push(target);
    const newNums = nums.sort((a, b) => a - b);
    let indexOfTarget = newNums.indexOf(target);
    return indexOfTarget;
  }
}

console.log(searchInsertPosition(nums, target));
