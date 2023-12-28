import { partition } from "./partition";

export default describe('Partition', function(){
    test('Should return (1)(2)(3)(5)(8)(5)(10)', function(){
        expect(partition([3,5,8,5,10,2,1], 5)).toEqual('(1)(2)(3)(5)(8)(5)(10)');
    });

    test('Should return (1)(2)(3)(5)(8)(5)(10)', function(){
        expect(partition([5,3,8,5,10,2,1], 5)).toEqual('(1)(2)(3)(5)(8)(5)(10)');
    });

    test('Should return (1)(2)(5)(3)(5)(8)(10)', function(){
        expect(partition([5,3,8,5,10,2,1], 8)).toEqual('(1)(2)(5)(3)(5)(8)(10)');
    });
});