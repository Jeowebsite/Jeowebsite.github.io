let searchBar = document.getElementById("console-search");
let goSearch = document.getElementById("goSearch");

goSearch.addEventListener("click", function() {
    let home = findHome();
    var fileName = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];
    if (home == "../../") {
        home = "../../../";
    }
    let locations = home + "main/search/index.html?" + "s=" + searchBar.value;
    window.location = locations;
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') { // check if spacebar key is pressed
    let home = findHome();
    console.log("real")
    var fileName = location.href.split("/").slice(-1).toString().replace(".html", "").split("?")[0];
    if (home == "../../") {
      home = "../../../";
  }
      if (goSearch.input !== "") {
        console.log("more real")
        let locations = home + "main/search/index.html?" + "s=" + searchBar.value;
        window.location = locations;
      }
    }
  });
  