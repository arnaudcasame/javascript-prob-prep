import { loopDetection } from "./loop-detection";

export default describe('Loop Detection (Corrupt LinkedList)', function(){
    xtest('title', function(){
        expect(loopDetection([])).toEqual(0);
    });
});