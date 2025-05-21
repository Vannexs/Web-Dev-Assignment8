// js/main.js
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Dynamic Active Navigation Link ---
    const navLinks = document.querySelectorAll('header nav ul li a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html'; // Get current page filename

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        // For posts, the link href will be like ../blog.html, so we need to be careful
        // This simple logic works if nav links directly match page names or are in the root.
        // For nested pages like posts, the 'Blog' link should be active.
        
        let isPostPage = window.location.pathname.includes('/posts/');
        
        if (linkPath === currentPath) {
            link.parentElement.classList.add('active');
        } else if (isPostPage && linkPath === 'blog.html') {
            // If on a post page, highlight "Blog" in nav
            link.parentElement.classList.add('active');
        }

        // Clean up any manual 'current' classes if they exist (optional, but good practice)
        if (link.parentElement.classList.contains('current')) {
            link.parentElement.classList.remove('current');
        }
    });


    // --- 2. Mobile Hamburger Menu ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('header nav ul');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Toggle visibility of nav
            menuToggle.classList.toggle('is-active'); // For styling the hamburger itself
        });
    }

    // --- Optional: Close mobile menu when a link is clicked ---
    if (mainNav) {
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active') && menuToggle && menuToggle.classList.contains('is-active')) {
                    // Only close if menu is active (usually on mobile)
                    if (window.innerWidth < 769) { // Match your CSS breakpoint
                        mainNav.classList.remove('active');
                        menuToggle.classList.remove('is-active');
                    }
                }
            });
        });
    }

});