/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    /*let countElements = {};

    for (let i=0;i<nums.length;i++) {
        if (countElements[nums[i]]) {
            countElements[nums[i]] = countElements[nums[i]] + 1;
        } else {
            countElements[nums[i]] = 1;
        }
    }

    let maxVal = 0;
    let maxKey = 0;

    for (let key in countElements) {
        if (countElements[key] > maxVal) {
            maxKey = key;
            maxVal = countElements[key];
        }
    }

    return maxKey;*/
    
    const unique = new Set(nums);
    const counts = [];

    for (const val of unique) {
        counts.push(nums.filter(i => i === val).length);
    }
    const max = Math.max(...counts);

    return Array.from(unique)[counts.indexOf(max)];
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([6,6,6,7,7]))
console.log(majorityElement([8,8,7,7,7]))