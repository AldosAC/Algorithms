// Solution 1:
// Time: O(n^2)
// Space: O(1)
function waterAreaUnOptimized(heights) {
	let waterVolume = 0;
  let currentHighest = 0;
	let currentDepth = 0;
	let nextHighest = 0;
	let i = 0;
	
	while (i < heights.length - 1) {
		if (heights[i] > currentDepth) {
			currentHighest = i;
			nextHighest = findNextHighest(i, heights);
			if (nextHighest < 0) {
				break;
			} else {
				i = nextHighest;
			}
			waterVolume += findVolume(currentHighest, nextHighest, heights);
			currentHighest = nextHighest - 1;
			currentDepth = heights[currentHighest];
		} else {
			i++
		}
	}
	return waterVolume;
}

function findNextHighest(current, heights) {
	let currentDepth = heights[current];
	let highestSoFar = current + 1;
	
	for (let i = current + 1; i < heights.length; i++) {
		if (heights[i] >= heights[highestSoFar]) {
			highestSoFar = i;
			if (heights[i] > currentDepth) {
				return i;
			}
		}
	}
	return highestSoFar;
}

function findVolume(currentHighest, nextHighest, heights) {
	let volume = 0;
	let waterLine = heights[currentHighest] > heights[nextHighest] 
		? heights[nextHighest]
		: heights[currentHighest];
	
	for (let i = currentHighest + 1; i < nextHighest; i++) {
		volume += waterLine - heights[i];
	}
	
	return volume;
}


// Solution 2:
// Time: O(n)
// Space: O(1)
function waterArea(heights) {
  let leftIndex = 0;
	let leftMax = heights[leftIndex];
	let rightIndex = heights.length - 1;
	let rightMax = heights[rightIndex];
	let volume = 0;
	
	while (leftIndex < rightIndex) {
		if (leftMax <= rightMax) {
			leftIndex++;
			if(heights[leftIndex] > leftMax) {
				leftMax = heights[leftIndex];
			} else {
				volume += leftMax - heights[leftIndex];
			}
		} else {
			rightIndex--;
			if (heights[rightIndex] > rightMax) {
				rightMax = heights[rightIndex];
			} else {
				volume += rightMax - heights[rightIndex];
			}
		}
	}
	
	return volume;
}

// Do not edit the line below.
exports.waterArea = waterArea;
