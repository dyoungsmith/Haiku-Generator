//Import FS module to read text files
var fs = require('fs');

//Set up text files
var hp = fs.readFileSync('./HP7.txt');
var motorcycle = fs.readFileSync('./moto.txt');


//Import Haiku module; find haikus
var haiku = require('./haiku');
console.log(haiku.findHaiku(hp));