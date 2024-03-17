/*
    This file creates a custom HTMLElement that can be used wherever this script is referenced.
    This element is accessed via <rom-add></rom-add> and can be used to add a game to the list.
    Attributes:
        console: The console the game is for. This is used to determine the console to display, as well as other information sent to Play page.
        game: The name of the game. This is used to determine the name of the game to display, as well as other information sent to Play page.
*/

class RomList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

  }
  connectedCallback(){
        // Template/Code
        let console = this.getAttribute("console");
        let textToFilter = this.getAttribute("game");
    
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "../../../styles/consoles.css");
    
        this.shadowRoot.appendChild(linkElem);
    
        const gameTitle = document.createElement("h1");
        gameTitle.classList.add("rom-title");
    
        gameTitle.onclick = function() {
            window.location.href = sendGameInfo();
        }
    
        let filteredText = textToFilter.replace(/(\([^\)]*\)|\.[^.]+|_)+$/g, '').replace(/_/g, ' ');
        gameTitle.innerHTML = filteredText;
    
        this.shadowRoot.appendChild(gameTitle);
    
        function sendConsoleInfo() {
            let providedConsole = console;
            if (providedConsole == "gba") {
                return "gba";
            } else if (providedConsole == "gb") {
                return "gb";
            } else if (providedConsole == "nds") {
                return "nds";
            } else if (providedConsole == "nes") {
                return "nes";
            } else if (providedConsole == "snes") {
                return "snes";
            } else if (providedConsole == "n64") {
                return "n64";
            } else if (providedConsole == "gbc") {
                return "gbc";
            } else if (providedConsole == "segamd") {
                return "segaMD";
            } else {
                return "other";
            }
        }
    
        function sendGameInfo() {
            let providedGame = textToFilter;
            let consoleType = sendConsoleInfo();
            let newLink = '../../play/index.html?console=' + consoleType + '&game=' + providedGame;
            return newLink;
        }
  }
}

customElements.define("rom-add", RomList);
