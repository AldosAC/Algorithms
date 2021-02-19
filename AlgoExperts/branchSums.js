// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateBranches(tree, count, sums) {
	let hasBranches = tree.left || tree.right;
	
	count += tree.value;
	
	if (hasBranches) {
		if (tree.left) {
			calculateBranches(tree.left, count, sums);
	}
		if (tree.right) {
			calculateBranches(tree.right, count, sums);
		}
	} else {
		sums.push(count);
	}
}

function branchSums(root) {
  let sums = [];
	let count = 0;
	
	calculateBranches(root, count, sums);
	
	return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
