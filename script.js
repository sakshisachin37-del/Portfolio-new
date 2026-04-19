ScrollReveal().reveal('.hero-left', { origin: 'left', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.hero-right', { origin: 'right', distance: '50px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.navbar', { origin: 'top', distance: '20px', duration: 800, delay: 200 });

ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});


ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
});
// Certificates Scroll Reveal
ScrollReveal().reveal('#certificates .section-title', {
    origin: 'top',
    distance: '40px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('#certificates .project-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    interval: 200,
    delay: 300
});

// Certificate Card Hover Glow
document.querySelectorAll('#certificates .project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth Scroll Navbar Link
document.querySelectorAll('a[href="#certificates"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#certificates').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
ScrollReveal().reveal('.edu-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    interval: 200,
    delay: 300
});
ScrollReveal().reveal('.about-content h2', {
  origin:'left',
  distance:'50px',
  duration:1000
});

ScrollReveal().reveal('.about-content p, .about-details p', {
  origin:'bottom',
  distance:'30px',
  duration:1000,
  interval:120
});

ScrollReveal().reveal('.interests span', {
  origin:'bottom',
  distance:'20px',
  duration:800,
  interval:100
});
ScrollReveal().reveal('.hero-left h1', {
    origin:'left',
    distance:'60px',
    duration:1200
});

ScrollReveal().reveal('.buttons .btn', {
    origin:'bottom',
    distance:'30px',
    duration:1000,
    interval:150
});

ScrollReveal().reveal('.hero-right img', {
    origin:'right',
    distance:'60px',
    duration:1200
});

