function twoSum(nums, target) {
  const store = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const complement = target - currentNum;

    if (store.has(complement)) {
      const complementIdx = store.get(complement);
      return [complementIdx, i];
    }

    store.set(currentNum, i);
  }
  return [];
}

console.log(twoSum([3, 3], 6));

function twoSum(nums, target) {
  const store = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const complement = target - currentNum;

    if (store.has(complement)) {
      const complementIdx = store.get(complement);
      return [complementIdx, i];
    }
    store.set(currentNum, i);
  }
  return [];
}
