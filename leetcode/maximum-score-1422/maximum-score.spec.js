import {maxScore} from './maximum-score.js';

export default describe('Maximum Score after Splitting a String', function() {
    it('Should return 5 for (011101)', function() {
        expect(maxScore('011101')).toEqual(5);
    });

    it('Should return 5 for (00111)', function() {
        expect(maxScore('00111')).toEqual(5);
    });

    it('Should return 3 for (1111)', function() {
        expect(maxScore('1111')).toEqual(3);
    });

    it('Should return 1 for (1111)', function() {
        expect(maxScore('00')).toEqual(1);
    });
});
