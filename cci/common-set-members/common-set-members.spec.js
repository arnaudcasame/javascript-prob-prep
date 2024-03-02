/* eslint-disable max-len */
import {commonSetMembers, commonSetElements} from './common-set-members.js';
import {expect} from 'chai';

export default describe('#0.0 Common set Members', function() {
    let A;
    let B;
    before(function() {
        A = [13, 27, 35, 40, 49, 55, 59, 60];
        B = [17, 35, 39, 40, 55, 58, 60, 62];
    });
    xit('Should return the elements in common of both sets (A<-->B)', function() {
        const result = commonSetMembers(A, B);
        expect(result).to.deep.equal([35, 40, 55, 60]);
    });

    xit('Should return the elements in common of both sets  (B<-->A)', function() {
        const result = commonSetMembers(B, A);
        expect(result).to.deep.equal([35, 40, 55, 60]);
    });

    xit('Should return the elements in common of both sets chatGPT (A<-->B)', function() {
        const result = commonSetElements(A, B);
        expect(result).to.deep.equal([35, 40, 55, 60]);
    });

    xit('Should return the elements in common of both sets chatGPT  (B<-->A)', function() {
        const result = commonSetElements(B, A);
        expect(result).to.deep.equal([35, 40, 55, 60]);
    });
});
