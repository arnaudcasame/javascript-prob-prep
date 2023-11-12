/**
 * const A = [13, 27, 35, 40, 49, 55, 59];
 * const B = [17, 35, 39, 40, 55, 58, 60];
 * Returns the common members of two different sets in Array
 * @param {Array<number>} arr1 First set of numbers
 * @param {Array<number>} arr2 Second set of numbers
 * @return {number[]} The common elements of both sets
 */
export const commonSetMembers = function(arr1, arr2){
    const result = [];
    let j = 0;
    for (let i = 0; i < arr2.length; i++) {
        while(j < arr1.length) {
            const num1 = arr1[j]
            const num2 = arr2[i];
            if(num2 > num1) {
                j++;
            }else if(num2 < num1){
                break;
            }
            // console.log(num1, num2);
            if(num1 === num2) {
                result.push(num2);
                j = i;
                break;
            }
        }
    }
    return result;
}