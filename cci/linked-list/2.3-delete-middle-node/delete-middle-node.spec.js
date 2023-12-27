import { deleteMiddleNode } from "./delete-middle-node";

export default describe('Delete Middle Node', function(){
    test('Should return [1,2,4,5,6,7] for target=3', function(){
        expect(deleteMiddleNode([1,2,3,4,5,6,7], 3)).toEqual([1,2,4,5,6,7]);
    });

    test('Should return [a,b,c,d,f,g] for target=c', function(){
        expect(deleteMiddleNode(['a','b','c','d','e','f','g'], 'e')).toEqual(['a','b','c','d','f','g']);
    });

    test('Should return [1,2,3,4,5,7] for target=6', function(){
        expect(deleteMiddleNode([1,2,3,4,5,6,7], 6)).toEqual([1,2,3,4,5,7]);
    });
});