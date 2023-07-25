const navbar = document.querySelector('.header');

window.addEventListener('scroll', function() {
  // Calculate the opacity based on the user's scroll position
  const scrollPosition = window.scrollY;
  const maxScroll = 100; // Adjust this value based on when you want the opacity to reach its maximum (0 to 100 pixels in this example)

  // Calculate the opacity based on the scroll position
  const opacity = Math.min(1, scrollPosition / maxScroll);

  // Set the opacity of the navbar
  navbar.style.opacity = opacity;
});
