/**
 * @param {string} s
 * @return {number}
 */
export const minimumLength = function(s) {
    let [left, right] = [0, s.length-1];
    while (left < right) {
        if (s[left] === s[right]) {
            if (s.length === 2) {
                s = '';
                left = 1;
                right = 0;
                continue;
            }

            const letter = s[left];

            while (s[left] === letter && right >= left) {
                left++;
            }

            while (s[right] === letter && right >= left) {
                right--;
            }

            // console.log(s.substring(left, right+1));

            s = s.substring(left, right+1);
            left = 0;
            right = s.length-1;
        } else {
            break;
        }
    }
    // console.log(s, left, right);
    return s.length;
};
