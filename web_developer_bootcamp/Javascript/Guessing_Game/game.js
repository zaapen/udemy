//create secretNumber

var secretNumber = 4;

//ask user for guess
var stringGuess = prompt('Guess a number');
var guess = Number(stringGuess);

//check if guess is right

if (guess === secretNumber) {
	alert('YOU GOT IT RIGHT');
}
//otherwise, check if guess is higher
else if (guess > secretNumber) {
	alert('Too high. Guess again!');
}
//otherwise, check if guess is lower
else {
	alert('Too low. Guess again!');
}