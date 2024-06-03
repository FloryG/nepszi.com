window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Function to calculate scroll based on viewport height
function calculateScrollInViewportHeights() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const scrolledHeights = scrollPosition / viewportHeight;
    return scrolledHeights;
  }
  
  // Add an event listener for the scroll event
  window.addEventListener('scroll', () => {
    const scrolledHeights = calculateScrollInViewportHeights();
    console.log(`You have scrolled ${scrolledHeights.toFixed(2)} viewport heights`);
  });
  