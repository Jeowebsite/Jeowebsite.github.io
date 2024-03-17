const images = document.querySelectorAll('.selection-image');
const titles = document.querySelectorAll('.selection-title');
const lists = document.querySelectorAll('.selection-list li');

images.forEach(element => {
  // Add a IntersectionObserver to track when the element comes into view
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      element.classList.add('fade-in-right-image');
    }
  });

  observer.observe(element);
});

titles.forEach(element => {
    // Add a IntersectionObserver to track when the element comes into view
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
        element.classList.add('fade-in-right-title');
        }
    });
    
    observer.observe(element);
});

lists.forEach(element => {
    // Add a IntersectionObserver to track when the element comes into view
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
        element.classList.add('fade-in-right-list');
        }
    });
    
    observer.observe(element);
});