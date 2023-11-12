import { commonSetMembers } from "./common-set-members";

describe('Common set Members', function(){
    test('Should return the common members of both sets', function(){
        const A = [13, 27, 35, 40, 49, 55, 59];
        const B = [17, 35, 39, 40, 55, 58, 60];
        expect(commonSetMembers(A, B)).toEqual([])
    })
})