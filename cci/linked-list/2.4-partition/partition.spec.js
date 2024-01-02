import { partition } from "./partition.js";

export default describe('Partition', function(){
    xit('title', function(){
        expect(partition([3,5,8,5,10,2,1])).toEqual([3,1,2,10,5,5,8]);
    });
});