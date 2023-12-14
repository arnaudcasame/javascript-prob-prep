import { productExceptSelf } from "./product-of-array";

export default describe('Product of Array except Self', function(){
    test('Should return [24,12,8,6] for ([1,2,3,4])', function(){
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    });

    test('Should return [0,0,9,0,0] for ([-1,1,0,-3,3])', function(){
        const res = productExceptSelf([-1,1,0,-3,3]);
        expect(res).toEqual([0,0,9,0,0]);
    });

    test('Should return [0,0] for ([0,0])', function(){
        const res = productExceptSelf([0,0]);
        console.log(res);
        expect(res).toEqual([0,0]);
    });

    test('Should return [0,1] for ([1,0])', function(){
        const res = productExceptSelf([1,0]);
        expect(res).toEqual([0,1]);
    });

    test('Should return [0,0,0] for ([0,4,0])', function(){
        const res = productExceptSelf([0,4,0]);
        expect(res).toEqual([0,0,0]);
    });
});