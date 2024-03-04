import {oneAway} from './one-away.js';
import {expect} from 'chai';

export default describe('#1.5: One Away', function() {
    xit('Should return true for (pale, ple)', function() {
        expect(oneAway('pale', 'ple')).to.be.true;
    });

    xit('Should return true for (pales, pale)', function() {
        expect(oneAway('pales', 'pale')).to.be.true;
    });

    xit('Should return true for (pale, bale)', function() {
        expect(oneAway('pale', 'bale')).to.be.true;
    });

    xit('Should return false for (pale, bake)', function() {
        expect(oneAway('pale', 'bake')).to.be.false;
    });
});
