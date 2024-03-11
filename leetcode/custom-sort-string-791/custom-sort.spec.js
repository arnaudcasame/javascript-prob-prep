import {expect} from 'chai';
import {customSortString} from './custom-sort.js';

export default describe('#791: Custom Sort String', function() {
    xit('Should return cbad', function() {
        expect(customSortString('cba', 'abcd')).to.equal('cbad');
    });

    xit('Should return bcad', function() {
        expect(customSortString('bcafg', 'abcd')).to.equal('bcad');
    });
});
