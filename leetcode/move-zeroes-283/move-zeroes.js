/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let [i, j] = [0, 1];

    while (i<nums.length && j<nums.length) {
        if (i < j && nums[j] !== 0 && nums[i] === 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            i++;
            j++;
            continue;
        }

        if (nums[i] !== 0) {
            i++;
        }

        if (nums[i] === 0 && (nums[j] === 0 || j < i)) {
            j++;
        }
    }
};


export default {
    moveZeroes: moveZeroes,
};
