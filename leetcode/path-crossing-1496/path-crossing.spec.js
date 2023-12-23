import { isPathCrossing } from "./path-crossing";

export default describe('Path Crossing', function(){
    test('Should return false for ("NES")', function(){
        expect(isPathCrossing("NES")).toEqual(false);
    });

    test('Should return true for ("NESWW")', function(){
        expect(isPathCrossing("NESWW")).toEqual(true);
    });
});