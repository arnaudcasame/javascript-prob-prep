/**
 * @param {number[][]} img
 * @return {number[][]}
 */
export const imageSmoother = function(img) {
    const res = Array(img.length).fill(Array(img.length).fill(0));
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[i].length; j++) {
            if(i!==1 && j!==1){
                res[i][j] = Math.floor((img[i][j] + img[i][j===0? j+1 : j-1] + img[i===0? i+1 : i-1][j] + img[i===0? i+1 : i-1][j===0? j+1 : j-1])/4);
            }else if(i===1 && j===1){
                res[i][j] = Math.floor((img[i][j] + img[i-1][j-1] + img[i-1][j] + img[i-1][j+1] + img[i][j-1] + img[i][j+1] + img[i+1][j-1] + img[i+1][j] + img[i+1][j+1])/9);
            }else{
                let constant = j === 1 ? img[1][0] + img[1][1] + img[1][2] : img[0][1] + img[1][1] + img[2][1];
                let variable = j === 1 ? (i===0 ? img[0][0] + img[0][2] : img[2][0] + img[2][2]) : (j===0 ? img[0][0] + img[2][0] : img[0][2] + img[2][2]);
                res[i][j] = Math.floor((img[i][j] + variable + constant) / 6);
            }
            
        } 
    }
    console.log(res)
    return res
};