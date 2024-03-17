var consoleType = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];
var urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get("page");
if (!page) {
    page = 1;
}

let pageNum = document.getElementsByClassName("page-text")[0];
pageNum.innerHTML = 'Page: ' + page;

function loadGames() {
  // Load the JSON data from the file
  fetch("json/" + consoleType + ".json")
    .then(response => response.json())
    .then(data => {
      const gamesPerPage = 50;
      const startIndex = (page - 1) * gamesPerPage;
      const endIndex = startIndex + gamesPerPage;
      const games = data.slice(startIndex, endIndex);
      console.log(data);

      // Create a new rom-add element for each game
      games.forEach(game => {
        const romAdd = document.createElement("rom-add");
        romAdd.setAttribute("console", game.console);
        romAdd.setAttribute("game", game.game);
        document.body.appendChild(romAdd);
      });
    })
    .catch(error => {
      console.error("Error loading JSON data:", error);
    });
}

loadGames();

const backMultiple = document.getElementById("backMultiple");
const backPage = document.getElementById("backPage");
const forwardPage = document.getElementById("forwardPage");
const forwardMultiple = document.getElementById("forwardMultiple");

var url = window.location.href.split('?')[0];
let interval = 5;

backMultiple.addEventListener("click", function() {
    let backAmount = parseInt(page) - interval;
    if (backAmount < 1) {
        backAmount = 1;
    }
    window.location.href = url + "?page=" + backAmount;
});

backPage.addEventListener("click", function() {
    let backAmount = parseInt(page) - 1;
    if (backAmount < 1) {
        backAmount = 1;
    }
    window.location.href = url + "?page=" + backAmount;
});

forwardPage.addEventListener("click", function() {
    let forwardAmount = parseInt(page) + 1;
    window.location.href = url + "?page=" + forwardAmount;
});

forwardMultiple.addEventListener("click", function() {
    let forwardAmount = parseInt(page) + interval;
    window.location.href = url + "?page=" + forwardAmount;
});