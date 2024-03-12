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
        arr.push(listNode.val !== undefined ? listNode.val ?? listNode.data : null);
        listNode = listNode.next;
    }
    return arr;
};

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
};

ListNode.link2Lists = function(arr1, arr2, pos1, pos2){
    let head1, curr1, head2, curr2, i=0, j=0;
    while (i < arr1.length && j < arr2.length) {
        if(!head1 || !head2){
            head1 = new ListNode(arr1[i]);
            curr1 = head1;

            head2 = new ListNode(arr2[j]);
            curr2 = head2;
            i++;
            j++;
            continue;
        }else if(i===pos1 && j===pos2 && arr1[i] === arr2[j]){
            curr1.next = new ListNode(arr1[i]);
            curr2.next = curr1.next;
            curr1 = curr1.next;
            curr2 = curr2.next;
            i++;
            j++;
            continue;
        }
        
        if(pos1 !== i){
            curr1.next = new ListNode(arr1[i]);
            curr1 = curr1.next;
            i++;
        }
        if(pos2 !== j){
            curr2.next = new ListNode(arr2[j]);
            curr2 = curr2.next;
            j++;
        }
    }
    return [head1, head2];
};
