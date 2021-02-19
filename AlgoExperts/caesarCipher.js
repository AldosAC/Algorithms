function caesarCipherEncryptor(string, key) {
	let newString = '';
	
  for (let i = 0; i < string.length; i++) {
		newString += shiftChar(string[i], key);
	}
	
	return newString;
}

function shiftChar(char, key) {
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
									'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
									'u', 'v', 'w', 'x', 'y', 'z'];
	let charIndex = alphabet.indexOf(char);
	let newIndex = 0;
	
	if (charIndex + key > alphabet.length - 1) {
		newIndex = (charIndex + key - alphabet.length) % 26;
	} else {
		newIndex = charIndex + key;
	}
	
	return alphabet[newIndex];
}
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
