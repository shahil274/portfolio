
//calling elements
const navigation = document.querySelector("nav");
const navLink = document.querySelector(".nav-links");
const barMenu = document.querySelector(".bar-menu");
const logoM= document.querySelector(".logo");
const bone= document.querySelector(".bar1");
const btwo= document.querySelector(".bar2");
const bthree= document.querySelector(".bar3");
// menu

function forBar() {
    barMenu.addEventListener('click', ()=>{
     navLink.classList.toggle('afterlinks');
     navigation.classList.toggle("backgn");
     logoM.classList.toggle("logocolorchange");
     bone.classList.toggle("barcolorchange");
     btwo.classList.toggle("barcolorchangetwo");
     bthree.classList.toggle("barcolorchangeth");
     
     document.body.classList.toggle("bodyAfter");
    });
}
forBar();
