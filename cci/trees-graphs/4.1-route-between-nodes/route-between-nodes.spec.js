import {routeBetweenNodes} from './route-between-nodes.js';
import {expect} from 'chai';

export default describe('#4.1: Route Between Nodes', function() {
    xit('Should return true for: ', function() {
        const graph = {
            f: ['g', 'i'],
            g: ['h'],
            h: [],
            i: ['g', 'k'],
            j: ['i'],
            k: [],
        };
        expect(routeBetweenNodes(graph, 'f', 'k')).to.be.true;
    });

    xit('Should return false for: f <--> j', function() {
        const graph = {
            f: ['g', 'i'],
            g: ['h'],
            h: [],
            i: ['g', 'k'],
            j: ['i'],
            k: [],
        };
        expect(routeBetweenNodes(graph, 'f', 'j')).to.be.false;
    });

    xit('Should return true for: i <---> h', function() {
        const graph = {
            f: ['g', 'i'],
            g: ['h'],
            h: [],
            i: ['g', 'k'],
            j: ['i'],
            k: [],
        };
        expect(routeBetweenNodes(graph, 'i', 'h')).to.be.true;
    });

    xit('Should return false for: v <---> h', function() {
        const graph = {
            v: ['x', 'w'],
            w: [],
            x: [],
            y: ['z'],
            z: [],
        };
        expect(routeBetweenNodes(graph, 'v', 'h')).to.be.false;
    });

    xit('Should return false for: v <---> z', function() {
        const graph = {
            v: ['x', 'w'],
            w: [],
            x: [],
            y: ['z'],
            z: [],
        };
        expect(routeBetweenNodes(graph, 'v', 'z')).to.be.false;
    });
});
