import {isPathCrossing} from './path-crossing.js';

export default describe('Path Crossing', function() {
    it('Should return false for ("NES")', function() {
        expect(isPathCrossing('NES')).toEqual(false);
    });

    it('Should return true for ("NESWW")', function() {
        expect(isPathCrossing('NESWW')).toEqual(true);
    });
});
