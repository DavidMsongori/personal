/*=========================================================
DAVID MSONGORI WEBSITE
Main JavaScript
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    HEADER SCROLL
    =========================================*/

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 60) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /*=========================================
    MOBILE MENU
    =========================================*/

    const hamburger = document.querySelector(".hamburger");

    const navbar = document.querySelector(".navbar");

    if (hamburger && navbar) {

        hamburger.addEventListener("click", () => {

            hamburger.classList.toggle("active");

            navbar.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");

                navbar.classList.remove("active");

                document.body.classList.remove("menu-open");

            });

        });

    }


    /*=========================================
    HERO ANIMATION
    =========================================*/

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";

        hero.style.transform = "translateY(30px)";

        setTimeout(() => {

            hero.style.transition = "all 1s ease";

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";

        }, 300);

    }


    /*=========================================
    COUNTERS
    =========================================*/

    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let current = 0;

                const increment = Math.max(1, target / 100);

                function updateCounter() {

                    current += increment;

                    if (current < target) {

                        counter.textContent = Math.floor(current).toLocaleString();

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target.toLocaleString() + "+";

                    }

                }

                updateCounter();

                observer.unobserve(counter);

            });

        });

        counters.forEach(counter => observer.observe(counter));

    }


});
