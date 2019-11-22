/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = new Set(nums.sort((a, b) =>  b - a));

    const length = set.size >= 3 ? 3 : 1;
    const values = set.values();
    let value;
    for(let i = 0; i < length; i++) {
        value = values.next().value;
    }
    return value;
};
