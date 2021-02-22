// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
		this.size = 0;
		this.storage = {};
		this.history = [];
  }

  insertKeyValuePair(key, value) {
		let { maxSize, storage, history } = this;
		
		if (!storage[key]) {
			history.push(key);
			this.size++;
		} else {
			let histIndex = history.indexOf(key);
			history.splice(histIndex, 1);
			history.push(key);
		}
		
    storage[key] = value;
		
		if (this.size > maxSize) {
			let leastRecent = history.shift();
			storage[leastRecent] = undefined;
			this.size--;
		}
		
		console.log(`history insert: ${JSON.stringify(history)}`)
  }

  getValueFromKey(key) {
  	let { storage, history } = this;
		
		if (storage[key]) {
			let histIndex = history.indexOf(key);
			history.splice(histIndex, 1);
			history.push(key);
			
			console.log(`history getVal: ${JSON.stringify(history)}`)
			return storage[key];
		} else {
			return null;
		}
  }

  getMostRecentKey() {
		let { history } = this;
    let mostRecentIndex = history.length - 1;
		return history[mostRecentIndex];
  }
}

// Do not edit the line below.
exports.LRUCache = LRUCache;
