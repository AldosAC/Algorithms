/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  let uniqueSubset = {};

  for (let i = 0; i < this.length; i++) {
    let currentVal = this[i];

    if (!uniqueSubset[currentVal]) {
      uniqueSubset[currentVal] = currentVal;
    }
  }

  uniqueSubset = Object.keys(uniqueSubset);

  for (let i = uniqueSubset.length - 1; i >= 0; i--) {
    let currentVal = uniqueSubset[i];

    for (let j = 0; j < arr.length; j++) {
      if (typeof arr[j] === "number") {
        currentVal = Number(currentVal);
      }

      if (currentVal === arr[j]) {
        uniqueSubset.pop();
        break;
      }
    }
  }

  return uniqueSubset.length === 0 ? true : false;
};
