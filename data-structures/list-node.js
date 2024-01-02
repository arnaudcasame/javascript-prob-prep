import { uuidv4 } from "../helpers/uuid.js";
export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.ref = uuidv4();
}

ListNode.prototype.toString = function(){
    let result = '';
    let head = this;
    while(head){
        result += `(${head.val})`;
        head = head.next;
    }
    return result;
}

ListNode.toArray =  function(listNode){
    const arr = [];
    while(listNode){
        arr.push(listNode.val ?? listNode.data);
    }
}

ListNode.fromArray = function(arr){
    let head;
    let curr;
    for (const item of arr) {
        if(!head){
            head = new ListNode(item);
            curr = head;
            continue;
        }
        curr.next = new ListNode(item);
        curr = curr.next;
    }
    return head;
}