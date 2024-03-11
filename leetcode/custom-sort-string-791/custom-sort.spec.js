import {expect} from 'chai';
import {customSortString} from './custom-sort.js';

export default describe('#791: Custom Sort String', function() {
    it('Should return cbad', function() {
        expect(customSortString('cba', 'abcd')).to.equal('cbad');
    });

    it('Should return bcad', function() {
        expect(customSortString('bcafg', 'abcd')).to.equal('bcad');
    });

    it('Should return kqeep', function() {
        expect(customSortString('kqep', 'pekeq')).to.equal('kqeep');
    });

    it('Should return kqeeeprty', function() {
        expect(customSortString('kqep', 'pekeqrtye')).to.equal('kqeeeprty');
    });
});
