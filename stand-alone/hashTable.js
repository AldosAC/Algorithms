/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1

/*

let hashTable = makeHashTable();

hashTable.insert("five", 5);
hashTable.insert("six", 6);
hashTable.insert("seventyEight", 78);
hashTable.insert("two", 2);
hashTable.insert("twelve", 12);
hashTable.insert("seven", 7);
hashTable.insert("fourteen", 14);
hashTable.insert("nine", 9);

let two = hashTable.retrieve("two");
let twelve = hashTable.retrieve("twelve");
let seventyEight = hashTable.retrieve("seventyEight");

let fiveExists = (hashTable.retrieve("five") === 5);
let five = hashTable.remove("five");
let fiveDoesNotExist = (hashTable.retrieve("five") === undefined);

*/

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
  var storageLimit = 1000;

  result.insert = function(key, value) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let tuple = [value, key]
    let bucket = storage[index];

    if (!bucket) {
      bucket = [];
      bucket.push(tuple);
    } else {
      let doesNotExist = true;

      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][1] === key) {
          bucket[i][0] = value;
          doesNotExist = false;
          break;
        }
      }

      if (doesNotExist) {
        bucket.push(tuple);
      }
    }

    storage[index] = bucket;
  };

  result.retrieve = function(key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[index];
    let value = undefined;

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][1] === key) {
          value = bucket[i][0];
          break;
        }
      }
    }

    return value;
  };

  result.remove = function(key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][1] === key) {
          let value = bucket[i][0];
          bucket = bucket.splice(i, 1);
          return value;
        }
      }
    }

    return undefined;
  };

  return result;
};
