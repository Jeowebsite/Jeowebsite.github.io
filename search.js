// Sample array of game objects (replace this with your actual game data)
const games = [
    { title: "Slope", description: "A fun and challenging game. slope", url: "slope/index.html" },
    { title: "Slope 3", description: "", url: "Slope3/index.html" },
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
// Event listener for the "Enter" key press in the search input
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchGame();
    }
});
