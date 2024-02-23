import {findJudge} from './find-judge.js';
import {expect} from 'chai';

export default describe('#997: Find the Town Judge', function() {
    xit('Should return 2 for: [[1, 2]]', function() {
        expect(findJudge(2, [[1, 2]])).to.equal(2);
    });

    xit('Should return 3 for: [[1,3],[2,3]]', function() {
        expect(findJudge(3, [[1, 3], [2, 3]])).to.equal(3);
    });

    xit('Should return -1 for: [[1,3],[2,3],[3,1]]', function() {
        expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).to.equal(-1);
    });
});
