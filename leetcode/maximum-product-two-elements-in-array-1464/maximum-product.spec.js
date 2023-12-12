import { maxProduct } from "./maximum-product";


export default describe('Maximum Product of Two Elements in an Array', function(){
    test('Should return 12 for [3,4,5,2]', function(){
        expect(maxProduct([3,4,5,2])).toEqual(12);
    });
});