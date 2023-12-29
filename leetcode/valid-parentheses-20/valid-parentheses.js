/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function(s) {
    
};

function isOpenTerm(p) {
    const opens = '([{';
    for (const open of opens) {
        if(open === p){
            return true;
        }
    }
    return false;
}

function matches(open, closed){
    const parentheses = '(){}[]';
    for (let i = 0; i < parentheses.length; i++) {
        const opening = parentheses[i];
        const closing = parentheses[i+1];

        if(open === opening && closed === closing){
            return true;
        }
    }
    return false;
}