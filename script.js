document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the job titles
    const roles = ["Frontend Developer", "Backend Developer", "Data Analyst"];
    let currentRole = 0;
    let typingIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const pauseBetweenRoles = 2000;

    function type() {
        const roleElement = document.getElementById('role');
        const fullText = roles[currentRole];

        if (isDeleting) {
            roleElement.textContent = fullText.substring(0, typingIndex--);
            if (typingIndex < 0) {
                isDeleting = false;
                currentRole = (currentRole + 1) % roles.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            roleElement.textContent = fullText.substring(0, typingIndex++);
            if (typingIndex > fullText.length) {
                isDeleting = true;
                setTimeout(type, pauseBetweenRoles);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    setTimeout(type, typingSpeed);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hamburger menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('open');
    });

    // Highlight the current page in the mobile menu
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('current');
        }
    });
});
