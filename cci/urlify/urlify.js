export const urlify = function(s, trueLength){
    let spaceCount = 0, index, i=0;
    for (const char of s) {
        if(char === ' '){
            spaceCount += 1;
        }
    }
    s = s.split('');
    index = trueLength + spaceCount * 2;
    if(trueLength < s.length) s[trueLength] = '\0'; // End Array
    for (i = trueLength - 1; i >= 0; i--) {
        if(s[i] === ' '){
            s[index - 1] = '0';
            s[index - 2] = '2';
            s[index - 3] = '%';
            index = index - 3;
        }else{
            s[index - 1] = s[i];
            index--;
        }
    }
    console.log(s)
    return s.join('');
}; 