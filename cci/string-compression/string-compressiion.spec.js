import { compressString } from "./string-compression.js";

export default describe('String Compression', function(){
    xit('Should return a2b1c5a3 for aabbcccccaaa', function(){
        expect(compressString('aabbcccccaaa')).toEqual('a2b2c5a3');
    });

    xit('Should return r1e4p3e1a5t2 for reeeepppeaaaaatt', function(){
        expect(compressString('reeeepppeaaaaatt')).toEqual('r1e4p3e1a5t2');
    });
});