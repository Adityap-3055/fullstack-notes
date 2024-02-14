const fs = require('fs')

const song = "This is a song lyrics ....";

fs.writeFileSync('song.txt', song)

const readfile = fs.readFileSync('song.txt', 'utf8')

console.log(readfile);