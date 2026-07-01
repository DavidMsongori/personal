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

});

