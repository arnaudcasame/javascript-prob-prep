import { lengthOfLastWord } from "./length-last-word";

export const lengthOfLastWord_ =
    describe('Length of Last Word', () => {
        test(' Should return 5 for (Hello World)', () => {
            expect(lengthOfLastWord("Hello World")).toEqual(5);
        });

        test('Should return 4 for (   fly me   to   the moon  )', () => {
            expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
        });

        test('Should return 6 for (luffy is still joyboy)', () => {
            expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
        });

        xtest(' Should return ... for ...', () => {
            expect(lengthOfLastWord('bbbbb')).toEqual('bbbbb');
        });
});