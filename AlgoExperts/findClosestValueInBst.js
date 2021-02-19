function valueIsCloser(value, closest, target) {
  console.log(`Value, Closest, Target: ${value} ${closest} ${target}`)
  return Math.abs(value - target) < Math.abs(closest - target);
}

function findClosestValueInBst(tree, target, closest = tree.value) {
  let { value } = tree;

  if (valueIsCloser(value, closest, target)) {
    closest = value;
  }

  if (value === target) {
    return value;
  } else if (target < value) {
    if (tree.left) {
      return findClosestValueInBst(tree.left, target, closest);
    } else {
      return closest;
    }
  } else {
    if (tree.right) {
      return findClosestValueInBst(tree.right, target, closest);
    } else {
      return closest;
    }
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
