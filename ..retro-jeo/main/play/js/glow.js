/*
  // Get the parent element that the canvas will be added to
  const game = document.getElementById('game');

  // Create a new MutationObserver instance
  const observer = new MutationObserver((mutations) => {
    // Loop through all the mutations that occurred
    mutations.forEach((mutation) => {
      // Check if a new canvas element was added to the parent element
      if (mutation.addedNodes.length && mutation.addedNodes[0].nodeName === 'CANVAS') {
        const canvas = mutation.addedNodes[0];

        // Wait for the canvas to fully load
        document.addEventListener('DOMContentLoaded', () => {
          // Get the primary color from the canvas
          const ctx = canvas.getContext('2d');
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;

          let primaryColor = { r: 0, g: 0, b: 0 };

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const avg = (r + g + b) / 3;

            if (avg > (primaryColor.r + primaryColor.g + primaryColor.b) / 3) {
              primaryColor = { r, g, b };
            }
          }

          // Apply a box-shadow glow effect with the primary color
          let glow = document.querySelector('.glow');
          if (!glow) {
            glow = document.createElement('div');
            glow.classList.add('glow');
            game.appendChild(glow);
          }
          glow.style.boxShadow = `0 0 10px rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.5)`;
        });
      }
    });
  });

  // Start observing the parent element for mutations
  observer.observe(game, { childList: true });

  */