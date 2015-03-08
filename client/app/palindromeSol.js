// string palindromes

var isPalindrome = function (str) {
  for (var i = str.length - 1; i >= 0; i--) {
    str[i]
  };
}

var longestPalindrome = function (string) {
  var length = string.length;
  var result = '';
  //given starging indices, find ongest centered palindrome
  var longPalindrome = function(left, right) {
    while (left >=0 && right < length && string[left] === string[right]) {
      left --;
      right ++;
    }
    return string.slice(left+1, right);
  }
  //loop through whole strin gusing subroutine
  for (var i = 0; i < length; i++) {
    //use helper to find longest palindrome wrapped in our given index
    var oddPal = longPalindrome(i-1, i+1);
    var evenPal = (i +1 < length) ? longPalindrome(i, i+1) : '';

    if (oddPal.length > result.length) result = oddPal;
    if (evenPal.length > result.length) result = evenPal;
  }

  return result;
};

//linear solution http://leetcode.com/2011/11/longest-palindromic-substring-part-ii.html