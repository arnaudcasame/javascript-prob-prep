/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = function(nums, target) {
    let indice = Math.floor(nums.length/2);
    let range = [0, nums.length];
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (target > nums[indice-1] && target < nums[indice] || target === nums[indice] || target < nums[indice] && !nums[indice-1]) { 
            return indice;
        } else if (target > nums[indice] && target < nums[indice+1] || target > nums[indice] && !nums[indice+1]) { 
            return indice + 1;
        } else if (target < nums[indice]) {
            range[1] = indice; 
            indice = Math.floor((range[1] + range[0])/2);
        } else if (nums[indice] < target) {
            range[0] = indice;
            indice = Math.floor((range[1] + range[0])/2);
        }
    }
};