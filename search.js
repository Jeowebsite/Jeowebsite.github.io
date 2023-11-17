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
    { title: "Getaway Shootout", description: "A fun and challenging game. slope", url: "getaway-shootout/index.html" },
    { title: "Learn To Fly", description: "A fun and challenging game. slope", url: "learntofly/index.html" },
    { title: "Learn to Fly 2", description: "A fun and challenging game. slope", url: "learntofly2/index.html" },
    { title: "Mandalin Stunt Car 2", description: "A fun and challenging game. slope", url: "madalin-stunt-cars-2/index.html" },
    { title: "Mandalin Stunt Car 3", description: "A fun and challenging game. slope", url: "madalin-stunt-cars-3/index.html" },
    { title: "Minecraft", description: "A fun and challenging game. slope", url: "minecraft-18/index.html" },
    { title: "Pandemic 2", description: "A fun and challenging game. slope", url: "pandemic2/index.html" },
    { title: "100 ng", description: "A fun and challenging game. slope", url: "100ng/index.html" },
    { title: "a dance of fire and ice", description: "A fun and challenging game. slope", url: "a-dance-of-fire-and-ice/index.html" },
    { title: "a dark room", description: "A fun and challenging game. slope", url: "adarkroom/index.html" },
    { title: "achievement unlocked", description: "A fun and challenging game. slope", url: "achievementunlocked/index.html" },
    { title: "adrenaline challenge", description: "A fun and challenging game. slope", url: "adrenalinechallenge/index.html" },
    { title: "adventure drivers", description: "A fun and challenging game. slope", url: "adventure-drivers/index.html" },
    { title: "ages of conflict", description: "A fun and challenging game. slope", url: "ages-of-conflict/index.html" },
    { title: "alien hominid", description: "A fun and challenging game. slope", url: "alienhominid/index.html" },
    { title: "among us", description: "A fun and challenging game. slope", url: "among-us/index.html" },
    { title: "amazing rope police", description: "A fun and challenging game. slope", url: "amazing-rope-police/index.html" },
    { title: "amidst the clouds", description: "A fun and challenging game. slope", url: "amidst-the-clouds/index.html" },
    { title: "angel under", description: "A fun and challenging game. slope", url: "angelunder/index.html" },
    { title: "angry sharks", description: "A fun and challenging game. slope", url: "angry-sharks/index.html" },
    { title: "aquapark slides", description: "A fun and challenging game. slope", url: "aquapark-slides/index.html" },
    { title: "astray", description: "A fun and challenging game. slope", url: "astray/index.html" },
    { title: "avalanche", description: "A fun and challenging game. slope", url: "avalanche/index.html" },
    { title: "awesome tanks 2", description: "A fun and challenging game. slope", url: "awesometanks2/index.html" },
    { title: "backrooms", description: "A fun and challenging game. slope", url: "backrooms/index.html" },
    { title: "backrooms 2d", description: "A fun and challenging game. slope", url: "backrooms-2d/index.html" },
    { title: "bacon may die", description: "A fun and challenging game. slope", url: "bacon-may-die/index.html" },
    { title: "bad ice cream", description: "A fun and challenging game. slope", url: "bad-ice-cream/index.html" },
    { title: "bad ice cream 2", description: "A fun and challenging game. slope", url: "bad-ice-cream-2/index.html" },
    { title: "bad ice cream-3", description: "A fun and challenging game. slope", url: "bad-ice-cream-3/index.html" },
    { title: "baldis basics", description: "A fun and challenging game. slope", url: "baldis-basics/index.html" },
    { title: "ball dodge", description: "A fun and challenging game. slope", url: "balldodge/index.html" },
    { title: "ballistic chickens", description: "A fun and challenging game. slope", url: "ballistic-chickens/index.html" },
    { title: "basket random", description: "A fun and challenging game. slope", url: "basket-random/index.html" },
    { title: "basketbros io", description: "A fun and challenging game. slope", url: "basketbros-io/index.html" },
    { title: "basketball stars", description: "A fun and challenging game. slope", url: "basketball-stars/index.html" },
    { title: "battle forgondor", description: "A fun and challenging game. slope", url: "battleforgondor/index.html" },
    { title: "big red button", description: "A fun and challenging game. slope", url: "bigredbutton/index.html" },
    { title: "bitlife", description: "A fun and challenging game. slope", url: "bitlife/index.html" },
    { title: "blachole square", description: "A fun and challenging game. slope", url: "blacholesquare/index.html" },
    { title: "black knight", description: "A fun and challenging game. slope", url: "blackknight/index.html" },
    { title: "block post", description: "A fun and challenging game. slope", url: "blockpost/index.html" },
    { title: "bonk io", description: "A fun and challenging game. slope", url: "bonkio/index.html" },
    { title: "box head 2 to play", description: "A fun and challenging game. slope", url: "boxhead2play/index.html" },
    { title: "boxing random", description: "A fun and challenging game. slope", url: "boxing-random/index.html" },
    { title: "breaking the bank", description: "A fun and challenging game. slope", url: "breakingthebank/index.html" },
    { title: "cannon basketball 4", description: "A fun and challenging game. slope", url: "cannon-basketball-4/index.html" },
    { title: "canyon defense", description: "A fun and challenging game. slope", url: "canyondefense/index.html" },
    { title: "cars simulator", description: "A fun and challenging game. slope", url: "cars-simulator/index.html" },
    { title: "cell machine", description: "A fun and challenging game. slope", url: "cell-machine/index.html" },
    { title: "checkers", description: "A fun and challenging game. slope", url: "checkers/index.html" },
    { title: "circlo", description: "A fun and challenging game. slope", url: "circlo/index.html" },
    { title: "connect 3", description: "A fun and challenging game. slope", url: "connect3/index.html" },
    { title: "core ball", description: "A fun and challenging game. slope", url: "core-ball/index.html" },
    { title: "craft mine", description: "A fun and challenging game. slope", url: "craftmine/index.html" },
    { title: "creative kill chamber", description: "A fun and challenging game. slope", url: "creativekillchamber/index.html" },
    { title: "crossyroad", description: "A fun and challenging game. slope", url: "crossyroad/index.html" },
    { title: "csgo clicker", description: "A fun and challenging game. slope", url: "csgo-clicker/index.html" },
    { title: "Cut The Rope", description: "A fun and challenging game. slope", url: "ctr/index.html" },
    { title: "Cut The Rope Holiday", description: "A fun and challenging game. slope", url: "ctr-holiday/index.html" },
    { title: "cube field", description: "A fun and challenging game. slope", url: "cubefield/index.html" },
    { title: "dante", description: "A fun and challenging game. slope", url: "dante/index.html" },
    { title: "deal or no deal", description: "A fun and challenging game. slope", url: "deal-or-no-deal/index.html" },
    { title: "deepest sword", description: "A fun and challenging game. slope", url: "deepest-sword/index.html" },
    { title: "defend the tank", description: "A fun and challenging game. slope", url: "defend-the-tank/index.html" },
    { title: "Doge Miner", description: "A fun and challenging game. slope", url: "DogeMiner/index.html" },
    { title: "Doge miner 2", description: "A fun and challenging game. slope", url: "Dogeminer2/index.html" },
    { title: "doodle jump", description: "A fun and challenging game. slope", url: "doodle-jump/index.html" },
    { title: "dragon vs bricks", description: "A fun and challenging game. slope", url: "dragon-vs-bricks/index.html" },
    { title: "draw the hill", description: "A fun and challenging game. slope", url: "draw-the-hill/index.html" },
    { title: "dumb ways to die", description: "A fun and challenging game. slope", url: "dumbwaystodie/index.html" },
    { title: "edge surf", description: "A fun and challenging game. slope", url: "edge-surf/index.html" },
    { title: "earn to die", description: "A fun and challenging game. slope", url: "earntodie/index.html" },
    { title: "eel slap", description: "A fun and challenging game. slope", url: "eel-slap/index.html" },
    { title: "escaping the prison", description: "A fun and challenging game. slope", url: "escapingtheprison/index.html" },
    { title: "elastic man", description: "A fun and challenging game. slope", url: "elasticman/index.html" },
    { title: "evolution", description: "A fun and challenging game. slope", url: "evolution/index.html" },
    { title: "evil glitch", description: "A fun and challenging game. slope", url: "evil-glitch/index.html" },
    { title: "factory balls", description: "A fun and challenging game. slope", url: "factoryballs/index.html" },
    { title: "exo", description: "A fun and challenging game. slope", url: "exo/index.html" },
    { title: "fancy pants adventures", description: "A fun and challenging game. slope", url: "fancypantsadventures/index.html" },
    { title: "fake virus", description: "A fun and challenging game. slope", url: "fake-virus/index.html" },
    { title: "There is no game", description: "A fun and challenging game. slope", url: "There-is-no-game/index.html" },
    { title: "google snake", description: "A fun and challenging game. slope", url: "google-snake/index.html" },






    
    
    
    
    



    

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
