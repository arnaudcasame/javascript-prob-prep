/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const longestOnes = function(nums, k) {
    let [i, j] = [0, 0];
    let count = 0;

    while (i < nums.length) {
        if (nums[i] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[j] === 0) {
                k++;
            }
            j++;
        }
        i++;
        count = Math.max(count, i-j);
    }

    return count;
};
