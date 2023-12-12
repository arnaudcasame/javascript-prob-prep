import { oneAway } from "./one-away";

export default describe('One Away', function(){
    test('Should return true for (pale, ple)', function(){
        expect(oneAway('pale', 'ple')).toEqual(true);
    });

    test('Should return true for (pales, pale)', function(){
        expect(oneAway('pales', 'pale')).toEqual(true);
    });

    test('Should return true for (pale, bale)', function(){
        expect(oneAway('pale', 'bale')).toEqual(true);
    });

    test('Should return false for (pale, bake)', function(){
        expect(oneAway('pale', 'bake')).toEqual(false);
    });
});