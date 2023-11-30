import { mergeTwoLists, ListNode } from './merge-two-lists';


export const mergeTwoLists_ = 
describe('Merge Two Lists', function(){
    test('Should return [1, 1, 2, 3, 4, 4] for [1,2,4], [1,3,4]', function(){
        expect(mergeTwoLists([1,2,4], [1,3,4])).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))))
    });

    test('Should return empty Array for [], []', function(){
        expect(mergeTwoLists([], [])).toBeUndefined
    });

    test('Should return [0] for [], [0]', function(){
        expect(mergeTwoLists([], [0])).toEqual(new ListNode(0));
    });
})