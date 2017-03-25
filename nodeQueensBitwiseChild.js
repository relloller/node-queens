/*  https://github.com/relloller/node-queens
    Victor Shaw 
    vshaw168@gmail.com
    nodeQueensBitwiseChild.js

    *This is the script for the child process, please execute the parent process nodeQueensBitwiseParent.js 

*/
var nQ_num = parseInt(process.argv[2]);
var nQ_pos = parseInt(process.argv[3]);

process.stdin.on('data', (data) =>{
    nQ_pos = JSON.parse(data);
    resQF();
});

process.stderr.on('data', (data)=> {
    console.log('ps stderr', data);
});

resQF();

function resQF() {
    var resQ = nQueensBitwise(nQ_num, nQ_pos);
    if (nQ_num % 2 !== 1 || Math.floor(nQ_num / 2) !== nQ_pos) resQ *= 2; // for rows with symmetry, we multiple solutions by 2
    process.stdout.write(JSON.stringify(resQ));
}

function nQueensBitwise(n, posy) { // comment example case n=5, posy=2
    var count = 0;
    var done = (1 << n) - 1; // 0b11111111111111111111111111111111 is end case or 11111 if we remove leading 1s
    function nQRecurse(ld, col, rd) {
        if (col === done) count++;
        var bitSequence = ~(ld | col | rd); // ~(00010 | 00100 | 01000) = ~(01110) = 10001  (for starting pos 2)
        while (bitSequence & done) {
            var openBit = bitSequence & -bitSequence; // for 10001 first opening at pos 0 
            bitSequence -= openBit; //  changes bitSequence to 10000 from 10001 by adjusting for openBit at pos 0 
            nQRecurse((ld | openBit) >> 1, col | openBit, (rd | openBit) << 1); // 00001, 10010, 00101  = 10111
                    
            //In order    ld      col     rd
                        // ~( 00000 | 00000 | 00000 ) = ~(00000) = 11111 User set space at pos 2       O O X O O
                        // ~( 00010 | 00100 | 01000 ) = ~(01110) = 10001 first open space at pos 0     O O O O X
                        // ~( 00001 | 00101 | 10010 ) = ~(10111) = 01000 only open space at pos 3      O X O O O
                        // ~( 00100 | 01101 | 10100 ) = ~(11101) = 00010 only open space at pos 1      O O O X O
                        // ~( 00011 | 01111 | 01100 ) = ~(01111) = 10000 only open space at pos 4      X O O O O
                        //          | 11111 | col === done and so we have a valid solution [2,0,3,1,4];
        }
    }
    var startY = Math.pow(2, posy);
    nQRecurse(startY >> 1, startY, startY << 1);
    return count;
};
