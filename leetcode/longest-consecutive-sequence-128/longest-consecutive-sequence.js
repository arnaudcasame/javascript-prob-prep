/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestConsecutive = function(nums) {
    let latestStreak = 0;
    let dict = {};

    for (const num of nums) {
        dict[num] = 1;
    }

    for (const num of nums) {
        if(!dict[num-1]){
            let currNum = num;
            let currStreak = 1;

            while(dict[currNum+1]){
                currNum++;
                currStreak++;
            }
            
            latestStreak = Math.max(latestStreak, currStreak);
        }
    }
    
    return latestStreak;
};