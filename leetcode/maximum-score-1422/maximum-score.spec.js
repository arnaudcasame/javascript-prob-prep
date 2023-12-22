import { maxScore } from './maximum-score';

export default describe('Maximum Score after Splitting a String', function(){
    test('Should return 5 for (011101)', function(){
        expect(maxScore("011101")).toEqual(5);
    });

    test('Should return 5 for (00111)', function(){
        expect(maxScore("00111")).toEqual(5);
    });

    test('Should return 3 for (1111)', function(){
        expect(maxScore("1111")).toEqual(3);
    });
    
    test('Should return 1 for (1111)', function(){
        expect(maxScore("00")).toEqual(1);
    });
});