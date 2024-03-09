import {expect} from 'chai';
import {buildOrder} from './build-order.js';

export default describe('#4.7: Build Order', function() {
    xit('Should return []', function() {
        expect(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'],
            [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']])).to
            .equal(['f', 'e', 'a', 'b', 'd', 'c']);
    });
});
