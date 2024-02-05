import {evalRPN} from './evaluate-reverse-polish-notation.js';

export default describe('#150: Evaluate Reverse Polish Notation', function() {
    it('Should return 9 for tokens = ["2","1","+","3","*"]', function() {
        expect(evalRPN(['2', '1', '+', '3', '*'])).to.equal(9);
    });
});
