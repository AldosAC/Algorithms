// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
  let total = 0;
	
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === "number") {
			total += array[i];
		} else {
			total += productSum(array[i], depth + 1);
		}
	}
	
	return depth * total;
}

/*
[5, 2, [7, -1], 3, [6, [-13, 8], 4]]

5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

*/

// Do not edit the line below.
exports.productSum = productSum;
