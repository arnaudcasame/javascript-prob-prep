import { oneAway } from "./one-away.js";

export default describe('One Away', function(){
    xit('Should return true for (pale, ple)', function(){
        expect(oneAway('pale', 'ple')).toEqual(true);
    });

    xit('Should return true for (pales, pale)', function(){
        expect(oneAway('pales', 'pale')).toEqual(true);
    });

    xit('Should return true for (pale, bale)', function(){
        expect(oneAway('pale', 'bale')).toEqual(true);
    });

    xit('Should return false for (pale, bake)', function(){
        expect(oneAway('pale', 'bake')).toEqual(false);
    });
});