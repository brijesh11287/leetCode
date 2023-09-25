var removeDuplicates = function (nums) {
  const data = new Set(nums);
  return data;
};

console.log(removeDuplicates([1, 1, 2]));
