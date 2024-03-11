/* eslint-disable max-len */
import {expect} from 'chai';
import stringCompression from './string-compression.js';
import sinon from 'sinon';

export default describe('#443: String Compression', function() {
    const spy = sinon.spy(stringCompression, 'compress');

    beforeEach(()=>{});

    xit('Should alter argument to [\'a\',\'2\',\'b\',\'2\',\'c\',\'3\']', function() {
        // Argument to the Compress function
        const arg = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];

        // Compress function using argument
        stringCompression.compress(arg);

        const call = spy.getCall(0);
        expect(call.args[0]).to.deep.equal(['a', '2', 'b', '2', 'c', '3']);
    });

    xit('Should alter argument to [\'a\']', function() {
        // Argument to the Compress function
        const arg = ['a'];

        // Compress function using argument
        stringCompression.compress(arg);

        const call = spy.getCall(0);
        expect(call.args[0]).to.deep.equal(['a']);
    });

    xit('Should alter argument to ["a", "b", "1", "2"]', function() {
        // Argument to the Compress function
        const arg = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];

        // Compress function using argument
        stringCompression.compress(arg);

        const call = spy.getCall(0);
        expect(call.args[0]).to.deep.equal(['a', 'b', '1', '2']);
    });

    afterEach(() => {});
});
