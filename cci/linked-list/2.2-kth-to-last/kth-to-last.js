import { ListNode } from "../../../data-structures/list-node";
/** 
 * Returns the Kth element to Last of the array
 * @param {number[]} arr 
 * @return {number[]}
 */
export const kthToLast = function(arr, kth){
    let head;
    let current;
    for (const num of arr) {
        if(!head){
            head = new ListNode(num);
            current = head;
        }else{
            current.next = new ListNode(num);
        }
    }
    console.log(current)
    return arr
}