 // Function to handle color change
 function changeColor(color) {
  document.body.style.backgroundColor = color;
  localStorage.setItem('selectedColor', color);
}

// Retrieve selected color from local storage
window.onload = function() {
  const selectedColor = localStorage.getItem('selectedColor');
  if (selectedColor) {
    document.body.style.backgroundColor = selectedColor;
  }
};

// Add click event listeners to color boxes
const colorBoxes = document.querySelectorAll('.color-box');
colorBoxes.forEach(box => {
  box.addEventListener('click', function() {
    const color = this.style.backgroundColor;
    changeColor(color);
  });
});