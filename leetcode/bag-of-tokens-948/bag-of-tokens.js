/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
export const bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b)=> a - b);
    let [left, right] = [0, tokens.length-1];
    let [score, maxScore] = [0, 0];

    while (left <= right) {
        if (power >= tokens[left]) { // Face-Up
            power -= tokens[left];
            left++;
            score += 1;
            maxScore = Math.max(maxScore, score);
        } else if (score >= 1) { // Face-Down
            power += tokens[right];
            right--;
            score -= 1;
            maxScore = Math.max(maxScore, score);
        } else {
            break;
        }
    }

    return maxScore;
};
