import { sumLists, sumListsForward } from "./sum-lists";
import { ListNode } from "../../../data-structures/list-node";

export default describe('Sum Lists (Linked-List)', function(){
    it('Should Return (2)(1)(9)', function(){
        const list1 = ListNode.fromArray([7,1,6]);
        const list2 = ListNode.fromArray([5,9,2])
        expect(sumLists(list1, list2)).toEqual('(2)(1)(9)');
    });

    it('Should Return (2)(1)(1)(1)', function(){
        const list1 = ListNode.fromArray([7,1,6]);
        const list2 = ListNode.fromArray([5,9,4])
        expect(sumLists(list1, list2)).toEqual('(2)(1)(1)(1)');
    });

    // Follow Up test with the digits stored in FORWARD-ORDER
    it('Should Return (9)(1)(2) [Forward-Order]', function(){
        const list1 = ListNode.fromArray([6,1,7]);
        const list2 = ListNode.fromArray([2,9,5])
        expect(sumListsForward(list1, list2)).toEqual('(9)(1)(2)');
    });

    it('Should Return (1)(1)(1)(2) [Forward-Order]', function(){
        const list1 = ListNode.fromArray([6,1,7]);
        const list2 = ListNode.fromArray([4,9,5]);
        expect(sumListsForward(list1, list2)).toEqual('(1)(1)(1)(2)');
    });
});
