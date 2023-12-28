import { sumLists } from "./sum-lists";
import { ListNode } from "../../../data-structures/list-node";

export default describe('Sum Lists (Linked-List)', function(){
    test('Should Return (9)(1)(2)', function(){
        const list1 = ListNode.fromArray([7,1,6]);
        const list2 = ListNode.fromArray([5,9,2])
        expect(sumLists(list1, list2)).toEqual('(2)(1)(9)');
    });

    test('Should Return (2)(1)(1)(1)', function(){
        const list1 = ListNode.fromArray([7,1,6]);
        const list2 = ListNode.fromArray([5,9,4])
        expect(sumLists(list1, list2)).toEqual('(2)(1)(1)(1)');
    });
});