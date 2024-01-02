import { ListNode } from "../../../data-structures/list-node.js";

export const sumLists = function(list1, list2){
    let remain = 0, head, curr;
    while(list1 && list2){
        if(!head){
            head = new ListNode(((list1.val+list2.val+remain)%10));
            curr = head;
        }else{
            curr.next = new ListNode(((list1.val+list2.val+remain)%10))
            curr = curr.next;
        }
        remain = Math.floor((list1.val+list2.val+remain)/10);
        list1 = list1.next;
        list2 = list2.next;
    }
    if(remain){
        curr.next = new ListNode(remain);
        curr = curr.next;
    }
    return head.toString()
}

export const sumListsForward = function(list1, list2){
    let remain = 0, head, curr, pre;
    while(list1 && list2){
        remain = Math.floor((list1.val + list2.val + remain)/10);
        if(!head){
            head = remain ? new ListNode(remain, new ListNode((list1.val + list2.val)%10)) : new ListNode((list1.val + list2.val)%10);
            curr = head.next ? head.next : head;
        }else{
            pre = curr;
            pre.val = pre.val + remain;
            curr.next = new ListNode((list1.val + list2.val)%10);
            curr = curr.next;
        }
        list1 = list1.next;
        list2 = list2.next;
    }
    return head.toString()
}