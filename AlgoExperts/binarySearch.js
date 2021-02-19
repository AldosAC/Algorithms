function binarySearch(array, target, indexOffset = 0) {
  if (array.length > 0) {
		let midIndex = Math.floor(array.length / 2);
	
		if (array[midIndex] === target) {
			return midIndex + indexOffset;
		} else if (array[midIndex] > target) {
			return binarySearch(array.slice(0, midIndex), target, indexOffset)
		} else {
			indexOffset += midIndex + 1
			return binarySearch(array.slice(midIndex + 1), target, indexOffset)
		}
	} else {
		return -1;
	}
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
