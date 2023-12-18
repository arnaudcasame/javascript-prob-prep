import { maxProductDifference, maxProductDifferenceO } from "./maximum-product-2-pairs";

export default describe('Maximum Product Difference between 2 pairs ', function(){
    test('Should return 34 for [5,6,2,7,4]', function(){
        expect(maxProductDifference([5,6,2,7,4])).toEqual(34);
    })

    test('Should return 34 for [5,6,2,7,4]', function(){
        expect(maxProductDifferenceO([5,6,2,7,4])).toEqual(34);
    })

    test('Should return 64 for [4,2,5,9,7,4,8]', function(){
        expect(maxProductDifference([4,2,5,9,7,4,8])).toEqual(64);
    })

    test('Should return 64 for [4,2,5,9,7,4,8]', function(){
        expect(maxProductDifferenceO([4,2,5,9,7,4,8])).toEqual(64);
    })
});