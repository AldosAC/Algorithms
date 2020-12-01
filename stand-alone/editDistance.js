// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, 
// given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

/*
I: Two strings
O: Minimum number of edits needed to convert first string to second string
C: Only "edits" allowed are insertion, removal, or replacement.
E: Same strings

example:

str1: cat str2: that
first chars: c === t? No
next char in str2 === c? No
replace c with t

str1: tat str2: that
second chars: a === h? No
next char in str2 === a?  Yes
insert h in front of a.

str1: that str2: that
third chars: a === a? Yes
fourth chas: t === t? Yes

Complete, return 2.

str1: catcher str2: rat
ratcher
no change
no change
rather
rater
ratr
rat

edits: 5

*/


function editDistance(str1, str2) {
  let edits = 0;
  let chars = {};
  let str2Arr = [];
  let newStr = [];

  if (str1 === str2) {
    return 0;
  }

  if (str1.length > str2.length) {
    edits = str1.length - str2.length;
  }

  for (let i = 0; i < str2.length; i++) {
    let currentChar = str2[i];
    chars[currentChar] = (chars[currentChar] || 0) + 1;
    str2Arr.push(currentChar);
  }

  for (let i = 0, j = 0; i < str2.length; i++) {
    let currentChar = str1[j];
    if (currentChar !== str2[i]) {
      //if next str2 char matches current char, insert before.
      if (currentChar === str2[i + 1]) {
        //insert in front of str1 char.  Do not increment str1
        edits++;
      } else {
        //swap chars
        edits++
        j++;
      }
    } else {
      //if they match, move on
      j++;
    }
  }

  return edits;
}
