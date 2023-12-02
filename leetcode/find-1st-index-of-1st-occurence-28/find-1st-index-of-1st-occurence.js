/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if(haystack.substring(i, i+needle.length) === needle){
            return i;
        }
    }
    return -1;
};

export const strStrI = function(h, s) {
    let m=h.size(), n=s.size(), i=0, j=0, k=0;
    if(m<n) return -1;
    while(i<m && j<n) {
        if(h[i]==s[j]) {
            i++; j++;
        } else {
            i=k+1; 
            j=0;
            k=i;
        }
    }
    if(j==n) return k;
    else return -1;
}