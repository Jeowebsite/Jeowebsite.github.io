// Game List
// Games in sep file
// Parse console query parameter from URL
var urlParams = new URLSearchParams(window.location.search);
var consoleFilter = urlParams.get("console");
let searchParam = urlParams.get("s");

if (consoleFilter) {
let filterQuery = document.getElementById(consoleFilter);
filterQuery.classList.add("active");
filterQuery.classList.add(consoleFilter);
}
// Filter games by console
var filteredGames = games.filter(function (game) {
  gameName = game.name
    .replace(/(\([^\)]*\)|\.[^.]+|_=)+$/g, "")
  return games;
});



// Create index and add documents to it
var index = lunr(function () {
  this.ref("name");
  this.field("name", { boost: 10 });
  this.field("console", { boost: 5 });

  // Add fuzzy matching modifiers to name field
  this.field("name", {
    boost: 10,
    fuzzy: true,
    usePipeline: true,
    trigrams: true,
    threshold: 0.7,
    tokenizer: lunr.tokenizer,
    term: lunr.tokenizer.term,
  });

  filteredGames.forEach(function (game) {
    this.add(game);
  }, this);
});


let filters = document.querySelectorAll(".filter");
filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
        filter.classList.toggle("active");
        let id = filter.id;
        filter.classList.toggle(id);
        handleSearchInput();
    });
});


var searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", handleSearchInput);


if (searchParam) {
    document.getElementById("search-input").value = searchParam;
    handleSearchInput();
}

function handleSearchInput() {
    var query = searchInput.value.toLowerCase() + "*"; // Convert query to lowercase and add wildcard
    var searchResults = document.querySelector("#search-results");
  
    if (searchInput.value === "") {
      searchResults.innerHTML = "";
      return;
    }
  
    // Clear existing search results
    searchResults.innerHTML = "";
  
    // Filter by console if console filters are active
    var consoleFilters = document.querySelectorAll(".filter.active");
    var filteredGamesByConsole = filteredGames.filter(function (game) {
      if (consoleFilters.length === 0) {
        return true;
      }
      var hasMatchingConsole = false;
      for (var i = 0; i < consoleFilters.length; i++) {
        if (game.console === consoleFilters[i].id) {
          hasMatchingConsole = true;
          break;
        }
      }
      return hasMatchingConsole;
    });
  
    // Perform a case-insensitive and partial search on the index
    var results = index.query(function (q) {
      q.term(query, {
        boost: 10,
        wildcard: lunr.Query.wildcard.TRAILING | lunr.Query.wildcard.LEADING,
        usePipeline: true,
      });
    });
  
    // Loop through search results and show
    if (results.length > 0) {
      var numResults = Math.min(results.length, 50); // Limit to 1000 results
      for (var i = 0; i < numResults; i++) {
        var result = results[i];
        var game = filteredGamesByConsole.find(function (g) {
          return g.name === result.ref;
        });
        console.log(game);
        var li = document.createElement("li");
        if (game) {
          li.classList.add(game.console);
          li.textContent = game.name;
          console.log(game);
        } else {
          li.textContent = "No Games Found";
        }
        let consoleType = game.console;
        let providedGame = game.name;
        let newLink =
          "../play/index.html?console=" + consoleType + "&game=" + providedGame;
        li.onclick = function () {
          window.location.href = newLink;
        };
        li.classList.add("rom-title");
        searchResults.appendChild(li);
      }
    } else {
      // Otherwise nothing found
      var li = document.createElement("li");
      li.textContent = "No results found";
      li.style.textAlign = "center";
      searchResults.appendChild(li);
    }
  }
