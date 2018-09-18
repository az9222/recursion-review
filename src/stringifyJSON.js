// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined) {
    return undefined;
  }

  if (obj === null) {
    return "null";
  }

  if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  }

  if (typeof obj === "string") {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    let firstElement = "[";
    let lastIndex = obj.length-1;
    if (obj.length > 0) {
      for (let i = 0; i < obj.length; i++) {
        firstElement += stringifyJSON(obj[i]);
        if (i !== lastIndex) {
          firstElement += ","; 
        }
      }
      return firstElement + "]";
    } else {
      return "[]"
    } 
  }
  
  if (typeof obj=== "object") {
    var firstBracket = "{";
    var objectKeys = Object.keys(obj); //"one", "two", "three"
    var lastIndex = objectKeys.length-1;
    if (objectKeys.length > 0) {
      for (var i = 0; i < objectKeys.length; i++) {
        if (obj[objectKeys[i]] === undefined || typeof obj[objectKeys[i]]  === 'function') {
          return '{}';
        }
        firstBracket += stringifyJSON(objectKeys[i]) + ":" + stringifyJSON(obj[objectKeys[i]]);
        if (i !== lastIndex) {
          firstBracket += ",";
        }
      }
      return firstBracket + "}";
    } else {
      return "{}";
    }
  }
};
