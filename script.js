/*====================================================
    HON. DAVID MSONGORI
    OFFICIAL WEBSITE
    script.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
        SELECTORS
    ==========================*/

    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const icon = menuToggle ? menuToggle.querySelector("i") : null;

    /*==========================
        STICKY HEADER
    ==========================*/

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "#07192f";
            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

        } else {

            header.style.background = "rgba(10,35,66,.95)";
            header.style.boxShadow = "none";

        }

    });

    /*==========================
        MOBILE MENU
    ==========================*/

    if(menuToggle && nav){

        menuToggle.addEventListener("click", ()=>{

            nav.classList.toggle("active");

            if(icon){

                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");

            }

        });

        document.querySelectorAll("nav a").forEach(link=>{

            link.addEventListener("click",()=>{

                nav.classList.remove("active");

                if(icon){

                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");

                }

            });

        });

    }

    /*==========================
        SMOOTH SCROLL
    ==========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*==========================
        ACTIVE MENU
    ==========================*/

    const sections=document.querySelectorAll("section");
    const navLinks=document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

    /*==========================
        COUNTERS
    ==========================*/

    const counters=document.querySelectorAll(".counter");

    if(counters.length){

        const observer=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    const counter=entry.target;

                    const target=Number(counter.dataset.target);

                    let count=0;

                    const speed=target/120;

                    function update(){

                        count+=speed;

                        if(count<target){

                            counter.innerText=Math.floor(count);

                            requestAnimationFrame(update);

                        }else{

                            counter.innerText=target.toLocaleString();

                        }

                    }

                    update();

                    observer.unobserve(counter);

                }

            });

        });

        counters.forEach(counter=>observer.observe(counter));

    }

    /*==========================
        SCROLL REVEAL
    ==========================*/

    const revealItems=document.querySelectorAll(

        ".leader-card,.project-card,.gallery-item,.news-card,.testimonial-card,.timeline-item"

    );

    if(revealItems.length){

        const revealObserver=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";
                    entry.target.style.transform="translateY(0)";

                }

            });

        },{

            threshold:.15

        });

        revealItems.forEach(item=>{

            item.style.opacity="0";
            item.style.transform="translateY(40px)";
            item.style.transition=".8s";

            revealObserver.observe(item);

        });

    }

    /*==========================
        BACK TO TOP
    ==========================*/

    const backTop=document.createElement("button");

    backTop.innerHTML='<i class="fas fa-arrow-up"></i>';

    backTop.className="back-top";

    document.body.appendChild(backTop);

    window.addEventListener("scroll",()=>{

        backTop.style.display=window.scrollY>500 ? "flex":"none";

    });

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*==========================
        GALLERY LIGHTBOX
    ==========================*/

    document.querySelectorAll(".gallery-item img").forEach(img=>{

        img.addEventListener("click",()=>{

            const overlay=document.createElement("div");

            overlay.className="lightbox";

            overlay.innerHTML=`<img src="${img.src}">`;

            document.body.appendChild(overlay);

            overlay.addEventListener("click",()=>overlay.remove());

        });

    });

    /*==========================
        CONTACT FORM
    ==========================*/

    const form=document.querySelector(".contact-form form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            alert("Thank you! Your message has been sent.");

            form.reset();

        });

    }

    /*==========================
        NEWSLETTER
    ==========================*/

    const newsletter=document.querySelector(".newsletter-form");

    if(newsletter){

        newsletter.addEventListener("submit",(e)=>{

            e.preventDefault();

            alert("Thank you for subscribing.");

            newsletter.reset();

        });

    }

});

/*==========================
    PRELOADER
==========================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .5s";
