/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, firstRoll, winScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		//1. Random number
		var dice = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		console.log('dice1 = ' + dice);
		console.log('dice2 = ' + dice2);

		//2. Display the result
		var diceDOM = document.querySelector('.dice')
		var dice2DOM = document.querySelector('.dice2')

		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		dice2DOM.style.display = 'block';
		dice2DOM.src = 'dice-' + dice2 + '.png';



		//3. Update the round score If the rolled number was not a 1
		if (dice === 6 && firstRoll === 6) {
			scores[activePlayer] = 0;
			document.querySelector('#current-' + activePlayer).textContent = '0';
			nextPlayer();
		}

		if (dice !== 1 && dice2 !== 1) {
			//Add Score
			var totalDice = dice + dice2;
			roundScore += totalDice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

		} else {
			// Next Player
			
			nextPlayer();
		}

		firstRoll = dice
		console.log("firstRoll = " + firstRoll);
		console.log('dice = ' + dice);
	}

});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add current score to Global Score
		scores[activePlayer] += roundScore


		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// check if the player won the game
		if (scores[activePlayer] >= winScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}

		// Next Player
	}
	
	
});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	firstRoll = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	inputScore = document.getElementById('setScore').value;

	if (inputScore) {
		winScore = inputScore;
	} else {
		winScore = 100;
	}

	console.log("winning score = " + winScore);

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;