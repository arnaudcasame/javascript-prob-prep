/**
 * @param {string[]} strs
 * @return {string}
 */
export var longestCommonPrefix = function(strs) {
    if(strs.length === 1){
        return strs[0];
    }
    let res = '';
    const first = strs[0] || '';
    for (let i = 1; i < strs.length; i++) {
        const cur = strs[i];
        if(!cur){
            return '';
        }
        for (let key in cur) {
            key = Number(key);
            const firstEl = first[key] ? first[key] : '';
            const curEl = cur[key];
            
            if(i < 2 && curEl === firstEl){
                res += curEl;
            } else if (i < 2 && curEl !== firstEl){
                break;
            } else if (res && (curEl !== res[key])){
                res = res.slice(0, key);
            } else if (res && cur.length < first.length ){
                res = res.slice(0, cur.length);
            }
        }
    }
    return res
};


export const longestCommonPrefixI = function(strs) {
    if(strs.length === 1){
        return strs[0];
    }
    let common = '';
    const first = strs[0] || '';
    const second = strs[1] || '';
    for (let i = 0; i < first.length; i++) {
        const elFirst = first[i];
        const elSecond = second[i];

        if(elFirst !== elSecond){
            break;
        }
        common += elFirst;
    }
    for (let i = 2; i < strs.length; i++) {
        const cur = strs[i];
        if(!cur){
            common = '';
            break;
        }
        for (let key in cur.length < common.length ? common : cur) {
            key = Number(key);
            const commonEl = common[key] ? common[key] : '';
            const curEl = cur[key];
            
            if (curEl !== commonEl){
                common = common.slice(0, key);
            }
        }
    }
    console.log('common', common)
    return common;
};


export const longestCommonPrefixII = function(strs) {
    if(strs.length === 1){
        return strs[0];
    }
    let common = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(common) !== 0){
            common = common.substring(0, common.length - 1)
        }
    }
    console.log('common', common)
    return common;
};