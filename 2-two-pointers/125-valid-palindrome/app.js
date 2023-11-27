function isPalindrome(str) {
  let answer = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let palindrome = answer.split("").reverse().join("");
  if (palindrome === answer) {
    return true;
  } else {
    return false;
  }
}
