//Import FS module
var fs = require('fs');

//Read CMU dict file and convert to human-readable
function readCmudictFile(file){
  return fs.readFileSync(file).toString();
};
var cmudictFile = readCmudictFile('./cmudict.txt');


//Parse the CMU dict file and create dictionary by syllable count (array index)
function formatData(data){    
	//Initialize dictionary array by number of syllables
	var dictBySyl = [];		
	for (var syllables = 0; syllables <= 25; syllables++){
		dictBySyl.push([]);	
	}

	//Split data file into separate lines (WORD PHONEME\n)
	var lines = data.toString().split("\n");

	//Create nested array with each line as an array [['WORD', 'PHENOME'], ...]
	var lineArr = [];
	for (var i = 0; i < lines.length; i++){	
		lineArr.push(lines[i].split("  "));
	}

	//Populate dictionary arranged by syllable = index
	for (var i = 0; i < lineArr.length; i++){
    	var words = lineArr[i][0];	
    	var phonemes = lineArr[i][1];
    	var numSyl = phonemes.match(/\d/g).length;
    	dictBySyl[numSyl].push(words);
    }  
    // console.log(dictBySyl);
    return dictBySyl;
};


//Word by syllable count stash
var dictionary = formatData(cmudictFile);


//Generate haiku using generated syllable dictionary
//arr arguments should contain desired number of syllables per word, per line 
function createHaiku(arr1, arr2, arr3){
	var structure = Array.prototype.slice.call(arguments);
	var poem = '';
	structure.forEach(function(line){
		for (var i = 0; i < line.length; i++){
			var syl = line[i];
			var randomWord = dictionary[syl][Math.floor(Math.random() * dictionary[syl].length)];
			poem += randomWord + ' ';
		}
		poem += '\n';
	});
	return poem;
}


//Export createHaiku
module.exports = {
	createHaiku: createHaiku,
};
