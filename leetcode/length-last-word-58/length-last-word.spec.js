import {lengthOfLastWord} from './length-last-word.js';

export default describe('Length of Last Word', () => {
    it(' Should return 5 for (Hello World)', () => {
        expect(lengthOfLastWord('Hello World')).toEqual(5);
    });

    it('Should return 4 for (   fly me   to   the moon  )', () => {
        expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4);
    });

    it('Should return 6 for (luffy is still joyboy)', () => {
        expect(lengthOfLastWord('luffy is still joyboy')).toEqual(6);
    });

    xit(' Should return ... for ...', () => {
        expect(lengthOfLastWord('bbbbb')).toEqual('bbbbb');
    });
});
