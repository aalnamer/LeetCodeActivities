function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let charCount = {};

  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "managra"));
