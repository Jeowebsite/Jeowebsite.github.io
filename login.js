document.getElementById("loginBtn").addEventListener("click", function() {
  var menu = document.getElementById("loginSignupMenu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes
  // You can add code here to handle login form submission using AJAX or fetch
  // For example, send form data to a server-side script for authentication
  // Simulate successful login for demonstration
  alert("Logged in successfully!");
  // You can redirect the user to another page or perform other actions upon successful login
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes
  // You can add code here to handle sign-up form submission using AJAX or fetch
  // For example, send form data to a server-side script to create a new user account
  // Simulate successful sign-up for demonstration
  alert("Signed up successfully!");
  // You can redirect the user to another page or perform other actions upon successful sign-up
});
