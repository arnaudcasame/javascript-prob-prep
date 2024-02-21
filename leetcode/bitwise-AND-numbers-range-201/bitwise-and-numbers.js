/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
export const rangeBitwiseAnd = function(left, right) {
    let rightShiftCount = 0;
    while (left < right) {
        left >>= 1;
        right >>= 1;
        rightShiftCount++;
    }
    return left << rightShiftCount;
};
