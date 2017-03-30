/*
github.com/relloller/node-queens
	Victor Shaw
	vshaw168@gmail.com
	3/24/17
    	nodeQueens.js
    
	From terminal:
	node nodeQueens.js '# of queens'
	'# of queens' must be integer
*/

'use strict';

var numq = 13; //default 13-queens without provided argument
if (process.argv[2] && !Object.is(parseInt(process.argv[2]), NaN)) numq = parseInt(process.argv[2]);
else if (!process.argv[2]) console.log('without parameter, default n is ' + numq + '-queens');
else throw new TypeError(process.argv[2] + ' must be an integer');

function nQueensSymmetry(n){
    var middlePos=Math.floor(n/2);
    var sols = 0;
    for (var i = 0; i < middlePos; i++) sols+=nQueens(n,[[0,i]])*2;
    if (n%2===1) sols+=nQueens(n,[[0,middlePos]]);
    return sols;
}

function nQueens(boardsize, arr = []) {
    var solutions=[];
    function nQueensRec(boardsize, arr) {
        var arrL = arr.length;
        if (arrL === boardsize) solutions.push(arr);
        else for(var q = 0; q < boardsize; q++) {
            if(checkSpaceEach(arr, [arrL, q])) nQueensRec(boardsize, arr.concat([[arrL, q]]));
        }
    }
    nQueensRec(boardsize, arr);
    //console.log('solutions', solutions); //to view placement of queens
    return solutions.length;
}

function checkRow(a, b) { return (a[0] !== b[0])}  //checkRow is not needed in this recursive implementation
function checkColumn(a, b) {  return (a[1] !== b[1])}
function checkDiagonal(a, b) { return (Math.abs(a[0] - b[0]) !== Math.abs(a[1] - b[1]))}
function checkSpace(a, b) {return checkColumn(a, b) && checkDiagonal(a, b)}
function checkSpaceEach(arr, pos) {
    for (var i = 0; i < arr.length; i++) if(!checkSpace(arr[i],pos)) return false;
    return true;
}


console.time('nq');
var nodeQueensSolutions = nQueensSymmetry(numq);
console.timeEnd('nq')
console.log(numq+'-nqueens','solutions:',nodeQueensSolutions);
