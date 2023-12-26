import { LinkedList } from "../../../data-structures/linked-list";
/** 
 * Returns the Kth element to Last of the array
 * @param {number[]} arr 
 * @return {number[]}
 */
export const kthToLast = function(arr, kth){
    const ll = LinkedList.from(arr);
    let scanNode = ll.head;
    let i = 1;
    arr = [];
    while(scanNode){
        scanNode = scanNode.next;
        i++;
    }
    let listNode = ll.head;
    while(listNode){
        if(i-1 <= kth){
            break;
        }
        listNode = listNode.next;
        i--;
    }
    // console.log(listNode, kth);
    return LinkedList.toArray(listNode);
}