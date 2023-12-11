/**
 * @param {number[]} arr
 * @return {number}
 */
export const findSpecialInteger = function(arr) {
    const threshold = Math.floor(arr.length * 0.25);
    let counter = 0, track = -1000;
    for (const num of arr) {
        if(num === track){
            counter += 1;
            if(counter > threshold){
                return track;
            }
        }else{
            counter = 1;
            track = num;
        }
    }
    return 0;
};