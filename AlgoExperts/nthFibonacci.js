function getNthFib(n) {
  let lastTwo = [0, 1]
	let counter = 3;
	
	while (counter <= n) {
		let next = lastTwo[0] + lastTwo[1];
		lastTwo[0] = lastTwo[1];
		lastTwo[1] = next;
		counter++
	}
	
	return n < 2 ? lastTwo[0] : lastTwo[1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
