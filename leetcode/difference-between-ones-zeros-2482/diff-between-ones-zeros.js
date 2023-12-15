/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
export const onesMinusZeros = function(grid) {
    const res = new Array(grid.length).fill([]);
    for (let i = 0; i < grid.length; i++) {
        res[i] = new Array(grid[i].length).fill([]);
        for (let j = 0; j < grid[i].length; j++) {
            let zeros = 0;
            let ones = 0;
            let n = grid[i].length;
            let c = 0;
            while(c < n){
                if(grid[i][c] === 0){
                    zeros -= 1;
                }else{
                    ones += 1;
                }
                c++;
            }

            let m = grid.length;
            let r = 0;
            while(r < m){
                if(grid[r][j] === 0){
                    zeros -= 1;
                }else{
                    ones += 1;
                }
                r++;
            }
            res[i][j] = ones + zeros;
        }
    }
    return res;
};


export const onesMinusZerosO = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const diff = new Array(m).fill(null).map(() => new Array(n).fill(0));

    const onesRow = new Array(m).fill(0);
    const zerosRow = new Array(m).fill(0);
    const onesCol = new Array(n).fill(0);
    const zerosCol = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                onesRow[i]++;
                onesCol[j]++;
            } else {
                zerosRow[i]++;
                zerosCol[j]++;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
};