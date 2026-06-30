document.addEventListener("DOMContentLoaded",()=>{

const header=document.querySelector(".header");

const hamburger=document.querySelector(".hamburger");

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

hamburger.addEventListener("click",()=>{

hamburger.classList.toggle("active");

navbar.classList.toggle("active");

document.body.classList.toggle("menu-open");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");

hamburger.classList.remove("active");

document.body.classList.remove("menu-open");

});

});

});
