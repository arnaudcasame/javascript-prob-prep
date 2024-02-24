/* eslint-disable max-len */
import {expect} from 'chai';
import {findCheapestPrice} from './find-cheapest-price.js';


export default describe('#787: Cheapest Flights Within K Stops', function() {
    it('Should return 700 for the cheapest price ', function() {
        expect(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1)).to.equal(700);
    });

    it('Should return 200 for the cheapest price ', function() {
        expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)).to.equal(200);
    });

    it('Should return 500 for the cheapest price', function() {
        expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)).to.equal(500);
    });
});
