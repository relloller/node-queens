/*
github.com/relloller/node-queens
    Victor Shaw
    vshaw168@gmail.com
    3/24/17
    nodeQueensParent.js
    
    From terminal: 
        node nodeQueensParent.js queenNumber
        *queenNumber argument must be an integer
        
*/
'use strict'

console.time('nQ');

var num = 10;
if(process.argv[2] && !Object.is(parseInt(process.argv[2],NaN))) num = parseInt(process.argv[2]);
else new TypeError('Requires integer');
var posy = 0;
var solutions = (new Array(Math.ceil(num / 2))).fill(null);


var spawn = require('child_process').spawn;
var spawnEvents = new(require('events')).EventEmitter();
var cpus = require('os').cpus().length;
var childList = [];

spawnEvents.on('done', () => {
    var solutions_total = solutions.reduce((a,b)=>{return a+b});
    console.log(num + '-queens solutions:', solutions_total);
    console.timeEnd('nQ');
});

function spawnFnc() {
    var child = spawn('node', ['nodeQueensChild.js', num, posy]);
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
if(num>13) for(var i=0;i<cpus;i++) {
    posy++;
    spawnFnc();
}
