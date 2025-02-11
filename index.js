let homeScore = 0;
let guestScore = 0;
let period = 1;
let fouls = 0;
let timer;
let timeLeft = 600; // 10 minutes in seconds

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
    clearInterval(timer);
    updateDisplay();
}

function newGame() {
    resetScores();
    startTimer();
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

function updateDisplay() {
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
    document.getElementById("period").textContent = period;
    document.getElementById("fouls").textContent = fouls;
    document.getElementById("timer").textContent = formatTime(timeLeft);
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").textContent = formatTime(timeLeft);
        } else {
            clearInterval(timer);
            alert("End of period!");
        }
    }, 1000);
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
