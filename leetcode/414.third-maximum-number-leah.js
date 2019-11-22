var thirdMax = function(nums) {
    var max=null;
    var second=null;
    var third=null;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=max&&nums[i]!=second&&nums[i]!=third){
            if(max==null||nums[i]>max){
                third=second;
                second=max;
                max=nums[i];
            }else if(second==null||nums[i]>second&&nums[i]<max){
                third=second;
                second=nums[i];
            }else if(third==null||nums[i]>third&&nums[i]<second){
                third=nums[i];
            }
        }
    }
    return third!=null?third:max;
};
