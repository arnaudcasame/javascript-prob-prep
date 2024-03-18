/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestSubarray = function(nums) {
    let [i, j] = [0, 0];
    let k = 1;
    while (i < nums.length) {
        if (nums[i]===0) {
            k--;
        }

        if (k < 0) {
            if (nums[j]===0) {
                k++;
            }
            j++;
        }
        i++;
    }
    return i-j-1;
};
