/* eslint-disable max-len */
import {findJudge, findJudgeMySolution} from './find-judge.js';
import {expect} from 'chai';

export default describe('#997: Find the Town Judge', function() {
    it('Should return 2 for: [[1, 2]]', function() {
        expect(findJudge(2, [[1, 2]])).to.equal(2);
    });

    it('Should return 3 for: [[1,3],[2,3]]', function() {
        expect(findJudge(3, [[1, 3], [2, 3]])).to.equal(3);
    });

    it('Should return -1 for: [[1,3],[2,3],[3,1]]', function() {
        expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).to.equal(-1);
    });

    it('Should return 3 for: [[1,3],[1,4],[2,3],[2,4],[4,3]]', function() {
        expect(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])).to.equal(3);
    });

    it('Should return 2 for: [[1, 2]]', function() {
        expect(findJudgeMySolution(2, [[1, 2]])).to.equal(2);
    });

    it('Should return 3 for: [[1,3],[2,3]]', function() {
        expect(findJudgeMySolution(3, [[1, 3], [2, 3]])).to.equal(3);
    });

    it('Should return -1 for: [[1,3],[2,3],[3,1]]', function() {
        expect(findJudgeMySolution(3, [[1, 3], [2, 3], [3, 1]])).to.equal(-1);
    });

    it('Should return 3 for: [[1,3],[1,4],[2,3],[2,4],[4,3]]', function() {
        expect(findJudgeMySolution(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])).to.equal(3);
    });

    it('Should return 1 for: []', function() {
        expect(findJudgeMySolution(1, [])).to.equal(1);
    });

    it('Should return -1 for: []', function() {
        expect(findJudgeMySolution(2, [])).to.equal(-1);
    });
});
