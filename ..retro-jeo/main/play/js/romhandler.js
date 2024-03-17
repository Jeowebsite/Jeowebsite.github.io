const params = new Proxy(new URLSearchParams(window.location.search), { // Get the URL parameters here
  get: (searchParams, prop) => searchParams.get(prop),
});

/*
    This file assembles the link to the ROM based on user settings + the game name.
*/

function assembleRomLink() {
  let providedGame = params.game;
  let console = params.console;
  let romLocation = localStorage.getItem("romLocation");
  let ndsLocation = localStorage.getItem("ndsLocation");
  let n64Location = localStorage.getItem("n64Location");
  let ext; // Determine the extension of the ROM based on the console
  if (console == "gba") { 
    ext = ".gba";
  } else if (console == "gb") {
    ext = ".7z";
  } else if (console == "nds") {
    ext = ".zip";
    let newLink = ndsLocation + console + "-alt/" + providedGame + ext; // Assemble the link
    return newLink;
  } else if (console == "nes") {
    ext = ".nes.zip";
  } else if (console == "snes") {
    ext = ".zip";
  } else if (console == "n64") {
    ext = ".7z";
    let newLink = n64Location + console + "-alt/" + providedGame + ext; // Assemble the link
    return newLink;
  } else if (console == "gbc") {
    ext = ".7z";
    let newLink = romLocation + "gbc-alt/" + providedGame + ext; // Assemble the link
    return newLink;
  } else if (console == "segaMD") {
    ext = ".7z";
  } else {
    ext = ".zip";
  }
  let newLink = romLocation + console + "-alt/" + providedGame + ext; // Assemble the link
  return newLink;
}

let gameName = assembleRomLink(); // Set EmuJS Variables
let gameCore = params.console; // Set EmuJS Variables
if (params.console == "gbc") {
  gameCore = "gba";
}
console.log(gameCore);


/*
    Gets the game name, filters it, then puts it into page title as well as navbar title.
*/
let gameFilter = ' ' + params.game.replace(/(\([^\)]*\)|\.[^.]+|_)+$/g, '').replace(/_/g, ' ');

let title = document.getElementById('pageTitle');
document.title += gameFilter;
title.innerHTML += ' -' + gameFilter;
