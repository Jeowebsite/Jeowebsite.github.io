document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('redirectButton');
    button.addEventListener('click', redirectToPage);
  
    function redirectToPage() {
      window.location.href = "https://jeowebsite.github.io/Retro-Games.html";
    }
  });