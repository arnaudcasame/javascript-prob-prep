/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxProduct = function(nums) {
    let i=0;
    let max1 = 0;
    let max2 = 0;
    while(i < nums.length){
        if(nums[i] > max1){
            max1 = nums[i];
        }
        if(max2 < max1){
            const temp = max2;
            max2 = max1;
            max1 = temp;
        }
        i++;
    }
    return (max1 - 1) * (max2 - 1);
};