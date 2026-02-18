document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle'); // For X animation

        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');

                links.forEach((link) => {
                    link.style.animation = '';
                });
            }
        });
    });

    // Sticky Navbar transparency effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.padding = '10px 5%'; // Shrink slightly
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '15px 5%'; // Restore padding
        }
    });

    // WhatsApp Floating Button - Dynamic Interaction
    const waButton = document.querySelector('.floating-wa');
    // Ensure it doesn't cause overflow on load
    if (waButton) {
        // Optional: Show tooltip or animation on load
        setTimeout(() => {
            waButton.style.transform = 'scale(1.1)';
            setTimeout(() => {
                waButton.style.transform = 'scale(1)';
            }, 300);
        }, 2000);
    }
});

// Add Keyframes for Nav Link Fade via JS if not in CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes navLinkFade {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
}
`;
document.head.appendChild(styleSheet);
