// script.js

document.addEventListener("DOMContentLoaded", function() {

    // --- HAMBURGER MENU TOGGLE ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


    // --- COLLAPSIBLE SECTIONS ---
    const sectionToggles = document.querySelectorAll('.section-toggle');

    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isActive = toggle.classList.contains('active');

            // Close all other open sections
            sectionToggles.forEach(otherToggle => {
                if (otherToggle !== toggle && otherToggle.classList.contains('active')) {
                    otherToggle.classList.remove('active');
                    otherToggle.nextElementSibling.style.maxHeight = null;
                    otherToggle.nextElementSibling.style.padding = '0 2rem';
                }
            });

            // Open or close the clicked section
            if (isActive) {
                toggle.classList.remove('active');
                content.style.maxHeight = null;
                content.style.padding = '0 2rem';
            } else {
                toggle.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = '0 2rem 2rem 2rem';
            }
        });
    });

    // --- SCROLL-IN ANIMATION ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});