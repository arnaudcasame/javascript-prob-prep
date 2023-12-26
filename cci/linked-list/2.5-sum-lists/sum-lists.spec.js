import { sumLists } from "./sum-lists";

export default describe('Sum Lists (Linked-List)', function(){
    xtest('title', function(){
        expect(sumLists([], [])).toEqual(0);
    });
});