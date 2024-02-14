// first we need to require the 'fs' and store it in a cons variable
const fs = require('fs')

const songs = fs.readFileSync('song.txt', 'utf8')

console.log(songs);

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'song.txt');
// const songs = fs.readFileSync(filePath, 'utf-8');

// console.log(songs);
