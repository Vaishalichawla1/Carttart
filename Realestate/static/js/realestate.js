// // Navbar Scroll Effect
// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// // Hamburger Menu Toggle
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });



// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    document.body.style.overflow = navLinks.classList.contains('show') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

// Scroll event for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.sub-menu') && window.innerWidth > 768) {
        document.querySelectorAll('.sub-menu-item').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

// Window resize handler
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});




// // Card
document.addEventListener("DOMContentLoaded", function () {
  const cardGrid = document.querySelector(".card-grid");
  let scrollAmount = 0;
  let scrollSpeed = 0.7; // Adjust for faster/slower movement
  let clone = cardGrid.innerHTML; // Clone the card content for seamless looping
  cardGrid.innerHTML += clone;
  let isPaused = false;

  function autoScroll() {
    if (!isPaused) {
      if (scrollAmount >= cardGrid.scrollWidth / 2) {
        scrollAmount = 0;
        cardGrid.scrollTo({ left: 0, behavior: "instant" });
      } else {
        cardGrid.scrollTo({ left: scrollAmount, behavior: "smooth" });
        scrollAmount += scrollSpeed;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  // Pause scrolling when hovering over any card
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => (isPaused = true));
    card.addEventListener("mouseleave", () => (isPaused = false));
  });

  autoScroll();
});
