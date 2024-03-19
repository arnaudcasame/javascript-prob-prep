/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findMaxAverage = function(nums, k) {
    let [i, j] = [0, 0];
    let total = 0;
    let avg = -Infinity;
    const n = k;

    while (i < nums.length) {
        k--;
        total += nums[i];
        if (k < 0) {
            total -= nums[j];
            k++;
            j++;
        }
        i++;
        avg = k < 1 ? Math.max(avg, total/n) : -Infinity;
    }
    return +avg.toFixed(5);
};
