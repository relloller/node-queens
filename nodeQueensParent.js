/*
github.com/relloller/node-queens
    Victor Shaw
    vshaw168@gmail.com
    3/24/17
    nodeQueensParent.js
    
    From terminal: 
        node nodeQueensParent.js '#ofQueens'
        '#ofQueens' must be integer
        
*/
'use strict'

var spawn = require('child_process').spawn;
var spawnEvents = new(require('events')).EventEmitter();
var cpus = require('os').cpus().length;

var numq = 13; //default 13-queens without provided argument
if (process.argv[2] && !Object.is(parseInt(process.argv[2]), NaN)) numq = parseInt(process.argv[2]);
else if (!process.argv[2]) console.log('without parameter, default n is ' + numq + '-queens');
else throw new TypeError(process.argv[2] + ' must be an integer');
var posy = 0;
var solutions = (new Array(Math.ceil(numq / 2))).fill(null);
var childList = [];

spawnEvents.on('done', () => {
    var solutions_total = solutions.reduce((a,b)=>{return a+b});
    console.log(numq + '-queens solutions:', solutions_total);
    console.timeEnd('nQ');
});

function spawnFnc() {
    var child = spawn('node', ['nodeQueensChild.js', numq, posy]);
    childList.push(child.pid); 
    child.posy = posy;
    // console.log('child', childList.length, 'child.pid',child.pid);
    child.stdout.on('data', (data) => {
        solutions[child.posy] = JSON.parse(data);
        // console.log('solutions', solutions);
        if (posy + 1 >= Math.ceil(numq / 2)) {
            child.kill(); //i do not condone violent syntax
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
    });
}

function spawnLimiter() {
    var spawnLimit = cpus;
    if (cpus > Math.ceil(numq / 2)) spawnLimit = Math.ceil(numq / 2);
    spawnFnc();
    for (var i = 0; i < spawnLimit-1; i++) spawnFnc(posy++);
}


console.time('nQ');
spawnLimiter();