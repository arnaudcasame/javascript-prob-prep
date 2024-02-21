/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function(nums1, nums2) {
    let [i, j] = [0, 0];
    const bucket = [];
    const n = nums1.length + nums2.length;
    const limit = parseInt(n/2)+1;

    while (i< nums1.length && j < nums2.length && bucket.length < limit) {
        if (nums1[i] < nums2[j]) {
            bucket.push(nums1[i]);
            i++;
        } else {
            bucket.push(nums2[j]);
            j++;
        }
    }

    while (i< nums1.length && bucket.length < limit) {
        bucket.push(nums1[i]);
        i++;
    }

    while (j < nums2.length && bucket.length < limit) {
        bucket.push(nums2[j]);
        j++;
    }
    // console.log(bucket);
    return n%2 === 0 ? (bucket[limit-1] + bucket[limit-2])/2 : bucket[limit-1];
};
