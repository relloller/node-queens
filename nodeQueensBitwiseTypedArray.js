/*
github.com/relloller/node-queens
    Victor Shaw
    vshaw168@gmail.com
    3/24/17
    nodeQueensBitwiseTypedArray.js

    From terminal:
        node nodeQueensBitwiseTypedArray.js queenNumber posy
        *queenNumber and posy arguments must be integers

    This implementation allows bitwise solutions to be stored quickly in TypedArrays.
    Elements in these arrays are stored as powers of 2. 
    Added ability to select the position of the first queen in row 0 as represented by posy.
    
*/

var num = 10;
if(process.argv[2] && !Object.is(parseInt(process.argv[2],NaN))) num = parseInt(process.argv[2]);
else new TypeError('Requires integer');
var posy = null;
if(process.argv[3] && !Object.is(parseInt(process.argv[3],NaN))) posy = parseInt(process.argv[3]);
else new TypeError('Requires integer');


console.time('nqbit')
var nQResults = nQueensBitwise(num,posy);
console.timeEnd('nqbit');
console.log('typedArray', nQResults);


function nQueensBitwise(n, posy) {
    var count = 0;
    var solutions = [];
    var done = (1 << n) - 1;
  
    function nQRec(ld, col, rd, bitP=createBuffer(2*n),arrPos=0) {
       
        if (col === done) {
            count++;
            solutions.push(bitP.slice(0));
            }

        var poss = ~(ld | rd | col);
       
        while (poss & done) {
            var bit = poss & -poss;
            poss -= bit;
            bitP[arrPos]=bit;
            nQRec((ld | bit) >> 1, col | bit, (rd | bit) << 1, bitP, arrPos+1);
        }
    };

    if(posy!==null){
        var startY = Math.pow(2, posy);
        nQRec(startY >> 1, startY, startY << 1);
    }else {
        nQRec(0,0,0);
    }
    return {count:count, sols:solutions};
};

function createBuffer(len) {
    return (new Int16Array(new ArrayBuffer(len))).fill(99);
}

