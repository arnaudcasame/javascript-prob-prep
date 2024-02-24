/* eslint-disable max-len */
import {findAllPeople} from './find-people.js';
import {expect} from 'chai';

export default describe('#2092: Find All People With Secret', function() {
    xit('Should return [0,1,2,3,5]', function() {
        expect(findAllPeople(6, [[1, 2, 5], [2, 3, 8], [1, 5, 10]], 1)).to.equal([0, 1, 2, 3, 5]);
    });

    xit('Should return [0,1,3]', function() {
        expect(findAllPeople(4, [[3, 1, 3], [1, 2, 2], [0, 3, 3]], 3)).to.equal([0, 1, 3]);
    });

    xit('Should return [0,1,2,3,4]', function() {
        expect(findAllPeople(5, [[3, 4, 2], [1, 2, 1], [2, 3, 1]], 1)).to.equal([0, 1, 2, 3, 4]);
    });
});
