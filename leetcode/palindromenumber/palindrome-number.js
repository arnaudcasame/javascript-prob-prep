/**
 * @param {number} x
 * @return {boolean}
 */
export const numberIsPalindrome = function(x) {
    let rev = '';
    const y = x+''; 
    for (let i = 0; i < y.length; i++) {
        rev += y[(y.length - 1) - i];
    }
    rev = parseInt(rev);
    return rev === x;
};

export const numberIsPalindromeNoString = function(x) {
    let y = x;
    let rev = 0;
    while(y > 0){
        const rem = y % 10;
        y = Math.floor(y / 10);
        rev = (rev * 10) + rem;
    }
    return rev === x;
};
