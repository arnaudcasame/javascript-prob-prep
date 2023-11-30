/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export var mergeTwoLists = function(list1, list2) {
    list1 = createListFromArr(list1);
    list2 = createListFromArr(list2);

    if(!list1 || !list2){
        return list1 || list2;
    }

    const tempNode = new ListNode(0);
    let currNode = tempNode;

    while (list1 || list2) {
        // console.log(list1?.val, list2?.val)
        if((list1 && list2 && list1.val > list2.val) || !list1) {
            currNode.next = list2;
            list2 = list2.next;
        }else{
            currNode.next = list1
            list1 = list1.next;
        }
        currNode = currNode.next
    }
    return tempNode.next;
};

export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createListFromArr(arr){
    arr = arr.reverse();
    let list;
    for (const item of arr) {
        const temp = new ListNode(item, list);
        list = temp;
    }
    return list;
}