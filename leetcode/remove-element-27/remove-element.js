/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = function(nums, val) {
    let tracker = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            nums[tracker] = nums[i];
            tracker++;
        }
    }
    nums.splice(tracker);
    return nums;
};

/**
* @param {number[]} nums
* @param {number} val
* @return {number}
*/
export const removeElement2 = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === val){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};