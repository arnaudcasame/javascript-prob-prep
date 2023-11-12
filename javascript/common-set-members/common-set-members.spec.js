import { commonSetMembers } from "./common-set-members";
import { commonSetElements } from "./common-set-members";

export const common = 
describe('Common set Members', function(){
    let A;
    let B;
    beforeAll(function(){
        A = [13, 27, 35, 40, 49, 55, 59, 60];
        B = [17, 35, 39, 40, 55, 58, 60, 62];
    })
    test('Should return the elements in common of both sets (A<-->B)', function(){
        const result = commonSetMembers(A, B);
        expect(result).toEqual([35, 40, 55, 60]);
    })

    test('Should return the elements in common of both sets  (B<-->A)', function(){
        const result = commonSetMembers(B, A);
        expect(result).toEqual([35, 40, 55, 60]);
    })

    test('Should return the elements in common of both sets chatGPT (A<-->B)', function(){
        const result = commonSetElements(A, B);
        expect(result).toEqual([35, 40, 55, 60]);
    })

    test('Should return the elements in common of both sets chatGPT  (B<-->A)', function(){
        const result = commonSetElements(B, A);
        expect(result).toEqual([35, 40, 55, 60]);
    })
})