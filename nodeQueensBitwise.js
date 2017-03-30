/*
github.com/relloller/node-queens
    Victor Shaw
    vshaw168@gmail.com
    3/24/17
    nodeQueensBitwise.js

    From terminal:
        node nodeQueensBitwise.js queenNumber
        *queenNumber argument must be an integer

References: "Backtracking Algorithms in MCPL using Bit Patterns and Recursion" - Martin Richards 
            "Bitwise solution to N-Queens in Javascript". www.gregtrowbridge.com - Greg Trowbridge
*/
'use strict';

var numq = 13; //default 13-queens without argument
if (process.argv[2] && !Object.is(parseInt(process.argv[2]), NaN)) numq = parseInt(process.argv[2]);
else if (!process.argv[2]) console.log('without parameter, default n is ' + numq + '-queens');
else throw new TypeError(process.argv[2] + ' must be an integer');

//takes into account board symmetry
function nQueensSymmetry(n){
    var middlePos=Math.floor(n/2);
    var sols = 0;
    for (var i = 0; i < middlePos; i++) sols+=nQueensBitwise(n, i)*2;
    if (n%2===1) sols+=nQueensBitwise(n, middlePos);
    return sols;
}

function nQueensBitwise(n, pos) {
    var count = 0;
    var done = (1 << n) - 1;
    function nQRec(ld, col, rd) {
        if (col === done) count++;
        var poss = ~(ld | rd | col);
        while (poss & done) {
            var bit = poss & -poss;        
            poss -= bit;
            nQRec((ld | bit) >> 1, col | bit, (rd | bit) << 1);
        }
    };
    var startY = Math.pow(2, pos);
    nQRec(startY >> 1, startY, startY << 1);
    return count;
};
 

console.time('nq');
var nQueensResult = nQueensSymmetry(numq);
console.timeEnd('nq');
console.log(numq+'-nqueens','solutions:',nQueensResult);

