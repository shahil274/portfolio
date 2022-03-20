



//calling elements
const navigation = document.querySelector("nav");
const navLink = document.querySelector(".nav-links");
const barMenu = document.querySelector(".bar-menu");
const logoM= document.querySelector(".logo");
const bone= document.querySelector(".bar1");
const btwo= document.querySelector(".bar2");
const bthree= document.querySelector(".bar3");
const lmorebtn= document.querySelector(".lmore");
const conbtn= document.querySelector(".cm1");
// menu

function remMain() {
    window.setTimeout(() => {

        document.getElementById('div01').style.display = "none";
        document.getElementById('av-all').style.display = "flex";

      

        
},6200);



}
remMain();
function play() {


    window.setTimeout(() => {
            document.getElementById('hello').play();
    },2200);
    
}

play();
function playN() {

    window.setTimeout(() => {
            document.getElementById('namaste').play();
    },4500);
    
}

playN();
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
    conbtn.addEventListener('click',()=> {
        document.body.classList.remove("bodyAfter");
        navLink.classList.remove('afterlinks');
        
        navigation.classList.toggle("backgn");
        logoM.classList.toggle("logocolorchange");
        bone.classList.toggle("barcolorchange");
        btwo.classList.toggle("barcolorchangetwo");
        bthree.classList.toggle("barcolorchangeth");
       });
}
forBar();

//animation scroll

window.addEventListener('scroll', scrollAniOne);
window.addEventListener('scroll', scrollAniTwo);
window.addEventListener('scroll', scrollAniFour);
window.addEventListener('scroll', scrollAniThree);


function scrollAniOne(){

    const workOne = document.querySelector('.work-1');
    const workOneP = workOne.getBoundingClientRect().top;
    
    
  
    const windowHeightOne = window.innerHeight/1.2;

    if(workOneP < windowHeightOne){
        workOne.classList.add('oneappear');
    }
   
}
scrollAniOne();


function scrollAniTwo(){

    const workTwo = document.querySelector('.work-2');
    const workTwoP = workTwo.getBoundingClientRect().top;
    const windowHeightTwo = window.innerHeight/1.2;

    if(workTwoP < windowHeightTwo){
        workTwo.classList.add('twoappear');
    }
  
}
scrollAniTwo();


function scrollAniThree(){
    const workThree = document.querySelector('.work-3');
    const workThreeP = workThree.getBoundingClientRect().top;

    
    const windowHeightThree = window.innerHeight/1.2;

    if(workThreeP < windowHeightThree){
        workThree.classList.add('threeappear');
    }
  
}


function scrollAniFour(){
    const workFour = document.querySelector('.work-4');
    const workFourP = workFour.getBoundingClientRect().top;
   
    const windowHeightFour = window.innerHeight/1.2;

    if(workFourP < windowHeightFour){
        workFour.classList.add('fourappear');
    }
        
    }





    




  

   
