/**
 * @param {string} s
 * @return {string}
 */
export const maximumOddBinaryNumber = function(s) {
    const arr = s.split('');
    let left = 0;
    let right = 0;
    while (right <= arr.length-1) {
        if (arr[right] === '1') {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }

        right++;
    }
    [arr[left-1], arr[arr.length-1]] = [arr[arr.length-1], arr[left-1]];
    // console.log(s, left, arr.join(''));
    return arr.join('');
};
