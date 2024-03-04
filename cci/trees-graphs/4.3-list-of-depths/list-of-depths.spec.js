/* eslint-disable max-len */
import {listOfDepths} from './list-of-depths.js';
import {expect} from 'chai';

export default describe('#4.3: List of Depths', function() {
    xit('Should return ["(1)", "(2)(3)", "(4)(5)(6)", "(7)"]', function() {
        const graph = {
            '1': [2, 3],
            '2': [4],
            '3': [5, 6],
            '4': [],
            '5': [7],
            '6': [],
            '7': [],
        };
        expect(listOfDepths(graph, '1')).to.deep.equal(['(1)', '(2)(3)', '(4)(5)(6)', '(7)']);
    });

    xit('Should return ["(2)","(1)(3)"]', function() {
        const graph = {
            '1': [],
            '2': [3, 1],
            '3': [],
        };
        expect(listOfDepths(graph, '2')).to.deep.equal(['(2)', '(1)(3)']);
    });

    xit('Should return ["(1)", "(10)(4)", "(3)(7)(9)", "(12)(8)(6)(2)"]', function() {
        const graph = {
            '1': [10, 4],
            '2': [],
            '3': [12, 8],
            '4': [7, 9],
            '6': [],
            '7': [6],
            '8': [],
            '9': [2],
            '10': [3],
            '12': [],
        };
        expect(listOfDepths(graph, '1')).to.deep.equal(['(1)', '(10)(4)', '(3)(7)(9)', '(12)(8)(6)(2)']);
    });

    xit('Should return ["(5)", "(4)(2)", "(3)(3)(7)"]', function() {
        const graph = {
            '2': [7],
            '3': [],
            '4': [3, 3],
            '5': [4, 2],
            '7': [],
        };
        expect(listOfDepths(graph, '5')).to.deep.equal(['(5)', '(4)(2)', '(3)(3)(7)']);
    });

    xit('Should return ["(5)", "(9)(1)", "(3)(5)(7)"]', function() {
        const graph = {
            '1': [7],
            '3': [],
            '5': [9, 1],
            '7': [],
            '9': [3, 5],
        };
        expect(listOfDepths(graph, '5')).to.deep.equal(['(5)', '(9)(1)', '(3)(5)(7)']);
    });
});


