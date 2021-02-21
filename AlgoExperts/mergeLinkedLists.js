// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  let nextOne = undefined;
	let nextTwo = undefined;
	let positionOne = undefined;
	let positionTwo = undefined;
	let mergedHead = undefined;
	
	if (headOne.value < headTwo.value) {
		mergedHead = headOne;
		positionOne = headOne;
		positionTwo = headTwo;
	} else {
		mergedHead = headTwo
		positionOne = headTwo;
		positionTwo = headOne;
	}
	
	while (positionOne !== null && positionTwo !== null) {
		if (positionOne.value <= positionTwo.value
			 && (positionOne.next?.value > positionTwo.value
					|| positionOne.next === null)) {
			nextOne = positionOne.next;
			nextTwo = positionTwo.next;
			positionOne.next = positionTwo;
			positionTwo.next = nextOne;
			positionTwo = nextTwo;
			positionOne = positionOne.next;
		} else {
			positionOne = positionOne.next;
		}
	}
	
	return mergedHead;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.mergeLinkedLists = mergeLinkedLists;
