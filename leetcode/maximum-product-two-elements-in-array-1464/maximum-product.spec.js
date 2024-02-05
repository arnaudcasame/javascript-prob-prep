/* eslint-disable max-len */
import {maxProduct} from './maximum-product.js';


export default describe('Maximum Product of Two Elements in an Array', function() {
    it('Should return 12 for [3,4,5,2]', function() {
        expect(maxProduct([3, 4, 5, 2])).toEqual(12);
    });

    it('Should return 16 for [1,5,4,5]', function() {
        expect(maxProduct([1, 5, 4, 5])).toEqual(16);
    });

    it('Should return 12 for [3,7]', function() {
        expect(maxProduct([3, 7])).toEqual(12);
    });
});
