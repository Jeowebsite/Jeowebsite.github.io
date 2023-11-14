// Sample array of game objects (replace this with your actual game data)
const games = [
    { title: "Slope", url: "slope/index.html" },
    { title: "Slope 3", url: "Slope3/index.html" },
    { title: "Duck Life", url: "Ducklife1/index.html" },
    { title: "Duck Life 2", url: "Ducklife2/index.html" },
    { title: "Duck Life 3", url: "Ducklife3/index.html" },
    { title: "Duck Life 4", url: "Ducklife4/index.html" },
    // Add more game objects...
];
// Sample array of game objects (replace this with your actual game data)

let recentSearches = [];

// Function to perform the game search
function searchGame() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchTerm !== '') {
        const foundGame = games.find(game => game.title.toLowerCase().includes(searchTerm));

        if (foundGame) {
            window.location.href = foundGame.url;
            // Add the search term to recent searches if a game is found
            addToRecentSearches(searchTerm);
        } else {
            alert('Game not found. Please try another search term.');
        }
    }
}

// Function to add search term to recent searches
function addToRecentSearches(term) {
    if (!recentSearches.includes(term)) {
        recentSearches.unshift(term); // Add to the beginning of the array
        if (recentSearches.length > 5) {
            recentSearches.pop(); // Remove the oldest search term if the array length exceeds 5
        }
        displayRecentSearches();
    }
}

// Function to display recent searches
function displayRecentSearches() {
    const recentList = document.getElementById('recentList');
    recentList.innerHTML = ''; // Clear previous list items

    recentSearches.forEach(term => {
        const listItem = document.createElement('li');
        listItem.textContent = term;
        recentList.appendChild(listItem);
    });
}
