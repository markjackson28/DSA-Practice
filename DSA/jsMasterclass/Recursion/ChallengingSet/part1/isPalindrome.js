'use strict';

// Write a recursive function call isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return false;
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log('false', isPalindrome('awesome'));
console.log('false', isPalindrome('foobar'));
console.log('true', isPalindrome('tacocat'));
console.log('true', isPalindrome('amanaplanacanalpanama'));
console.log('true', isPalindrome('amanaplanacanalpandemonium'));
