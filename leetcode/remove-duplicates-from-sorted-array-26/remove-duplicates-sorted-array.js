/**
 * @param {number[]} nums
 * @return {number}
 */
export var removeDuplicates = function(nums) {
    let latest = -150;
    for(let i=0; i < nums.length; i++){
        if(latest !== nums[i]){
            latest = nums[i];
        }else{
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};