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

    getTop(){
        return this.data_[this.data_.length-1];
    }
}