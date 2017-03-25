/*
    github.com/relloller/node-queens
    Victor Shaw
    vshaw168@gmail.com
    3/24/17
    nodeQueensBitwiseParent.js

    From terminal:
        node nodeQueensBitwiseParent.js queenNumber
        *queenNumber must be integer


References: "Backtracking Algorithms in MCPL using Bit Patterns and Recursion" - Martin Richards 
            "Bitwise solution to N-Queens in Javascript". www.gregtrowbridge.com - Greg Trowbridge

*/

console.time('nQ');

var spawn = require('child_process').spawn;
var spawnEvents = new(require('events')).EventEmitter();
var cpus = require('os').cpus().length;
var childList = [];

var num = 10;
if(process.argv[2] && !Object.is(parseInt(process.argv[2],NaN))) num = parseInt(process.argv[2]);
else new TypeError('Requires integer');
var posy = 0;
var solutions = (new Array(Math.ceil(num / 2))).fill(null);

spawnEvents.on('done', () => {
    var solutions_total = solutions.reduce((a,b)=>{return a+b});
    console.log(num + '-queens solutions:', solutions_total);
    console.timeEnd('nQ');
});

function spawnFnc() {
    var child = spawn('node', ['nodeQueensBitwiseChild.js', num, posy]);
    childList.push(child.pid); 
    child.posy = posy;

    child.stdout.on('data', (data) => {
        solutions[child.posy] = JSON.parse(data);
        console.log('solutions', solutions);
        if (posy + 1 >= Math.ceil(num / 2)) {
            child.kill(); //what violent syntax
        } else {
            child.posy = ++posy;
            child.stdin.write(JSON.stringify(posy));
        }
    });

    child.stderr.on('data', (dataErr) => {
        console.log(`stderr: ${dataErr}`);
    });

    child.on('close', (code) => {
        console.log('child process ' + child.pid + ' exited with code ' + `${code}`);
        childList.splice(childList.indexOf(child.pid), 1);
        if(childList.length<1 && solutions.every((e)=>{return e!==null})) spawnEvents.emit('done');
    })
}

spawnFnc();
cpus*=2
if (num > 13) {
    for (var i = 0; i < cpus; i++) {
        posy += 1;
        spawnFnc();
    }
}
