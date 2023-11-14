document.getElementById("scrollButton").addEventListener("click", function() {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: "smooth" // This animates the scrolling
    });
  
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });