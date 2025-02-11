let homeScore = 0;
let guestScore = 0;

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById("home-score").textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById("guest-score").textContent = guestScore;
    }

    // Trigger basketball animation
    animateBasketball();
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
}

function animateBasketball() {
    let ball = document.getElementById("basketball");
    ball.classList.add("shoot");

    // Remove animation class after it completes
    setTimeout(() => {
        ball.classList.remove("shoot");
    }, 1000);
}
