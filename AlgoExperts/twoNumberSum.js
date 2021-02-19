function twoNumberSum(array, targetSum) {
	let values = {};
	
  for (let i = 0; i < array.length; i++) {
		let currentValue = array[i]
		let key = targetSum - currentValue;
		
		if (values[key]) {
			return [currentValue, key];
		}
		values[currentValue] = true;
	}
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
