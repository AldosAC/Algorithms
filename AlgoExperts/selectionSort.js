function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let smallestIndex = i;
		for (let j = i; j < array.length; j++) {
			if (array[j] < array[smallestIndex]) {
				smallestIndex = j;
			}
		}
		let placeholder = array[i];
		array[i] = array[smallestIndex];
		array[smallestIndex] = placeholder;
	}
	return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
