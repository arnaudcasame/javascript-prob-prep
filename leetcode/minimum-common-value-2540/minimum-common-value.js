/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const getCommon = function(nums1, nums2) {
    const bucket = new Set(nums2);
    for (const num of nums1) {
        if (bucket.has(num)) {
            return num;
        }
    }
    return -1;
};
