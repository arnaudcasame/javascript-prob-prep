import {minWindow} from './minimum-window.js';
import {expect} from 'chai';

export default describe('#76: Minimum Window Substring', function() {
    xit('Should return BANC for (ADOBECODEBANC)', function() {
        expect(minWindow('ADOBECODEBANC', 'ABC')).to.equal('BANC');
    });

    xit('Should return a for (a)', function() {
        expect(minWindow('a', 'a')).to.equal('a');
    });

    xit('Should return empty string for (a, aa)', function() {
        expect(minWindow('a', 'aa')).to.equal('');
    });
});
