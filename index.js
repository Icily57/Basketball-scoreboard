let homeScore = 0;
let guestScore = 0;
let period = 1;
let fouls = 0;
let timer;
let timeLeft = 600; // 10 minutes in seconds
let isTimerRunning = false;
let rotation = 0;
let spinning = false;
let spinInterval;

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById("home-score").textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById("guest-score").textContent = guestScore;
    }
    updateLeader();
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    period = 1;
    fouls = 0;
    timeLeft = 600;
    isTimerRunning = false;
    clearInterval(timer);
    updateDisplay();
}

function newGame() {
    resetScores();
    updateDisplay();
}

function updateLeader() {
    let home = document.getElementById("home");
    let guest = document.getElementById("guest");
    
    if (homeScore > guestScore) {
        home.style.color = "gold";
        guest.style.color = "white";
    } else if (guestScore > homeScore) {
        guest.style.color = "gold";
        home.style.color = "white";
    } else {
        home.style.color = "white";
        guest.style.color = "white";
    }
}

function startSpinning() {
    if (!spinning) {
        spinning = true;
        spinInterval = setInterval(() => {
            rotation += 5;
            document.querySelector(".basketball").style.transform = `rotate(${rotation}deg)`;
        }, 50);
    }
}

function stopSpinning() {
    spinning = false;
    clearInterval(spinInterval);
}

// Automatically start spinning on page load
document.addEventListener("DOMContentLoaded", () => {
    startSpinning();
});
