function kFrequency(nums, k) {
  let map = {};

  for (let num of nums) {
    if (!map[num]) map[num] = 0;
    map[num]++;
  }
  let arr = [...Object.keys(map)].sort((a, b) => map[b] - map[a]);

  return arr.slice(0, k);
}

console.log(kFrequency([1, 1, 1, 2, 2, 3], 2));
