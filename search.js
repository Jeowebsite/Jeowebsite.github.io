// Sample array of game objects (replace this with your actual game data)
const games = [
    { title: "Advance wars1", description: "A fun and challenging game. slope", url: "Advance-wars1/index.html" },
    { title: "Advance wars2", description: "A fun and challenging game. slope", url: "Advance-wars2/index.html" },
    { title: "Donkey Kong-Country1", description: "A fun and challenging game. slope", url: "Donkey-Kong-Country1/index.html" },
    { title: "Donkey Kong Country 3", description: "A fun and challenging game. slope", url: "DonkeyKong3/index.html" },
    { title: "Donkey Kong Country 2", description: "A fun and challenging game. slope", url: "DonkeyKongCountry2/index.html" },
    { title: "Pokemon Fire Red", description: "A fun and challenging game. slope", url: "Pokemon-Fire-Red/index.html" },
    { title: "Pokemon Saphire", description: "A fun and challenging game. slope", url: "Pokemon-Saphire/index.html" },
    { title: "Pokemon emrald", description: "A fun and challenging game. slope", url: "Pokemon-emrald/index.html" },
    { title: "Pokemon leafGreen", description: "A fun and challenging game. slope", url: "Pokemon-leafGreen/index.html" },
    { title: "Pokemon mystery", description: "A fun and challenging game. slope", url: "Pokemon-mystery/index.html" },
    { title: "Pokemon ruby", description: "A fun and challenging game. slope", url: "Pokemon-ruby/index.html" },
    { title: "Slope", description: "A fun and challenging game. slope", url: "slope/index.html" },
    { title: "Slope 3", description: "Slope 3", url: "Slope3/index.html" },
    { title: "ovo", description: "", url: "0v0/index.html" },
    { title: "1on1Basketball", description: "", url: "1on1Basketball/index.html" },
    { title: "1on1soccer", description: "soccer", url: "1on1soccer/index.html" },
    { title: "1on1SoccerBigHeads", description: "", url: "1on1SoccerBigHeads/index.html" },
    { title: "1v1lol", description: "", url: "1v1lol/index.html" },
    { title: "1v1space", description: "", url: "1v1space/index.html" },
    { title: "99balls", description: "", url: "99balls/index.html" },
    { title: "Burrito Bison", description: "", url: "Burrito-Bison/index.html" },
    { title: "Dino Game", description: "", url: "Dino-Game/index.html" },
    { title: "DriftBoss", description: "", url: "DriftBoss/index.html" },
    { title: "Ducklife1", description: "", url: "Ducklife1/index.html" },
    { title: "Ducklife2", description: "", url: "Ducklife2/index.html" },
    { title: "Ducklife3", description: "", url: "Ducklife3/index.html" },
    { title: "Ducklife4", description: "", url: "Ducklife4/index.html" },
    { title: "Houserofhasards", description: "", url: "Houserofhasards/index.html" },
    { title: "Masked forces", description: "", url: "Masked-forces/index.html" },
    { title: "My rusty submarine", description: "", url: "My-rusty-submarine/index.html" },
    { title: "Rocket Soccer", description: "", url: "Rocket-Soccer/index.html" },
    { title: "Spiral Role", description: "", url: "Spiral-Role/index.html" },
    { title: "The heist", description: "", url: "The-heist/index.html" },
    { title: "There-is-no-game", description: "", url: "There-is-no-game/index.html" },
    { title: "Time Shooter", description: "", url: "Time-Shooter/index.html" },
    { title: "Time Shooter-swat", description: "", url: "Time-Shooter-swat/index.html" },
    { title: "Tiny fishing", description: "", url: "Tiny-fishing/index.html" },
    { title: "TunnelRush", description: "", url: "TunnelRush/index.html" },
    { title: "aqua park", description: "", url: "aqua-park/index.html" },
    { title: "atari breakout", description: "", url: "atari-breakout/index.html" },
    { title: "bloxors", description: "", url: "bloxors/index.html" },
    { title: "btd1", description: "", url: "btd1/index.html" },
    { title: "btd2", description: "", url: "btd2/index.html" },
    { title: "btd3", description: "", url: "btd3/index.html" },
    { title: "drift hunter", description: "", url: "drift-hunter/index.html" },
    { title: "fnf hex", description: "", url: "fnf-hex/index.html" },
    { title: "fnf imposter", description: "", url: "fnf-imposter/index.html" },
    { title: "fnf mobile", description: "", url: "fnf-mobile/index.html" },
    { title: "fnf shaggy", description: "", url: "fnf-shaggy/index.html" },
    { title: "fnf slender", description: "", url: "fnf-slender/index.html" },
    { title: "fnf sonic.exe", description: "", url: "fnf-sonic.exe/index.html" },
    { title: "fnf stick-man", description: "", url: "fnf-stick-man/index.html" },
    { title: "fnf", description: "", url: "fnf/index.html" },
    { title: "fruit ninja", description: "", url: "fruit-ninja/index.html" },
    { title: "idle breakout", description: "", url: "idle-breakout/index.html" },
    { title: "impossible quiz", description: "", url: "impossiblequiz/index.html" },
    { title: "justfall.lol", description: "", url: "justfall.lol/index.html" },
    { title: "justoneboss", description: "", url: "justoneboss/index.html" },
    { title: "papa cheseria", description: "", url: "papa-cheseria/index.html" },
    { title: "papa cupcake", description: "", url: "papa-cupcake/index.html" },
    { title: "papa dogeria", description: "", url: "papa-dogeria/index.html" },
    { title: "papa donutria", description: "", url: "papa-donutria/index.html" },
    { title: "papa freezeria", description: "", url: "papa-freezeria/index.html" },
    { title: "papa burger", description: "", url: "papa-gurger/index.html" },
    { title: "papa pancakearia", description: "", url: "papa-pancakearia/index.html" },
    { title: "papa pasteria", description: "", url: "papa-pasteria/index.html" },
    { title: "papa pizza", description: "", url: "papa-pizza/index.html" },
    { title: "papa scooprea", description: "", url: "papa-scooprea/index.html" },
    { title: "papa suchiria", description: "", url: "papa-suchiria/index.html" },
    { title: "papa tacomia", description: "", url: "papa-tacomia/index.html" },
    { title: "papa wingaria", description: "", url: "papa-wingaria/index.html" },
    { title: "retro bowl", description: "", url: "retro-bowl/index.html" },
    { title: "tanuki sunset", description: "", url: "tanuki-sunset/index.html" },
    { title: "world hardest-game2", description: "", url: "world-hardest-game2/index.html" },
    { title: "world hardest-game", description: "", url: "world-hardest-game/index.html" },
    { title: "worlde", description: "", url: "worlde/index.html" },
    { title: "xTrailRacing", description: "", url: "xTrailRacing/index.html" },
    { title: "getaway shootout", description: "", url: "getaway-shootout/index.html" },
    { title: "champion island", description: "", url: "champion-island/index.html" },
    { title: "cell machine", description: "", url: "cell-machine/index.html" },
    { title: "Subway Surfers ", description: "", url: "bus and subway/index.html" },
    { title: "burger and frights  ", description: "", url: "burger and frights/index.html" },


    
    
    
    
    



    

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
