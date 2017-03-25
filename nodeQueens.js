/*
github.com/relloller/node-queens
	Victor Shaw
	vshaw168@gmail.com
	3/24/17
    nodeQueens.js
    
	From terminal:
		node nodeQueens.js queenNumber
		*queenNumber must be integer
*/


'use strict';

var nqueens = 10;
if(process.argv[2] && !Object.is(parseInt(process.argv[2],NaN))) nqueens = parseInt(process.argv[2]);
else new TypeError('Argument must be an integer');
console.time('nq');
console.log(nqueens+'-nqueens','solutions:',nodeQueens(nqueens));
console.timeEnd('nq');

function nodeQueens(n){
    var middlePos=Math.floor(n/2);
    var sols = 0;
	for (var i = 0; i < middlePos; i++) sols+=nQueens(n,[[0,i]])*2;
	if(n%2===1) sols+=nQueens(n,[[0,mids]]);
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
    console.log('solutions', solutions);
    return solutions.length;
}

function checkRow(a, b) { return (a[0] !== b[0])}  //checkRow is not needed in this recursive implementation
function checkColumn(a, b) {  return (a[1] !== b[1])}
function checkDiagonal(a, b) { return (Math.abs(a[0] - b[0]) !== Math.abs(a[1] - b[1]))}
function checkSpace(a, b) {return (checkRow(a, b) && checkColumn(a, b) && checkDiagonal(a, b))}
function checkSpaceEach(arr, pos) {
    for (var i = 0; i < arr.length; i++) {
    	if ((checkColumn(arr[i], pos) && checkDiagonal(arr[i], pos)) === false) return false;
    }
    return true;
}
