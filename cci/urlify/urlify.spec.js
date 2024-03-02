/* eslint-disable max-len */
import {urlify} from './urlify.js';
import {expect} from 'chai';

export default describe('#1.3: URLify', () => {
    xit('Should return Mr%20John%20Smith for (Mr John Smith)', () => {
        expect(urlify('Mr John Smith', 13)).to.equal('Mr%20John%20Smith');
    });
    xit('Should return Terminal%20will%20be%20reused%20by%20tasks for (Terminal will be reused by tasks)', () => {
        expect(urlify('Terminal will be reused by tasks', 42)).to.equal('Terminal%20will%20be%20reused%20by%20tasks');
    });
});
