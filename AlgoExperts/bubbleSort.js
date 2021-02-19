function bubbleSort(array) {
  let hasSwapped = false;
	
	do {
		hasSwapped = false;
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				let placeholder = array[i];
				array[i] = array[i + 1];
				array[i + 1] = placeholder;
				hasSwapped = true;
			}
		}
	} while (hasSwapped)
		
	return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
