/*========================================
    DAVID MSONGORI WEBSITE
    NAVIGATION
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    /*-------------------------
        Sticky Header
    --------------------------*/

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });

    /*-------------------------
        Mobile Menu
    --------------------------*/

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navbar.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    /*-------------------------
        Close Menu on Click
    --------------------------*/

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navbar.classList.remove("active");

            hamburger.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });

    /*-------------------------
        Close if Click Outside
    --------------------------*/

    document.addEventListener("click",(e)=>{

        if(

            !navbar.contains(e.target)

            &&

            !hamburger.contains(e.target)

        ){

            navbar.classList.remove("active");

            hamburger.classList.remove("active");

            document.body.classList.remove("menu-open");

        }

    });

});
