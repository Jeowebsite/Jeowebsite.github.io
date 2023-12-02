// Function to set the theme and update game card background color
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);

  // Update game card background color based on the theme
  const gameCard = document.querySelector('.game-card');
  if (theme === 'dark-mode') {
    gameCard.style.backgroundColor = '#222'; // Dark mode background color
  } else {
    gameCard.style.backgroundColor = 'rgb(255, 255, 255)'; // Light mode background color
  }
}

// Check for the saved dark mode preference
const currentTheme = localStorage.getItem("theme");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Apply the user's preferred theme and update game card background color
if (currentTheme === "dark-mode") {
  setTheme("dark-mode");
  darkModeToggle.checked = true;
} else {
  setTheme("light-mode");
  darkModeToggle.checked = false;
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    setTheme("dark-mode");
  } else {
    setTheme("light-mode");
  }
});
      