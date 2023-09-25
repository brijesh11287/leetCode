const nums = [1, 1, 2];
for (i = 0; i < nums.length; i++) {
  for (j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      nums[j] = "_";
    } else {
    }
  }
}
const data = nums.filter((blank) => {
  return blank !== "_";
});
console.log(data.length);
