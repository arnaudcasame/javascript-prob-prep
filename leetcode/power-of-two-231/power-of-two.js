/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfTwo = function(n) {
    return n > 0 && (n & (n-1)) === 0;
};
