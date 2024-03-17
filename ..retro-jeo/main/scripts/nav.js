const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
document.documentElement.setAttribute('data-theme', currentTheme);
const currentFont = localStorage.getItem('font-color') ? localStorage.getItem('font-color') : null;
document.documentElement.setAttribute('data-icon-theme', currentFont);
/* 
    This script is used for the navigation buttons, and their functions
    This script is located on every page that the navigation bar is on
*/

const home = document.getElementById("homeBtn");
const back = document.getElementById("backBtn");
const options = document.getElementById("options");

function findHome() {
  let currentPageUrl = window.location.pathname;
  let pathArray = currentPageUrl.split("/");
  let relativePath = "";
  for (let i = 1; i < pathArray.length - 2; i++) {
    relativePath += "../";
  }
  console.log(relativePath)
  return relativePath;
}

var homeLink = findHome();
var optionsLink = findHome() + "/main/options";

home.addEventListener("click", function () {
  window.location = homeLink;
});

back.addEventListener("click", function () {
  history.back();
});

options.addEventListener("click", function () {
  let currentPageUrl = window.location.pathname;
  let pathArray = currentPageUrl.split("/");
  if (pathArray.length === 3 && pathArray[1] === "GBA2.0") {
    window.location = "/GBA2.0/main/options" // gh pages
  } else {
    window.location = optionsLink;
  }
});

/* Theme handling */

function themeValue(toggleState) {
  if (toggleState == 1) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  if (toggleState == 2) {
    document.documentElement.setAttribute('data-theme', 'sunset');
    
    localStorage.setItem('theme', 'sunset');
  }
  if (toggleState == 3) {
    document.documentElement.setAttribute('data-theme', 'synthwave');
    
    localStorage.setItem('theme', 'synthwave');
  }
  if (toggleState == 4) {
    document.documentElement.setAttribute('data-theme', 'red');
  
    localStorage.setItem('theme', 'red');
  }
  if (toggleState == 5) {
    document.documentElement.setAttribute('data-theme', 'green');
  
    localStorage.setItem('theme', 'green');
  }
  if (toggleState == 6) {
    document.documentElement.setAttribute('data-theme', 'legacy-green');
  
    localStorage.setItem('theme', 'legacy-green');
  }
}

function iconColorValue(toggleState) {
  if (toggleState == 1) {
    document.documentElement.setAttribute('data-icon-theme', 'new');
    localStorage.setItem('font-color', 'new');
    console.log("work")
  }
  if (toggleState == 2) {
    document.documentElement.setAttribute('data-icon-theme', 'old');
    localStorage.setItem('font-color', 'old');
  }
}