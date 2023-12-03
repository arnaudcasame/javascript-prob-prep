/**
 * @param {number[]} digits
 * @return {number[]}
 */
export const plusOne = function(digits) {
    let rem = 1;
    const res = []
    for (let i = 0; i < digits.length; i++) {
        const indice = digits.length -1 - i;
        const curr = (digits[indice] + rem) % 10;
        rem = Math.floor((digits[indice] + rem) / 10);
        if(i === (digits.length-1) && rem > 0){
            res.unshift(rem, 0)
        } else {
            res.unshift(curr);
        }
    }
    return res;
};