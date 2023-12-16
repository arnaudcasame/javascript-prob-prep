/**
 * @param {string} s
 * @return {number}
 */
export const maxPower = function(s) {
    let [i, j] = [0, 1];
    let latestStreak = 1;
    while(i<s.length){
        if(s[i] !== s[j]){
            i = j;
            j++;
        }else{
            latestStreak = Math.max(latestStreak, j-i+1);
            j++;
        }
    }
    return latestStreak;
};