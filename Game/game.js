const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');

let score = 0;

function moveTarget() {
    const maxX = gameArea.offsetWidth - target.offsetWidth;
    const maxY = gameArea.offsetHeight - target.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

function incrementScore() {
    score++;
    scoreDisplay.textContent = "Score: " + score;
}

target.addEventListener('click', () => {
    target.classList.add('hit'); // Visual feedback
    incrementScore();
    setTimeout(() => {  // Reset the target's color after a short delay
        target.classList.remove('hit');
        moveTarget();
    }, 300); // 300 milliseconds
});

moveTarget(); // Initial target placement