import { urlify } from "./urlify";

export const urlify_ = 
describe('URLify', () => {
    test('Should return Mr%20John%20Smith for Mr John Smith', () => {
        expect(urlify('Mr John Smith    ')).toEqual('Mr%20John%20Smith');
    });
});