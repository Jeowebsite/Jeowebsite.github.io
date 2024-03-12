document.addEventListener("DOMContentLoaded", function() {
    var counterElement = document.getElementById("counter");
    var adBanner = document.getElementById("ad-banner");
    var timeLeft = 60; // 1 minute in seconds

    var countdown = setInterval(function() {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        counterElement.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdown);
            adBanner.classList.remove("visible");
            adBanner.classList.add("not-visible");
        }
    }, 1000);
});
