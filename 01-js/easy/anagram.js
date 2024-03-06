/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");

  // OR
  // str1 = JSON.stringify(str1.toLowerCase().split("").sort());
  // str2 = JSON.stringify(str2.toLowerCase().split("").sort());

  // JSON.stringify array of strings kar dega input ko whereas w/o uske array of chars rahega wo
  // like this:
  // ["e","h","h","u"]
  // [ 'e', 'h', 'h', 'u' ]

  return str1 == str2 ? true : false;
}

module.exports = isAnagram;

// when it comes to objects and arrays, === behaves differently. It checks whether the two operands reference the same object or array in memory, not just whether they have the same properties or elements. This is known as reference equality.

// For example:

// javascript
// Copy code
// let obj1 = { key: 'value' };
// let obj2 = { key: 'value' };

// console.log(obj1 === obj2); // Output: false
// Even though obj1 and obj2 have the same properties and values, === returns false because they reference different objects in memory.

// Similarly, for arrays:

// javascript
// Copy code
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // Output: false
// Here, arr1 and arr2 contain the same elements, but they are different arrays in memory, so === returns false.

// To compare the contents of two objects or arrays in JavaScript, you need to manually compare their properties or elements, which usually involves iterating over them and performing comparisons on each property or element. Alternatively, you can convert them to strings using JSON.stringify() as mentioned earlier.
