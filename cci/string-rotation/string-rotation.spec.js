import { isRotation } from "./string-rotation";

export default describe('String Rotation', function(){
    test('Should return true for ("erbottlewat", "waterbottle")', function(){
        expect(isRotation("erbottlewat", "waterbottle")).toEqual(true);
    });

    test('Should return true for ("moderate", "atemoder")', function(){
        expect(isRotation('moderate', 'atemoder')).toEqual(true);
    });

    test('Should return true for ("algorithm", "gorithmal")', function(){
        expect(isRotation('algorithm', 'gorithmal')).toEqual(true);
    });

    test('Should return false for ("string rotation", "ationstring roe")', function(){
        expect(isRotation('string rotation', 'ationstring roe')).toEqual(false);
    });
});