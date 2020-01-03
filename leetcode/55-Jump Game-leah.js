/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var last = 0;
    var curr = 0;

    var len = nums.length;
    for(var i=0;i<len;i++){

        if(i>curr){
            return false;
        }

        if(i>last){
            last=curr;
        }
        curr=Math.max(curr,i+nums[i]);
    }
    return true;
};

console.log(canJump([2,3,1,1,4]));

