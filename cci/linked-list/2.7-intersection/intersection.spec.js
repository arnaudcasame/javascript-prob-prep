import { intersect  } from "./intersection";

export default describe('Intersection of 2 LinkedLists', function(){
    xtest('title', function(){
        expect(intersect([], [])).toEqual(0);
    });
});