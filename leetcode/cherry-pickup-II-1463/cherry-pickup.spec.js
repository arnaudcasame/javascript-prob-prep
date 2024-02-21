/* eslint-disable max-len */
import {cherryPickup} from './cherry-pickup.js';
import {expect} from 'chai';

export default describe('#1463: Cherry Pickup II', function() {
    xit('Should return 24 for input: ', function() {
        expect(cherryPickup([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]])).to.equal(24);
    });

    xit('Should return 28 for input: ', function() {
        expect(cherryPickup([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]])).to.equal(28);
    });
});
