// Dark Mode Switch JavaScript

// Function to set the theme
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }
  
  // Check for the saved dark mode preference
  const currentTheme = localStorage.getItem("theme");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  
  // Apply the user's preferred theme
  if (currentTheme === "dark") {
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
  