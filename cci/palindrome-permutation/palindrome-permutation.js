export const isPermutatedPalindrome = function(s){
    let arr = [];
    for (const char of s) {
        if(char.match(/[a-zA-Z0-9]/)){
            arr.push(char.toLowerCase());
        }
    }
    let i = 0;
    while(i < arr.length){
        const right = arr.length - 1 - i;
        if(arr[i] !== arr[right]){
            let j = Math.floor(arr.length/2);
            while(j < arr.length){
                if(arr[i] === arr[j]){
                    const swap = arr[j];
                    arr[j] = arr[right];
                    arr[right] = swap;
                }
                j++;
            }
        }
        i++;
    }
    const palin1 = arr.join('');
    const palin2 = arr.reverse().join('');
    // console.log(palin2);
    return palin1 === palin2;
};