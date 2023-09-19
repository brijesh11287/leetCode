const nums = [5, 0, 5, 5];
let target = 10;
const twoSum = (nums, target) => {
  const data = [];
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    let indexData = nums.indexOf(difference);
    if (indexData !== i && indexData !== -1) {
      data.push(indexData, i);
      return data;
    }
  }
};

console.log(twoSum(nums, target));
