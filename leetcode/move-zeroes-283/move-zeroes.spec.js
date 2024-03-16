import {expect} from 'chai';
import sinon from 'sinon';
import movement from './move-zeroes.js';

export default describe('#283. Move Zeroes', function() {
    let spy;

    beforeEach(()=>{
        spy = sinon.spy(movement, 'moveZeroes');
    });

    xit('Should alter argument to [0,1,0,3,12]', function() {
        // Argument to the Compress function
        const arg = [0, 1, 0, 3, 12];

        // Compress function using argument
        movement.moveZeroes(arg);

        const call = spy.getCall(0);
        expect(call.args[0]).to.deep.equal([1, 3, 12, 0, 0]);
    });

    xit('Should alter argument to [0]', function() {
        // Argument to the Compress function
        const arg = [0];

        // Compress function using argument
        movement.moveZeroes(arg);

        const call = spy.getCall(0);
        expect(call.args[0]).to.deep.equal([0]);
    });


    xit('Should alter argument to [4, 2, 4, 0, 0, 3, 0, 5, 1, 0]', function() {
        // Argument to the Compress function
        const arg = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];

        // Compress function using argument
        movement.moveZeroes(arg);

        const call = spy.getCall(0);
        expect(call.args[0]).to.deep.equal([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
    });


    xit('Should alter argument to [0,0,1]', function() {
        // Argument to the Compress function
        const arg = [0, 0, 1];

        // Compress function using argument
        movement.moveZeroes(arg);

        const call = spy.getCall(0);
        expect(call.args[0]).to.deep.equal([1, 0, 0]);
    });


    afterEach(() => {
        spy.restore();
    });
});
