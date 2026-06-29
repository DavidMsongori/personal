/*====================================================
    HON. DAVID MSONGORI
    PERSONAL WEBSITE
    script.js
====================================================*/


/*==============================
    STICKY HEADER
===============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#07192f";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
    } else {
        header.style.background = "rgba(10,35,66,.95)";
        header.style.boxShadow = "none";
    }

});


/*==============================
    SMOOTH SCROLLING
===============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/*==============================
    ACTIVE NAVIGATION
===============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*==============================
    COUNTER ANIMATION
===============================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target.toLocaleString();

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==============================
    SCROLL REVEAL
===============================*/

const revealElements = document.querySelectorAll(

    ".leader-card, .project-card, .gallery-item, .news-card, .testimonial-card, .timeline-item"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s ease";

    revealObserver.observe(item);

});


/*==============================
    BACK TO TOP BUTTON
===============================*/

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backTop";

document.body.appendChild(backTop);

backTop.style.position = "fixed";
backTop.style.bottom = "30px";
backTop.style.right = "30px";
backTop.style.width = "50px";
backTop.style.height = "50px";
backTop.style.border = "none";
backTop.style.borderRadius = "50%";
backTop.style.background = "#D4AF37";
backTop.style.color = "#000";
backTop.style.fontSize = "22px";
backTop.style.cursor = "pointer";
backTop.style.display = "none";
backTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.style.display = "block";

    } else {

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==============================
    GALLERY LIGHTBOX
===============================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.cursor = "pointer";
        overlay.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "12px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});


/*==============================
    CONTACT FORM
===============================*/

const form = document.querySelector(".contact-form form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


/*==============================
    NEWSLETTER
===============================*/

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}


/*==============================
    PRELOADER
===============================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity .5s ease";
