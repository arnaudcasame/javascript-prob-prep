import {isUnique, isUniqueHT} from './is-unique.js';
import {expect} from 'chai';

export default describe('Unique Character String Verifier', () => {
    xit('Should return true for abcdef', () => {
        expect(isUnique('abcdef')).to.be.true;
    });

    xit('Should return false for abcdee', () => {
        expect(isUnique('abcdee')).to.be.false;
    });

    xit('Should return true for abcdef (HashTable)', () => {
        expect(isUniqueHT('abcdef')).to.be.true;
    });

    xit('Should return false for abcdee (HashTable)', () => {
        expect(isUniqueHT('abcdee')).to.be.false;
    });

    xit('Should return false for efwsssgfd', () => {
        expect(isUnique('efwsssgfd')).to.be.false;
    });

    xit('Should return false for efwsssgfd (HashTable)', () => {
        expect(isUniqueHT('efwsssgfd')).to.be.false;
    });
});
