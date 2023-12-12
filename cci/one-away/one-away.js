export const oneAway = function(s1, s2){
    let len = s1.length > s2.length ? s1.length : s2.length;
    let i=0;
    let j=0;
    let changes = 0;
    while(i < len && s1.length !== s2.length){
        if(s1[i] !== s2[j]){
            changes += 1;
        }else{
            j++;
        }
        i++
    }
    let replace = 0;
    while(i < len && s1.length === s2.length){
        if(s1[i] !== s2[i]){
            replace += 1;
        }
        i++
    }
    return replace ? replace < 2 : changes < 2;
};