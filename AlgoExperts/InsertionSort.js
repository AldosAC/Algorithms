function insertionSort(array) {
	if (array.length > 1) {
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				for (let j = i + 1; j >= 0 && array[j] < array[j - 1]; j--) {
					if (array[j] < array[j - 1]) {
						let placeholder = array[j];
						array[j] = array[j - 1];
						array[j - 1] = placeholder;
					}
				}
			}
		}
	}
	return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
