import { ListNode } from "../../../data-structures/list-node.js";
export const partition = function(arr, target){
    let head = ListNode.fromArray(arr);
    // Solution implementation
    let curr = head;
    while(curr){
        if(curr.next && curr.next.val < target){
            const temp = curr.next;
            curr.next = curr.next.next;
            temp.next = head;
            head = temp;
            continue;
        }
        curr = curr.next;
    }
    return head.toString();
}