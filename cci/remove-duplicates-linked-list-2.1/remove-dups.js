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
export const removeDupsNoBuffer = function(list){};