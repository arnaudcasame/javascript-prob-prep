/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function(s) {
    return false;
};

/**
 * Checks if Character Sequence is an open term
 * @param {string} p Consist of an open parenthese,
 * bracket or a curly brace
 * @return {boolean} true if p is an open term
 * & false otherwise
 */
function isOpenTerm(p) {
    const opens = '([{';
    for (const open of opens) {
        if (open === p) {
            return true;
        }
    }
    return false;
}

/**
 * Given an open term, it verifies whether or not the
 * closed term matches it
 * @param {string} open Basically a Character Sequence
 * that consists of a ([{
 * @param {string} closed Basically a Character Sequence
 * that consists of a closing )]}
 * @return {boolean} true if open and closed match
 * & false otherwise
 */
function matches(open, closed) {
    const parentheses = '(){}[]';
    for (let i = 0; i < parentheses.length; i++) {
        const opening = parentheses[i];
        const closing = parentheses[i+1];

        if (open === opening && closed === closing) {
            return true;
        }
    }
    return false;
}
