/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key, value) {
    if (size + 1 > storageLimit * .75) {
      this.rehash('double');
    }

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var tuple = this.newTuple(key, value);
    var bucket = [];

    if (storage[index] ===  undefined) {
      bucket.push(tuple);
    } else {
      bucket = storage[index];
      let notDuplicate = true;
      for (let i = 0; i < bucket.length; i++) {
        if (key === bucket[i][0]) {
          bucket[i][1] = value;
          notDuplicate = false;
        }
      }
      if (notDuplicate) {
        bucket.push(tuple);
      }
    }

    storage[index] = bucket;
    size++;
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    
    if(bucket === undefined) {
      return undefined;
    }

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if(bucket === undefined) {
      return;
    } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
        }
      }
    }
    size--;

    if (size < storageLimit * .25) {
      this.rehash('half');
    }

  };

  result.newTuple = function (key, value) {
    var tuple = [];
    tuple.push(key);
    tuple.push(value);
    return tuple;
  };

  result.rehash = function (doubleOrHalf) {
    var tuples = [];

    //pull all tuples from storage
    for (let i = 0; i < storage.length; i++) {
      if (storage[i] !== undefined) {
        for (let j = 0; j < storage[i].length; j++) {
          tuples.push(storage[i][j]);
        }
      }
    }

    //assign storage to a new array
    storage = [];
    
    //reset size
    size = 0;

    //adjust storageLimit
    if (doubleOrHalf === 'half') {
      storageLimit = storageLimit / 2;
    } else {
      storageLimit = storageLimit * 2;
    }
    
    //re-insert the tuples in our new resized array
    for (let i = 0; i < tuples.length; i++) {
      this.insert(tuples[i][0], tuples[i][1]);
    }
  }  

  return result;
};