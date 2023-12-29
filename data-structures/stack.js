export class Stack {
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