var typed = new Typed(".auto-type", {
    strings: ["Coding", "Design", "Self-learning"],
    typeSpedd: 150,
    backSpeed: 150,
    loop: true
})

/* Scroll reveal */

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400 
});

ScrollReveal().reveal('.title', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.background h1', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.bi', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.btn', { delay: 600, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.col', { delay: 200, origin: 'top' });