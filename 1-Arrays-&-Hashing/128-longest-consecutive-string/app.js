function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 0;
      while (numSet.has(num + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
}

console.log(longestConsecutive([1, 2, 3, 200, 400]));
