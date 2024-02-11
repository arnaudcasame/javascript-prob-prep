import {SetOfStacks} from './stack-of-plates.js';
import {expect} from 'chai';

export default describe('#3.3: Stack of Plates', function() {
    let stack;
    before(function() {
        stack = new SetOfStacks();
        stack.push(10);
        stack.push(12);
        stack.push(9);
        stack.push(8);
        stack.push(3);
        stack.push(33);
    });

    xit('title', function() {
        expect().to.equal();
    });
});
