function minimumWaitingTime(queries) {
	let minWait = 0;
	let currentWait = 0;
	
	queries.sort((a, b) => a-b);
	
  queries.forEach((item, index, array) => {
		if (index !== 0) {
			currentWait += array[index - 1];
		}
		
		minWait += currentWait;
	});
	
	return minWait;
}

/*
[1, 2, 2, 3, 6]

0, 1, 3, 5, 8

*/
												
// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
