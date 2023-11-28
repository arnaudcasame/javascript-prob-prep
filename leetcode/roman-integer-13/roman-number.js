/**
 * @param {string} s
 * @return {number}
 */
export var romanToInt = function(s) {
    let res = 0;
    const dict = {
        I: 1,
        V: 5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    for (let key = 0; key < s.length; key++) {
        if(s.charAt(key) === 'I' && s.charAt(key + 1) === 'V'){
            res += 4;
            key++;
        }else if(s.charAt(key) === 'I' && s.charAt(key+1) === 'X'){
            res += 9;
            key++;
        }else if(s.charAt(key) === 'X' && s.charAt(key+1) === 'L'){
            res += 40;
            key++;
        }else if(s.charAt(key) === 'X' && s.charAt(key+1) === 'C'){
            res += 90;
            key++;
        }else if(s.charAt(key) === 'C' && s.charAt(key+1) === 'D'){
            res += 400;
            key++;
        }else if(s.charAt(key) === 'C' && s.charAt(key+1) === 'M'){
            res += 900;
            key++;
        }else{
            res += dict[s.charAt(key)];
        }
    }
    return res;
};


/**
 * @param {string} s
 * @return {number}
 */
export const romanToIntDynamic = function(s) {
    let res = 0;
    const dict = {
        I: 1,
        V: 5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    for (const key in s) {
        // console.log(key, s.charAt(key), s.charAt((key*1)+1))
        const current = dict[s.charAt(key)];
        const next = dict[s.charAt((key*1)+1)];
        if(current < next){
            res -= current;
        } else {
            res += current;
        }
    }
    return res;
};