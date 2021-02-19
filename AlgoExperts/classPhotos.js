function classPhotos(redShirtHeights, blueShirtHeights) {
  let front = undefined;
	let back = undefined;
	
	redShirtHeights.sort((a, b) => b - a);
	blueShirtHeights.sort((a, b) => b - a);
	
	if (blueShirtHeights[0] > redShirtHeights[0]) {
		back = blueShirtHeights;
		front = redShirtHeights;
	} else {
		back = redShirtHeights;
		front = blueShirtHeights;
	}
	
	for (let i = 0; i < back.length; i++) {
		if (back[i] <= front[i]) {
			return false;
		}
	}
	
  return true;
}

/*
red = [8, 5, 4, 3, 1]
blue = [9, 6, 5, 4, 2]

9 > 8?
6 > 5?
5 > 4?
4 > 3?
2 > 1?
*/

// Do not edit the line below.
exports.classPhotos = classPhotos;
