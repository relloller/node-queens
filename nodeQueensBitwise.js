/*
github.com/relloller/node-queens
    Victor Shaw
    vshaw168@gmail.com
    3/24/17
    nodeQueensBitwise.js

    From terminal:
        node nodeQueensBitwise.js queenNumber
        *queenNumber argument must be an integer

    Added ability to select the position of the first queen in row 0 as represented by posy.

References: "Backtracking Algorithms in MCPL using Bit Patterns and Recursion" - Martin Richards 
            "Bitwise solution to N-Queens in Javascript". www.gregtrowbridge.com - Greg Trowbridge
*/

var num = 10;
if(process.argv[2] && !Object.is(parseInt(process.argv[2],NaN))) num = parseInt(process.argv[2]);
else new TypeError('Requires integer');
var posy = null;
if(process.argv[3] && !Object.is(parseInt(process.argv[3],NaN))) posy = parseInt(process.argv[3]);
else new TypeError('Requires integer');

console.time('nq');
console.log(num+'-nqueens','solutions:',nQueensBitwise(num,posy));
console.timeEnd('nq');

function nQueensBitwise(n, posy) {
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
    if(posy !== null) {
        var startY = Math.pow(2, posy);
        nQRec(startY >> 1, startY, startY << 1);
    } else { nQRec(0,0,0); }
    return count;
};
 

