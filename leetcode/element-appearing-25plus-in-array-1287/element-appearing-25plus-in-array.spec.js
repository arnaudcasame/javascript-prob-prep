import { findSpecialInteger } from "./element-appearing-25plus-in-array";

export const findSpecialInteger_ =
    describe('Element Appearing More Than 25% In Sorted Array', () => {
        test(' Should return 6 for ([1,2,2,6,6,6,6,7,10])', () => {
            expect(findSpecialInteger([1,2,2,6,6,6,6,7,10])).toEqual(6);
        });

        test(' Should return 1 for ([1,1])', () => {
            expect(findSpecialInteger([1,1])).toEqual(1);
        });
});