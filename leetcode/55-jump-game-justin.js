/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastIndex = nums.length -1;
    let zeroIndex = null;
    let result = true;

    if (nums.length === 1) {
        return true;
    }
    if (nums[0] === 0) {
        return false;
    }
    for (let i = nums.length - 2; i >= 0; i -- ) {

        if (zeroIndex !== null) {
            if (nums[i] + i > zeroIndex){
                zeroIndex = null;
                result = true;
            } else {
                result = false;
            }
        }
        if (nums[i] === 0 && zeroIndex === null) {
            zeroIndex = i;

        }
    }
    return result;
};