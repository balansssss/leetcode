/*
2705. Compact Object

Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 

Constraints:

obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106
*/


/*
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
/*var compactObject = function(obj) {
    function iterationArr(localObj) {
        for (k in localObj) {
            const value = localObj[k];
            if (value) {
                if (typeof value === 'object') {
                    iterationArr(value);
                }
            } else {
                if (Array.isArray(localObj)) {
                    localObj.splice(k, 1);
                    iterationArr(localObj);
                } else {
                    delete localObj[k];
                }
            }
        }
    }

    iterationArr(obj);
    return obj;
};
*/

var compactObject = function(obj) {
    let result = {};
    if (Array.isArray(obj)) {
        result = [];
    }

    function iterationArr(localObj, curObj) {
        for (let k in localObj) {
            const value = localObj[k];
            if (value) {
                if (typeof value === 'object') {
                    if (Array.isArray(value)) {
                        if (Array.isArray(curObj)) {
                            curObj.push([]);
                            iterationArr(value, curObj[curObj.length - 1]);
                        } else {
                            curObj[k] = [];
                            iterationArr(value, curObj[k]);
                        }
                    } else {
                        if (Array.isArray(curObj)) {
                            curObj.push({});
                            iterationArr(value, curObj[curObj.length - 1]);
                        } else {
                            curObj[k] = {};
                            iterationArr(value, curObj[k]);
                        }
                    }
                } else {
                    if (Array.isArray(curObj)) {
                        curObj.push(value);
                    } else {
                        curObj[k] = value;
                    }
                }
            }
        }
    }

    iterationArr(obj, result);
    return result;
};

console.log(compactObject({ "a": null, "b": [false, 1] }))
//console.log('---')
console.log(compactObject([null, 0, false, 1]))
console.log(compactObject([null, 0, 5, [0], [false, 16]]))