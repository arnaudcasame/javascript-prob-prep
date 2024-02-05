import {isPathCrossing} from './path-crossing.js';
import {expect} from 'chai';

export default describe.skip('Path Crossing', function() {
    it('Should return false for ("NES")', function() {
        expect(isPathCrossing('NES')).to.be.equal(false);
    });

    it('Should return true for ("NESWW")', function() {
        expect(isPathCrossing('NESWW')).to.be.equal(true);
    });
});
