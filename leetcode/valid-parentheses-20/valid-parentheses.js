/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function(s) {
    const stack = new Stack();
    for (const p of s) {
        if(isOpenTerm(p)){
            stack.push(p);
        }else{
            if(stack.isEmpty() || !matches(stack.pop(), p)) {
                return false;
            }
        }
    }
    return stack.isEmpty();
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

class Stack {
    constructor(){
        this.data_ = [];
    }

    push(element){
        this.data_.push(element)
    }

    pop(){
        return this.data_.pop();
    }

    isEmpty(){
        return this.data_.length === 0;
    }
}