const btn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

if(btn){
btn.addEventListener("click",()=>{
nav.classList.toggle("show");
});
}

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
for(let i=0;i<reveals.length;i++){
let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;

if(elementTop < windowHeight-100){
reveals[i].classList.add("active");
}
}
});

const modal=document.getElementById("modal");
const modalImg=document.getElementById("modal-img");

if(modal){

document.querySelectorAll(".cert").forEach(img=>{

img.onclick=()=>{
modal.style.display="flex";
modalImg.src=img.src;
};

});

modal.onclick=()=>{
modal.style.display="none";
};

}