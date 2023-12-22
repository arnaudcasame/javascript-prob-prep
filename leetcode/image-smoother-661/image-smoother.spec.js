import { imageSmoother } from "./image-smoother";

export default describe('Image Smoother', function(){
    test('Should return ', function(){
        expect(imageSmoother([[1,1,1],[1,0,1],[1,1,1]])).toEqual([[0,0,0],[0,0,0],[0,0,0]]);
    });

    test('Should return ', function(){
        expect(imageSmoother([[100,200,100],[200,50,200],[100,200,100]])).toEqual([[137,141,137],[141,138,141],[137,141,137]]);
    });
});