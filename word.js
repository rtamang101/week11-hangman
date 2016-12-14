module.exports = Word;
var Letter = require('./letter.js');
function Word(wrd){
	this.word = wrd;
	this.lets = [];
	this.found = false;

	this.getlets = function(){
		for (var i=0; i<this.word.length; i++){
			this.lets.push(new Letter(this.word[i]));
		}
	};

	this.FoundWord = function(){
		this.found = this.lets.every(function(currentLet){
			return currentLet.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLetter){
		var guessedLetter = 0;
		for(i=0; i<this.lets.length; i++){
			if(this.lets[i].character == guessLetter){
				this.lets[i].appear = true;
				guessedLetter++;
			}
		}

		return guessedLetter;
	};

	this.wordRender = function(){
		var str = '';

		for(i=0; i<this.lets.length; i++){
			str += this.lets[i].letterRender();
		}
		return str;
	};
}