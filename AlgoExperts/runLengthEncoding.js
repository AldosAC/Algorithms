function runLengthEncoding(string) {
  let counter = 1;
	let encodedStr = '';
	let currentChar = string[0];
	
	if (string.length === 1) {
		return `${counter}${currentChar}`;
	}
	
	for (let i = 1; i < string.length; i++) {
		if (currentChar === string[i]) {
			if (counter === 9) {
				encodedStr += `${counter}${currentChar}`;
				counter = 1;
			} else {
				counter++;
			}
		} else {
			encodedStr += `${counter}${currentChar}`;
			currentChar = string[i];
			counter = 1;
		}
		
		if (i + 1 === string.length) {
			encodedStr += `${counter}${currentChar}`;
		}
	}
	
	return encodedStr;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
