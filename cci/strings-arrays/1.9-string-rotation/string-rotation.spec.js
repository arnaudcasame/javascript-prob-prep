/* eslint-disable max-len */
import {isSubstring} from './string-rotation.js';
import {expect} from 'chai';

export default describe('#1.9: String Rotation', function() {
    xit('Should return true for ("erbottlewat", "waterbottle")', function() {
        expect(isSubstring('erbottlewat', 'waterbottle')).to.be.true;
    });

    xit('Should return true for ("moderate", "atemoder")', function() {
        expect(isSubstring('moderate', 'atemoder')).to.be.true;
    });

    xit('Should return true for ("algorithm", "gorithmal")', function() {
        expect(isSubstring('algorithm', 'gorithmal')).to.be.true;
    });

    xit('Should return false for ("string rotation", "ationstring roe")', function() {
        expect(isSubstring('string rotation', 'ationstring roe')).to.be.false;
    });
});
