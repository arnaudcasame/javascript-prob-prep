/* eslint-disable max-len */
import {mostBooked} from './most-booked.js';
import {expect} from 'chai';


export default describe('#2402: Meeting Rooms III', function() {
    xit('Should return 0 for ', function() {
        expect(mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4]])).to.equal(0);
    });

    xit('Should return 1 for ', function() {
        expect(mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]])).to.equal(1);
    });
});
