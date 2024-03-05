import {isTreeBalanced} from './check-tree-is-balanced.js';
import {expect} from 'chai';

export default describe('#4.4: Check Balanced', function() {
    xit('Should return true for: ', function() {
        const graph = {
            '10': [5, 20],
            '5': [2, 8],
            '2': [null, null],
            '20': [null, 30],
            '8': [6, 9],
            '6': [null, null],
            '9': [null, null],
            '30': [null, null],
        };
        expect(isTreeBalanced(graph, '10')).to.be.true;
    });

    xit('Should return false for: ', function() {
        const graph = {
            '2': [7, null],
            '3': [8, 1],
            '4': [3, 3],
            '5': [4, 2],
            '7': [null, null],
            '8': [null, null],
            '1': [null, 6],
            '6': [null, null],
        };
        expect(isTreeBalanced(graph, '5')).to.be.false;
    });

    xit('Should return true for: ', function() {
        const graph = {
            '2': [7],
            '3': [],
            '4': [3, 3],
            '5': [4, 2],
            '7': [],
        };
        expect(isTreeBalanced(graph, '5')).to.be.true;
    });
});
