function containsDuplicates(nums) {
  const numSet = new Set();
  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 4, 1]));
