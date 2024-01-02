import { deleteMiddleNode } from "./delete-middle-node.js";

export default describe('Delete Middle Node', function(){
    it('Should return [1,2,4,5,6,7] for target=3', function(){
        expect(deleteMiddleNode([1,2,3,4,5,6,7], 3)).to.deep.equal([1,2,4,5,6,7]);
    });

    it('Should return [a,b,c,d,f,g] for target=c', function(){
        expect(deleteMiddleNode(['a','b','c','d','e','f','g'], 'e')).to.deep.equal(['a','b','c','d','f','g']);
    });

    it('Should return [1,2,3,4,5,7] for target=6', function(){
        expect(deleteMiddleNode([1,2,3,4,5,6,7], 6)).to.deep.equal([1,2,3,4,5,7]);
    });
});