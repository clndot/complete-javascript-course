/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// Initialize
var scores, currentScore, activePlayer, gamePlaying, previousDice;
initGame();

// //document.querySelector('#current-' + activePlayer).textContent = dice;
// //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);

function initGame(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousDice = 0;

    // Set all values to 0
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

// // Button roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // Generate random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // Update dice image
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // Update the score if it is not 1
        if(dice !== 1) {
            // Player loses entire score if two 6s are rolled in a row
            if(dice == 6 && previousDice == 6) {
                scores[activePlayer] = 0;
                currentScore = 0;
                document.querySelector('#current-' + activePlayer).textContent = currentScore;
                nextPlayer();

            } else {
                currentScore += dice;
                previousDice = dice;
                document.querySelector('#current-' + activePlayer).textContent = currentScore;
            }

        } else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            currentScore = 0;

            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;

            nextPlayer();
            document.querySelector('.dice').style.display = 'none';

        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += currentScore;

        // Update the UI with the global score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var maxScore = document.querySelector('#maxScore').value || 100;

        // Check if a player won the game
        if (scores[activePlayer] >= maxScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
            gamePlaying = false;

        } else {
            // Toggle
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', initGame);

function nextPlayer(){
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}