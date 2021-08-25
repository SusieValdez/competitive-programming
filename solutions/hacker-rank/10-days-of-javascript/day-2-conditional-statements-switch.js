'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    }); 
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    const firstBatch = ["a", "e", "i", "o", "u"];
    const secondBatch = ["b", "c", "d", "f", "g"];
    const thirdBatch = ["h", "j", "k", "l", "m"];
    const lastBatch = ["n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Write your code here
    
    switch (true) {
        case firstBatch.includes(s[0]): 
        letter = "A";
        break;
        
        case secondBatch.includes(s[0]):
        letter = "B";
        break;
        
        case thirdBatch.includes(s[0]):
        letter = "C";
        break;
        
        case lastBatch.includes(s[0]):
        letter = "D";        
        break;
    }
    return letter;
}


function main() {
    const s = readLine();
    console.log(getLetter(s));
}