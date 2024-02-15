/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
export const sequentialDigits = function(low, high) {
    const bucket = [];
    const blueprint = '123456789';

    for (let i = 0; i < blueprint.length; i++) {
        for (let j = i + 1; j < blueprint.length; j++) {
            const num = parseInt(blueprint.substring(i, j + 1));

            if (num > high) break;
            if (low <= num) bucket.push(num);
        }
    }
    return bucket.sort((a, b) => a - b);
};

/**
 * My Solution (incomplete)
 */
// const bucket = [];
//     let starting = parseInt((''+low)[0]);
//     let numDigit = `${low}`.length;
//     const hiNumDigit = `${high}`.length;

//     let num = `${starting}`;
//     let j = starting;
//     let constant = '1';
//     while (num.length < numDigit) {
//         if (j+1 === 10) {
//             starting = 1;
//             j = starting;
//             constant = '1';
//             num = `${starting}`;
//             numDigit++;
//             continue;
//         } else {
//             num += j+1;
//             constant += '1';
//         }
//         j++;
//     }
//     bucket.push(parseInt(num));

//     while (`${bucket[bucket.length-1]}`.length <= hiNumDigit) {
//         const latest = bucket[bucket.length-1];
//         if ((''+latest).charAt((''+latest).length-1) === '9') {
//             constant = ''+((parseInt(constant) * 10) + 1);
//             let tmp = '';
//             for (let i = 1; i <= constant.length; i++) {
//                 tmp += `${i}`;
//             }
//             if (high > parseInt(tmp)) {
//                 bucket.push(parseInt(tmp));
//                 continue;
//             } else {
//                 break;
//             }
//         }
//         const newNum = latest + parseInt(constant);
//         if (newNum <= high) {
//             bucket.push(newNum);
//         } else {
//             break;
//         }
//     }

//     if (bucket[0] < low) {
//         bucket.splice(0, 1);
//     }

//     console.log(bucket);
//     return bucket;
