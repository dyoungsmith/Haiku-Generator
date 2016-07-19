//Import FS module
var fs = require('fs');

//Read CMU dict file and convert to human-readable
function readCmudictFile(file){
  return fs.readFileSync(file).toString();
};
var cmudictFile = readCmudictFile('./cmudict.txt');


//Parse the CMU dict file
function formatData(data){    
	//Initialize dictionary array by number of syllables
	var dictBySyl = [];		
	for (var syllables = 0; syllables <= 9; syllables++){
		dictBySyl.push([]);	
	}

	//Split data file into separate lines (WORD PHONEME\n)
	var lines = data.toString().split("\n");

	//Create nested array with each line as an array [['WORD', 'PHENOME'], ...]
	for (var i = 0; i < lines.length; i++){
		var lineArr = [];
		lineArr.push(lines[i].split("  "));
		//console.log(lines[i]);
	}
	console.log(lineArr);

	//Populate dictionary arranged as syllable = index
	for (var i = 0; i < lineArr.length; i++){
    	var words = lineArr[i][0];	
    	var phonemes = lineArr[i][1];
    	// console.log(words);
    	// console.log(phonemes);	
    	//var numSyl = phonemes.match(/\d/g).length;
    	//dictBySyl[numSyl].push(words);
    }
	//console.log(dictBySyl);

    //Push each word into dictBySyl indexed by number of syllables
    //ex: 'TUNA' is dictBySyl[2][n]
	// lines.forEach(function(line){    
	// 	var lineSplit = line.split("  "); 

		// console.log(lineSplit);   
    	//console.log(lineSplit[0] + " $" + lineSplit[1]);
    	// var numSyllables = lineSplit[1].match(/\d/g).length;
    	// console.log(dictBySyl[lineSplit[1].match(/\d/g).length].push(lineSplit[0]));
    	// console.log(dictBySyl[numSyllables].push(lineSplit[0]));
    	//console.log(dictBySyl[numSyllables]);
	// });

	//console.log(dictBySyl);   
};


//Word and phoneme stash
formatData(cmudictFile);


//Word: lineSplit[0] on each line
	//need to account for { words at end of doc: RE word.match(/^[A-Z]/)
//Phoneme: lineSplit[1] on each line
	//Count number of syllables with RE phoneme.match(/\d/g).length 


//Generate haiku using CMU dict 
function createHaiku(structure){
	console.log("this should log a haiku with the structure " + structure);
};

/*function createHaiku(structure, syllabelsArr){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllabelsArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
};*/

//Export createHaiku
module.exports = {
	createHaiku: createHaiku,
};

//console.log(module);