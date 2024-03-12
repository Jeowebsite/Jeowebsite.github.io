document.addEventListener("DOMContentLoaded", function() {
    var counterElement = document.getElementById("counter");
    var timeLeft = 60; // 3 minutes in seconds

    var countdown = setInterval(function() {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        counterElement.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            document.getElementById("game-ad-container").style.display = "none";
        }
    }, 1000);
});
