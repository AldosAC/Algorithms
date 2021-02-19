function nonConstructibleChange(coins) {
  let change = 0;
	
	if (coins.length === 0) {
		return 1;
	}
	
	coins = coins.sort((first, second) => {
		if (first < second) {
        return -1;
    } else if (first > second) {
        return 1;
    } else {
        return 0;
    }
	});
	
	for (let i = 0; i < coins.length; i++) {
		if (coins[i] > change + 1) {
			return change + 1;
		} else {
			change += coins[i];
		}
	}
	
	return change + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
