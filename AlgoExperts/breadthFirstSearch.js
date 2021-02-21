// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let current = undefined;
		let queue = [];
		let results = [];
		
		if (this.children.length > 0) {
			queue.push(this);
			
			while (queue.length > 0) {
				let current = queue.shift();
				
				results.push(current.name);
				
				for (let i = 0; i < current.children.length; i++) {
					queue.push(current.children[i]);
				}
			}
			
			return results;
		} else {
			return [];
		}
  }
}

// Do not edit the line below.
exports.Node = Node;
