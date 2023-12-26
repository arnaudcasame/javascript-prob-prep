import { partition } from "./partition";

export default describe('Partition', function(){
    xtest('title', function(){
        expect(partition([3,5,8,5,10,2,1])).toEqual([3,1,2,10,5,5,8]);
    });
});