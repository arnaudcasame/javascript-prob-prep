import { ListNode } from "../../../data-structures/list-node.js";
import { LinkedList } from '../../../data-structures/linked-list.js';
export const deleteMiddleNode = function(arr, target){
    // Building the ListNode structure
    let head;
    let current;
    for (const item of arr) {
        if(!head){
            head = new ListNode(item);
            current = head;
        }else{
            current.next = new ListNode(item);
            current = current.next;
        }
    }
    // Removing the target node
    current = head;
    while(current.next.val !== target){
        current = current.next;
    }
    current.next = current.next.next;
    
    return LinkedList.toArray(head);
}