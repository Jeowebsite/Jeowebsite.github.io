// Function to handle color change
function setColor(color) {
  document.body.style.backgroundColor = color;
}

// Add click event listeners to color boxes to set color
const colorBoxes = document.querySelectorAll('.color-box');
colorBoxes.forEach(box => {
  box.addEventListener('click', function () {
      const color = window.getComputedStyle(this).getPropertyValue('background-color');
      setColor(color);
  });
});

// Add click event listener to the Save Color button
const saveColorBtn = document.getElementById('saveColorBtn');
saveColorBtn.addEventListener('click', function () {
  const currentColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
  localStorage.setItem('selectedColor', currentColor);
  alert('Color saved to local storage!');
});

// Add click event listener to the Remove Color button
const removeColorBtn = document.getElementById('removeColorBtn');
removeColorBtn.addEventListener('click', function () {
  localStorage.removeItem('selectedColor');
  alert('Color removed from local storage!');
});

// Retrieve selected color from local storage on page load
window.onload = function () {
  const selectedColor = localStorage.getItem('selectedColor');
  if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
  } else {
      document.body.style.backgroundColor = '#B28046';
  }
};
