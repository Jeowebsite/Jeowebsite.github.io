// File: cursorEffectSetup.js
// Description: Initializes the trailing cursor effect with specific options

import { trailingCursor } from './trailingCursor.js';

const options = {
  element: document.getElementById('yourElement'), // Pass the element where you want the cursor effect (optional)
  particles: 20, // Number of particles (optional)
  rate: 0.5, // Rate of particle movement (optional)
  baseImageSrc: 'path/to/your/image.png' // Base image source for particles (optional)
};

const cursorEffect = trailingCursor(options); // Initialize the trailing cursor effect

// To destroy the effect later (e.g., on page unload or as needed)
cursorEffect.destroy();
