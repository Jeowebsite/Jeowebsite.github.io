// Includes copylink and embed code functionality
let copyButton = document.getElementById("copyLink");
let embedButton = document.getElementById("embedLink");
// Copy link
function copyLink() {
    var copyLink = window.location.href;
    navigator.clipboard.writeText(copyLink);
    alert("Copied the link: " + copyLink);
}

// Embed code
function embedCode() {
    var embedCode = '<iframe src="' + window.location.href + '" width="100%" height="100%" frameborder="0" allowfullscreen></iframe> <p> Made by: <a href="https://mathstudy.dev/">MathStudy</a> </p>"';
    navigator.clipboard.writeText(embedCode);
    alert("Copied the embed code: " + embedCode);
}

copyButton.addEventListener("click", copyLink);
embedButton.addEventListener("click", embedCode);
