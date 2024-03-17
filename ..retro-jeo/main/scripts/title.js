var fileName = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];

function handler() {
    let name = fileName;
    console.log(name);
    let title = document.getElementById('pageTitle');
    if (name == "gba") {
        title.innerHTML += ' - GBA';
    } else if (name == "gb") {
        title.innerHTML += ' - GB';
    } else if (name == "nds") {
        title.innerHTML += ' - NDS';
    } else if (name == "nes") {
        title.innerHTML += ' - NES';
    } else if (name == "snes") {
        title.innerHTML += ' - SNES';
    } else if (name == "n64") {
        title.innerHTML += ' - N64';
    } else if (name == "gbc") {
        title.innerHTML += ' - GBC';
    } else if (name == "segamd") {
        title.innerHTML += ' - Sega MD';
    } else {
        title.innerHTML += ' - Other';
    }
}

handler();