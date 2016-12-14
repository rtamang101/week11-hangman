module.exports = Letter;

function Letter(let){
	this.character = let;
	this.appear = false;

	this.letterRender = function(){
		return!(this.appear)? "_":this.character;
	};
};