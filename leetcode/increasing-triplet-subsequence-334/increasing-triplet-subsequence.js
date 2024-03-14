/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const increasingTriplet = function(nums) {
    let minimum = Infinity;
    let medium = Infinity;

    for (const num of nums) {
        if (num <= minimum) {
            minimum = num;
        } else if (num <= medium) {
            medium = num;
        } else {
            return true;
        }
    }
    return false;
};
