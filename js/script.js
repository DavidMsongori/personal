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

 /*==========================================
  GALLERY LIGHTBOX
==========================================*/

const galleryImages = document.querySelectorAll(".gallery-track img, .gallery-grid img");

if (galleryImages.length) {

    // Create Lightbox

    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";

    lightbox.innerHTML = `

        <span class="lightbox-close">&times;</span>

        <span class="lightbox-prev">&#10094;</span>

        <img class="lightbox-image" src="" alt="Gallery Image">

        <span class="lightbox-next">&#10095;</span>

    `;

    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector(".lightbox-image");

    const closeBtn = lightbox.querySelector(".lightbox-close");

    const prevBtn = lightbox.querySelector(".lightbox-prev");

    const nextBtn = lightbox.querySelector(".lightbox-next");

    let currentIndex = 0;

    function showImage(index){

        currentIndex = index;

        lightboxImg.src = galleryImages[currentIndex].src;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    }

    galleryImages.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            showImage(index);

        });

    });

    closeBtn.addEventListener("click",()=>{

        lightbox.classList.remove("show");

        document.body.style.overflow="";

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("show");

            document.body.style.overflow="";

        }

    });

    nextBtn.addEventListener("click",()=>{

        currentIndex++;

        if(currentIndex>=galleryImages.length){

            currentIndex=0;

        }

        showImage(currentIndex);

    });

    prevBtn.addEventListener("click",()=>{

        currentIndex--;

        if(currentIndex<0){

            currentIndex=galleryImages.length-1;

        }

        showImage(currentIndex);

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("show")) return;

        if(e.key==="Escape"){

            lightbox.classList.remove("show");

            document.body.style.overflow="";

        }

        if(e.key==="ArrowRight"){

            nextBtn.click();

        }

        if(e.key==="ArrowLeft"){

            prevBtn.click();

        }

    });

}



/*==========================================
  LAZY LOADING
==========================================*/

const lazyImages=document.querySelectorAll("img");

const lazyObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const img=entry.target;

            img.loading="lazy";

            lazyObserver.unobserve(img);

        }

    });

});

lazyImages.forEach(img=>{

    lazyObserver.observe(img);

});

 /*==========================================
  CONTACT FORM VALIDATION
==========================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea, select");

        let valid = true;

        inputs.forEach(input => {

            input.style.borderColor = "#ddd";

            if (input.hasAttribute("required") && input.value.trim() === "") {

                input.style.borderColor = "#e63946";

                valid = false;

            }

        });

        const email = contactForm.querySelector('input[type="email"]');

        if (email && email.value.trim() !== "") {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email.value.trim())) {

                email.style.borderColor = "#e63946";

                valid = false;

            }

        }

        const phone = contactForm.querySelector('input[type="tel"]');

        if (phone && phone.value.trim() !== "") {

            const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

            if (!phoneRegex.test(phone.value.trim())) {

                phone.style.borderColor = "#e63946";

                valid = false;

            }

        }

        if (!valid) {

            showToast("Please complete all required fields correctly.", "error");

            return;

        }

        showToast("Your message has been prepared successfully!", "success");

        contactForm.reset();

    });

}



/*==========================================
  FAQ ACCORDION
==========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector("h3");

    if (!question) return;

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});



/*==========================================
  TOAST NOTIFICATION
==========================================*/

function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3500);

}



/*==========================================
  SCROLL TO TOP BUTTON
==========================================*/

const topButton = document.createElement("button");

topButton.className = "scroll-top";

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/*==========================================
  SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

 /*==========================================
DARK MODE
==========================================*/

const themeButton = document.createElement("button");

themeButton.className = "theme-toggle";

themeButton.innerHTML = '<i class="fas fa-moon"></i>';

document.body.appendChild(themeButton);

const currentTheme = localStorage.getItem("theme");

if(currentTheme==="dark"){

    document.body.classList.add("dark");

    themeButton.innerHTML='<i class="fas fa-sun"></i>';

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML='<i class="fas fa-moon"></i>';

    }

});



/*==========================================
READING PROGRESS BAR
==========================================*/

const progress=document.createElement("div");

progress.className="reading-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progressHeight=(window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});



/*==========================================
PAGE LOADER
==========================================*/

window.addEventListener("load",()=>{

    const loader=document.querySelector(".page-loader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },500);

    }

});

});

