import {expect} from 'chai';
import {reverseWords} from './reverse-words-in-string.js';


export default describe('#151: Reverse Words in a String', function() {
    xit('Should return `blue is sky the`', function() {
        expect(reverseWords('the sky is blue')).to.equal('blue is sky the');
    });

    xit('Should return `world hello`', function() {
        expect(reverseWords('  hello world  ')).to.equal('world hello');
    });

    xit('Should return `example good a`', function() {
        expect(reverseWords('a good   example')).to.equal('example good a');
    });
});
