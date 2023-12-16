// Function to handle color change
function setColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('selectedColor', color);
  }
  
  // Retrieve selected color from local storage
  window.onload = function() {
    const selectedColor = localStorage.getItem('selectedColor');
    if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
    } else {
      // If no color is saved, set default background color to white
      document.body.style.backgroundColor = 'white';
    }
  
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
      setColorTheme('dark-mode');
    } else {
      setColorTheme('light-mode');
    }
  };
  
  // Function to set the color theme and update the background color
  function setColorTheme(theme) {
    const gameCard = document.querySelector('.game-card');
    if (theme === 'dark-mode') {
      setColor('#222'); // Dark mode background color
    } else {
      setColor('rgb(255, 255, 255)'); // Light mode background color
    }
    localStorage.setItem('theme', theme); // Store the selected theme in local storage
  }
  
  // Add click event listeners to color boxes to set color theme
  const colorBoxes = document.querySelectorAll('.color-box');
  colorBoxes.forEach(box => {
    box.addEventListener('click', function() {
      const color = window.getComputedStyle(this).getPropertyValue('background-color');
      setColor(color);
    });
  });
  