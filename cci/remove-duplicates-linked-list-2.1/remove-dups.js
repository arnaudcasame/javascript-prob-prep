import { LinkedList } from "../../data-structures/linked-list";

export const removeDups = function(list){
    const link = LinkedList.from(list);
    const s = new Set();
    while(link.next()){
        if(s.has(link.current.val)){
            link.removeNode(link.current.val);
        }else{
            s.add(link.current.val)
        }
    }
    return LinkedList.toArray(link);
};

// No extra buffer to solve it
export const removeDupsNoBuffer = function(list){
    const link = LinkedList.from(list);
    let current = link.head;
    while(current){
        let runner = current;
        while(runner.next !== null){
            if(current.val === runner.next.val){
                runner.next = runner.next.next;
                continue;
            }
            runner = runner.next;
        }
        current = current.next;
    }
    return LinkedList.toArray(link);
};