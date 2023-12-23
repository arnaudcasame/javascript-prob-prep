import { search } from "./search-rotated-sorted-array";

export default describe('Search in rotated sorted Array', function(){
    test('Should return 4 for target = 0', function(){
        expect(search([4,5,6,7,0,1,2], 0)).toEqual(4);
    });

    test('Should return -1 for target = 3', function(){
        expect(search([4,5,6,7,0,1,2], 3)).toEqual(-1);
    });

    test('Should return -1 for target = 0', function(){
        expect(search([1], 0)).toEqual(-1);
    });
});