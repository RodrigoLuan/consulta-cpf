
const readline = require('readline');
const fs = require('fs');
const verificacpf = require('./verificacpf');

 
const rl = readline.createInterface({
    input: fs.createReadStream('lista-cpfs.txt'),
    output: process.stdout,
    terminal: false
})

rl.on('line', function(line){
    verificacpf(`${line}`)
})