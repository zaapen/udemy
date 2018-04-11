var questionArray = [];
var questionAsked = false;
var randomQ;
var answerCorrect;
var randomQuestion;
var score = 0;

var Question = function(question, answer, correctAnswer) {
	this.question = question;
	this.answer = answer;
	this.correctAnswer = correctAnswer;
}

var carQuestion = new Question(
	'How many horse power is the Nissan GTR?',
	["0 = 300hp", "1 = 400hp", "2 = 590hp"],
	"2");

var jsQuestion = new Question(
	'Is Javascript fun?',
	['0 = no', '1 = yes', '2 = I don\'t know'],
	"1");

var dannyQuestion = new Question(
	'What is Danny\'s car color?',
	['0 = Red', '1 = Black', '2 = White', '3 = Blue'],
	"2");

questionArray.push(carQuestion);
questionArray.push(jsQuestion);
questionArray.push(dannyQuestion);

function askQuestion() {
	randomQuestion = Math.floor(Math.random() * 3);
	for (var i = 0; i < questionArray[randomQuestion].answer.length; i++) {
		console.log(questionArray[randomQuestion].answer[i]);
	}
	console.log('---------------------------------------------');
	randomQ = prompt(questionArray[randomQuestion].question);
	answerCorrect = questionArray[randomQuestion].correctAnswer;

	
	checkQuestion();
	
}


function checkQuestion() {
	// console.log('randomQ = ' + randomQ);
	// console.log('answerCorrect = ' + answerCorrect);
	if (randomQ === answerCorrect) {
		console.log("You are correct");
		score++;
		console.log('Score = ' + score);
		askQuestion();
	} else if (randomQ === 'exit') {
		randomQ = 'stop';
	} else {
		console.log("Wrong answer");
		console.log('Score = ' + score);
		askQuestion();
	}
}

askQuestion();
