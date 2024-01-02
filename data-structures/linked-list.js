import { ListNode as Node } from "./list-node.js";

export function LinkedList(){
    this.head = null;
    this.tail = null;
    this.current = null;
}

/**
 * Wraps value in Node and inserts it in head
 * @param {Object} v
 */
LinkedList.prototype.insertNode = function(v){
    const n = new Node(v);
    if(!this.head){
        this.tail = n;
        this.head = n;

    }else{
        this.tail.next = n;
        this.tail = n;
    }
}

/**
 * Traverses LinkedList and prints each value in the console;
 */
LinkedList.prototype.print = function(){
    let current = this.head;
    while(current !== null){
        console.log(current.val);
        current = current.next;
    }
}

/**
 * Removes node with value v from LinkedList
 * @param {Object} v 
 */
LinkedList.prototype.removeNode = function(v){
    let current = this.head;
    while(current.next.val !== v){
        current = current.next;
    }
    current.next = current.next.next;
}

LinkedList.prototype.next = function(){
    if(!this.current){
        this.current = this.head;
    }else{
        this.current = this.current.next;
    }
    return this.current;
};

LinkedList.from = function(array){
    const link = new LinkedList();
    for (const item of array) {
        link.insertNode(item);
    }
    return link;
}

LinkedList.toArray = function(link){
    const arr = new Array();
    let curr = link.head
    while(curr !== null){
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}
