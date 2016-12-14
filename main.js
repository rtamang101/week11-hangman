var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

game = {
	wordBank : ['Led Zeppelin', 'Nirvana', 'Beatles', 'Pink Floyd','Pearl Jam', 'AC DC', 'Radiohead', 'Black Sabbath', 'Aerosmith','Def Leppard', 'Metallica', 'Queen', 'Creed','The Doors','RATM', 'Coldplay', 'Avenged Sevenfold', 'Megadeth', 'The Who', 'Red Hot Chilli Peppers', 'The Rolling Stones', 'Linkin Park','Green Day', 'Lynrd Skynyrd', 'Soundgarden', 'Stone Temple Pilots', 'Creedence Clearwater Revival', 'Iron Maiden', 'Slipknot'],
	wordWon : 0,
	guessRemaining : 10,
	currentWord : null,
	startGame : function(wrd){
		this.resetGuessRemaining();
		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		this.currentWord.getlets();
		this.repeatPrompt();
	},

	resetGuessRemaining : function(){
		this.guessRemaining = 10;
	},

	repeatPrompt : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result){
			console.log('you guessed: '+ result.guessLetter);
			var checkGuess = self.currentWord.checkLetter(result.guessLetter);
			if(checkGuess ==0){
				console.log('***** WRONG *****');
				self.guessRemaining--;

			}else{
				console.log('yay!! you got it!!');
				if(self.currentWord.FoundWord()){
					console.log('you won!');
					return;
				}
			}

			console.log('guess remaining: ', self.guessRemaining);
			console.log(self.currentWord.wordRender());

			if((self.guessRemaining>0)&&(self.currentWord.found == false)){
				self.repeatPrompt();
			}else if(self.guessRemaining == 0){
				console.log('you lost you sore looser! lol. It was : ', self.currentWord.word);

			}else{
				console.log(self.currentWord.wordRender());
			}
		});
	}
};

game.startGame();