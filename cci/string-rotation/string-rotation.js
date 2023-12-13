export const isRotation = function(s1, s2){
    let i=0;
    while(i < s2.length){
        s2 = s2.substring(s2.length - 1) + s2.substring(0, s2.length - 1);
        if(s2 === s1){
            return true;
        }
        i++;
    }
    return false;
}