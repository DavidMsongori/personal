document.addEventListener("DOMContentLoaded",()=>{

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count).toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString()+"+";

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

});
