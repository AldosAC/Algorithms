function isValidSubsequence(array, sequence) {
	let sequenceIndex = 0;
  let matches = array.reduce((acc, val) => {
		if (val === sequence[sequenceIndex]) {
			sequenceIndex++;
			return acc + 1;
		} else {
			return acc;
		}
	}, 0)
	
	if (matches === sequence.length) {
		return true;
	} else {
		return false;
	}
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
