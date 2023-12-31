/**
 * CCI - 1.2
 * PROBLEM:
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 * HINTS: #1, #84, #122, #131
 * 1) Describe what it means for two strings to be permutations of each other.
 * Now, look at that definition you provided. Can you check the strings against that definition?
 * 2) There is one solution that is 0(N log N) time. Another solution uses some space, but is O(N) time.
 * 3) Could a hash table be useful?
 * 4) Two strings that are permutations should have the same characters, but in different orders. Can you make the orders the same?
 */

export function CheckPermHT (s1, s2) {
    // if(s1.length !== s2.length || s1 === s2){
    //     return false;
    // }
    let obj = {};
    let i = 0;
    while (i < s1.length) {
        obj[s1[i]] = obj[s1[i]] ? obj[s1[i]] + 1 : 1;
        obj[s2[i]] = obj[s2[i]] ? obj[s2[i]] + 1 : 1;
        i++;
    }

    i = 0;
    while (i < s2.length) {
        if((obj[s2[i]] % 2) !== 0){
            return false;
        }
        i++;
    }

    return true;
}