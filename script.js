// Simple smooth scroll and animations
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add some particle effect or simple animation on load
console.log('%cAether Portfolio loaded with ❤️', 'color: #a78bfa; font-size: 14px;');