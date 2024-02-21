/**
 * @param {number[]} nums
 * @return {number}
 */
export const largestPerimeter = function(nums) {
    nums.sort((a, b)=> a -b);
    let sum = 0;
    let longestSide = 0;
    let max = -1;
    for (const num of nums) {
        sum += num;
    }

    for (let i = nums.length-1; i > 0; i--) {
        longestSide = nums[i];
        sum = sum - longestSide;
        if (longestSide < sum) {
            max = Math.max(max, longestSide+sum);
        }
    }
    return max;
};
