// =====================================
// Wedding Invitation
// Далер & Мадина
// =====================================

// =====================
// Welcome Screen
// =====================

const welcome = document.getElementById("welcome");
const openButton = document.getElementById("openInvitation");

if (openButton) {

openButton.addEventListener("click", () => {

welcome.classList.add("hideWelcome");

setTimeout(() => {

welcome.style.display = "none";

},900);

});

}

// =====================
// Countdown
// =====================

const weddingDate = new Date("2026-08-15T12:30:00").getTime();

function updateTimer(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/60000);

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").textContent =
distance>0 ? days : 0;

document.getElementById("hours").textContent =
distance>0 ? hours : 0;

document.getElementById("minutes").textContent =
distance>0 ? minutes : 0;

document.getElementById("seconds").textContent =
distance>0 ? seconds : 0;

}

updateTimer();

setInterval(updateTimer,1000);

// =====================
// Scroll Animation
// =====================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
// =====================
// Falling Petals
// =====================

function createPetal(){

const petal=document.createElement("div");

petal.classList.add("petal");

petal.innerHTML=Math.random()>0.5?"🌸":"🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.opacity=0.5+Math.random()*0.5;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,450);

// =====================
// Top Button
// =====================

const topButton=document.createElement("div");

topButton.id="topButton";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =====================
// Hero Button Animation
// =====================

document.querySelectorAll(".gold-button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// =====================
// RSVP Success
// =====================

const form=document.querySelector(".rsvp form");

if(form){

form.addEventListener("submit",()=>{

const btn=form.querySelector("button");

btn.innerHTML="Спасибо ❤️";

btn.disabled=true;

});

}

// =====================
// Fade Body
// =====================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// =====================
// Console
// =====================

console.log("💍 Wedding Invitation Loaded");
