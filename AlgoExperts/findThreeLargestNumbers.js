function findThreeLargestNumbers(array) {
  let largestThree = [array[0]];
	
	for (let i = 1; i < array.length; i++) {
		let currentVal = array[i];
		if (currentVal > largestThree[0] || largestThree.length < 3) {
			updateLargestThree(largestThree, currentVal);
		}
	}
	return largestThree;
}

function updateLargestThree(array, value) {
	for (let i = 0; i < array.length; i++) {
		if (value < array[i]) {
			array.splice(i, 0, value);
			break;
		} else if (i === array.length - 1) {
			array.push(value);
			break;
		}
	}
	if (array.length > 3) {
		array.shift();
	}
	console.log(JSON.stringify(array))
}

// [4, 7, 10], 5
// [4, 7, 10], 9
// [4, 7, 10], 11

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
