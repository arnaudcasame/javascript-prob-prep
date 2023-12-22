import { maxWidthOfVerticalArea } from "./wildest-vertical-area-1637";

export default describe('Wildest Vertical Area between two Points containing no Points', function(){
    test('Should return 1 for ', function(){
        expect(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])).toEqual(1);
    });

    xtest('Should return 3 for ', function(){
        expect(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])).toEqual(3);
    });
});