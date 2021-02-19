function nodeDepths(root, depth = 0) {
  let sum = depth;
	
	if (root === null) {
		return 0;
	} else {
		sum += nodeDepths(root.left, depth + 1);
		sum += nodeDepths(root.right, depth + 1);
	}
	return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
