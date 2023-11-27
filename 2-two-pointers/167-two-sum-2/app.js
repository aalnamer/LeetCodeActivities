function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    currSum = nums[left] + nums[right];
    if (currSum > target) {
      right -= 1;
    } else if (currSum < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
}
