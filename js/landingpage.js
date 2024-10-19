// JavaScript to handle navbar visibility on scroll
const navbar = document.querySelector('.navbar');
let lastScrollPosition = 0;  // Tracks the previous scroll position

window.addEventListener('scroll', () => {
  let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Scroll Down - Hide Navbar
  if (currentScrollPosition > lastScrollPosition) {
    navbar.classList.add('hidden');
  }
  // Scroll Up - Show Navbar
  else {
    navbar.classList.remove('hidden');
  }

  // Update last scroll position
  lastScrollPosition = currentScrollPosition;
});

// JavaScript for Hamburger menu toggle (mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-container ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
