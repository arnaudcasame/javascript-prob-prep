import {lengthOfLastWord} from './length-last-word.js';
import {expect} from 'chai';

export default describe.skip('Length of Last Word', () => {
    it(' Should return 5 for (Hello World)', () => {
        expect(lengthOfLastWord('Hello World')).to.equal(5);
    });

    it('Should return 4 for (   fly me   to   the moon  )', () => {
        expect(lengthOfLastWord('   fly me   to   the moon  ')).to.equal(4);
    });

    it('Should return 6 for (luffy is still joyboy)', () => {
        expect(lengthOfLastWord('luffy is still joyboy')).to.equal(6);
    });

    xit(' Should return ... for ...', () => {
        expect(lengthOfLastWord('bbbbb')).to.equal('bbbbb');
    });
});
