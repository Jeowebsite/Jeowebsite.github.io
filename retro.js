document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('redirectButton');
    button.addEventListener('click', redirectToPage);
  
    function redirectToPage() {
      window.location.href = "https://jeowebsite.github.io/Retro-Games.html"; // Replace "anotherPage.html" with the URL of the page you want to redirect to
    }
  });