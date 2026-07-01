/*==========================================================
 DAVID MSONGORI WEBSITE
 Version 2.0
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
      ELEMENTS
    ==========================================*/

    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");



    /*==========================================
      HEADER SCROLL
    ==========================================*/

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 60) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }



    /*==========================================
      MOBILE MENU
    ==========================================*/

    function openMenu() {

        hamburger.classList.add("active");
        navbar.classList.add("active");
        document.body.classList.add("menu-open");

    }

    function closeMenu() {

        hamburger.classList.remove("active");
        navbar.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

    if (hamburger && navbar) {

        hamburger.addEventListener("click", () => {

            if (navbar.classList.contains("active")) {

                closeMenu();

            } else {

                openMenu();

            }

        });

    }



    /*==========================================
      CLOSE MENU WHEN LINK IS CLICKED
    ==========================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });



    /*==========================================
      CLICK OUTSIDE TO CLOSE
    ==========================================*/

    document.addEventListener("click", (e) => {

        if (

            navbar &&
            hamburger &&
            navbar.classList.contains("active") &&

            !navbar.contains(e.target) &&
            !hamburger.contains(e.target)

        ) {

            closeMenu();

        }

    });



    /*==========================================
      ESC KEY CLOSES MENU
    ==========================================*/

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });



    /*==========================================
      ACTIVE PAGE
    ==========================================*/

    const currentPage = location.pathname.split("/").pop();

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

     /*==========================================
      HERO ANIMATION
    ==========================================*/

    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";

        setTimeout(() => {

            heroContent.style.transition = "all .9s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 250);

    }

    if (heroImage) {

        heroImage.style.opacity = "0";
        heroImage.style.transform = "translateX(40px)";

        setTimeout(() => {

            heroImage.style.transition = "all 1s ease";

            heroImage.style.opacity = "1";
            heroImage.style.transform = "translateX(0)";

        }, 450);

    }



    /*==========================================
      SCROLL REVEAL
    ==========================================*/

    const revealElements = document.querySelectorAll(

        ".section-header," +
        ".about-content," +
        ".about-video," +
        ".stat-box," +
        ".featured-title," +
        ".project-card," +
        ".media-card," +
        ".leader-card," +
        ".profile-card," +
        ".vision-card," +
        ".impact-card," +
        ".education-item," +
        ".recognition-card," +
        ".gallery-track img," +
        ".contact-card," +
        ".contact-form," +
        ".faq-item," +
        ".news-card," +
        ".footer-column"

    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

    });

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {

            threshold:0.15

        }

    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /*==========================================
      STAGGERED ANIMATION
    ==========================================*/

    const cards = document.querySelectorAll(

        ".project-card," +
        ".impact-card," +
        ".profile-card," +
        ".vision-card," +
        ".recognition-card"

    );

    cards.forEach((card,index)=>{

        card.style.transitionDelay=(index*0.08)+"s";

    });

     /*==========================================
      ANIMATED COUNTERS
    ==========================================*/

    const counters = document.querySelectorAll(".counter");

    if (counters.length) {

        const counterObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                const duration = 2200;

                let start = 0;

                let startTime = null;

                function animateCounter(timestamp) {

                    if (!startTime) startTime = timestamp;

                    const progress = Math.min((timestamp - startTime) / duration, 1);

                    const value = Math.floor(progress * target);

                    counter.textContent = value.toLocaleString();

                    if (progress < 1) {

                        requestAnimationFrame(animateCounter);

                    } else {

                        counter.textContent = target.toLocaleString() + "+";

                    }

                }

                requestAnimationFrame(animateCounter);

                counterObserver.unobserve(counter);

            });

        }, {

            threshold:0.5

        });

        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }



    /*==========================================
      PROGRESS BARS
    ==========================================*/

    const progressBars = document.querySelectorAll(".progress-bar");

    if(progressBars.length){

        const progressObserver = new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    const bar = entry.target;

                    const value = bar.dataset.progress;

                    bar.style.width = value + "%";

                    progressObserver.unobserve(bar);

                }

            });

        },{

            threshold:0.4

        });

        progressBars.forEach(bar=>{

            bar.style.width="0";

            progressObserver.observe(bar);

        });

    }



    /*==========================================
      PERCENTAGE VALUES
    ==========================================*/

    const percentages = document.querySelectorAll(".percentage");

    percentages.forEach(item=>{

        const target = Number(item.dataset.target);

        let current = 0;

        const speed = target / 60;

        const observer = new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    function update(){

                        current += speed;

                        if(current < target){

                            item.textContent = Math.floor(current) + "%";

                            requestAnimationFrame(update);

                        }else{

                            item.textContent = target + "%";

                        }

                    }

                    update();

                    observer.unobserve(item);

                }

            });

        });

        observer.observe(item);

    });



    /*==========================================
      SECTION FADE DELAY
    ==========================================*/

    document.querySelectorAll("section").forEach((section,index)=>{

        section.style.transitionDelay=(index*0.05)+"s";

    });

 
});

