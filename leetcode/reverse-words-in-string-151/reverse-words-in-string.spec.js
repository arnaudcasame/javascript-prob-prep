import {expect} from 'chai';
import {reverseWords} from './reverse-words-in-string.js';


export default describe('#151: Reverse Words in a String', function() {
    it('Should return `blue is sky the`', function() {
        expect(reverseWords('the sky is blue')).to.equal('blue is sky the');
    });

    it('Should return `world hello`', function() {
        expect(reverseWords('  hello world  ')).to.equal('world hello');
    });

    it('Should return `example good a`', function() {
        expect(reverseWords('a good   example')).to.equal('example good a');
    });

    it('Should return `EPY2giL`', function() {
        expect(reverseWords('EPY2giL')).to.equal('EPY2giL');
    });
});
