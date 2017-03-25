/*
github.com/relloller/node-queens
    Victor Shaw
    vshaw168@gmail.com
    3/24/17
    nodeQueensChild.js

    *This is script for the child process, please execute the parent process nodeQueensParent.js 
*/
'use strict';

var nQ_num = parseInt(process.argv[2]);
var nQ_posy = parseInt(process.argv[3]);
var nQ_pos = [0, nQ_posy];

process.stdin.on('data', function(data) {
    nQ_posy =  JSON.parse(data);
    nQ_pos = [0,nQ_posy];
    nodeQueensChild();
});

process.stderr.on('data', function(data) {
        console.log('ps stderr', data);
});

nodeQueensChild();

function nodeQueensChild() {
    var nqRes = nQueens(nQ_num, [nQ_pos]);
    if (nQ_num % 2 !== 1 || Math.floor(nQ_num / 2) !== nQ_posy) nqRes *= 2; // for rows with symmetry, we multiple solutions by 2
    process.stdout.write(JSON.stringify(nqRes));
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
    // return solutions;    //uncomment to return the placement solutions arrays and comment out line below
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