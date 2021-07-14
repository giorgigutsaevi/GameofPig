const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const resetGame = document.querySelector('.btn--new');


const scores = [0, 0]

let current0Score = document.querySelector('#current--0')
let current1Score = document.querySelector('#current--1')

let player0Score = document.querySelector('#score--0')
let player1Score = document.querySelector('#score--1')

let currentScore = 0;
let playing = true;
let currentPlayer = 0;

const switchPlayer = function () {
	document.getElementById(`current--${currentPlayer}`).textContent = 0;
	currentPlayer = currentPlayer === 0 ? 1 : 0;
	currentScore = 0;
	document.querySelector('.player--0').classList.toggle('player--active')
	document.querySelector('.player--1').classList.toggle('player--active')
}

btnRoll.addEventListener('click', function () {
	if (playing) {
		document.querySelector('.dice').classList.remove('hidden');
		let dice = Math.floor(Math.random() * 6) + 1;
		let imgUrl = `./dice-img/dice-${dice}.png`

		document.querySelector('.dice').src = imgUrl
		if (dice != 1) {
			currentScore += dice;
			document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
})

btnHold.addEventListener('click', function () {
	if (playing) {
		scores[currentPlayer] += currentScore;
		document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
		if (scores[currentPlayer] >= 50) {
			playing = false;
			document.querySelector('.dice').classList.add('hidden')
			document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner')
			document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
		} else {
			switchPlayer();
		}
	}
})

resetGame.addEventListener('click', function () {
	document.querySelector(`.player--${currentPlayer}`).classList.remove('player--winner');
	if (currentPlayer === 1) {
		document.querySelector('.player--1').classList.remove('player--active');
	}
	document.querySelector('.player--0').classList.add('player--active');
	currentScore = 0
	currentPlayer = 0;
	playing = true;
	scores[0] = currentScore;
	scores[1] = currentScore;
	document.getElementById('current--0').textContent = currentScore;
	document.getElementById('current--1').textContent = currentScore;
	document.getElementById('score--0').textContent = scores[currentPlayer];
	document.getElementById('score--1').textContent = scores[currentPlayer];
})
