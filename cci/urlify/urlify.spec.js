import { urlify } from "./urlify.js";

export default describe('URLify', () => {
    xit('Should return Mr%20John%20Smith for (Mr John Smith)', () => {
        expect(urlify('Mr John Smith', 13)).toEqual('Mr%20John%20Smith');
    });
    xit('Should return Terminal%20will%20be%20reused%20by%20tasks for (Terminal will be reused by tasks)', () => {
        expect(urlify('Terminal will be reused by tasks', 42)).toEqual('Terminal%20will%20be%20reused%20by%20tasks');
    });
});