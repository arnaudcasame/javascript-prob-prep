/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxProductDifference = function(nums) {
    let max = 0;
    let min = null;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            max = Math.max(nums[i]*nums[j], max);
            min = !min ? nums[i]*nums[j] : Math.min(nums[i]*nums[j], min);
        }
    }
    return max - min;
};

export const maxProductDifferenceO = function(nums) {
    let max1 = 0;
    let min1 = 0;
    let max2 = 0;
    let min2 = 0;
    for (const num of nums) {
        if(!min1 || num < min1){
            min1 = num;
        }

        if(!min2 || min1 < min2){
            [min1, min2] = [min2, min1];
        }

        if(num > max1){
            max1 = num;
        }

        if(max1 > max2){
            [max1, max2] = [max2, max1];
        }
    }
    return (max1*max2) - (min1*min2);
};