


// for animation counter one
window.addEventListener('scroll', lame);
window.addEventListener('scroll', lameTwo);
window.addEventListener('scroll', lameThree);
window.addEventListener('scroll', lameFour);

function lame() {
    const counterOne = document.querySelector('.counter-1');

    const counterOneLocation = counterOne.getBoundingClientRect().top;

    const windowHeight = window.innerHeight/1.2;

    let count = 0;
    
    
if(counterOneLocation < windowHeight) {
    setInterval(go, 70);
    function go() {
        

        if(count != 13) {
            count++;
        counterOne.innerHTML = count;
        window.removeEventListener('scroll', lame);
        }
         else {
            clearInterval(go);

        }
    }
}

}

function lameTwo() {
    const counterTwo= document.querySelector('.counter-2');
    const counterTwoLocation = counterTwo.getBoundingClientRect().top;
    const windowHeightTwo = window.innerHeight/1.2;

    let countTwo = 0;

    if(counterTwoLocation < windowHeightTwo) {
        setInterval(goTwo, 180);
        function goTwo() {
            
    
            if(countTwo != 1) {
                countTwo++;
            counterTwo.innerHTML = countTwo;
            window.removeEventListener('scroll', lameTwo);
            }
             else {
                clearInterval(goTwo);
    
            }
        }
    }
}
function lameThree() {
   
    const windowHeightThree = window.innerHeight/1.2;
    const counterThree = document.querySelector('.counter-3');
    const counterThreeLocation = counterThree.getBoundingClientRect().top;



    let countThree = 0;

    if(counterThreeLocation < windowHeightThree) {
        setInterval(goThree, 180);
        function goThree() {
            
    
            if(countThree != 5) {
                countThree++;
            counterThree.innerHTML = countThree;
            window.removeEventListener('scroll', lameThree);
            }
             else {
                clearInterval(goThree);
    
            }
        }
    }
}
function lameFour() {
    const counterFour = document.querySelector('.counter-4');
   
    const windowHeightFour = window.innerHeight/1.2;
    const counterFourLocation = counterFour.getBoundingClientRect().top;
    



    let countFour = 0;

    if(counterFourLocation < windowHeightFour) {
        setInterval(goFour, 180);
        function goFour() {
            
    
            if(countFour != 3) {
                countFour++;
            counterFour.innerHTML = countFour;
            window.removeEventListener('scroll', lameFour);
            }
             else {
                clearInterval(goFour);
    
            }
        }
    }
}






  
   


  





//calling elements
const navigation = document.querySelector("nav");
const navLink = document.querySelector(".nav-links");
const barMenu = document.querySelector(".bar-menu");
const logoM= document.querySelector(".logo");
const bone= document.querySelector(".bar1");
const btwo= document.querySelector(".bar2");
const bthree= document.querySelector(".bar3");
const lmorebtn= document.querySelector(".lmore");
const contactbtn= document.querySelector(".cm1");
const workbtn= document.querySelector(".wo1");
// menu

function remMain() {
    window.setTimeout(() => {

        document.getElementById('div01').style.display = "none";
        
        document.getElementById('contact-main').style.display = "block";
        document.getElementById('av-all').style.display = "flex";
        document.getElementById('main-slider-div-all').style.maxHeight = "100rem";

      

        
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
    contactbtn.addEventListener('click',()=> {
        document.body.classList.remove("bodyAfter");
        navLink.classList.remove('afterlinks');
        
        navigation.classList.toggle("backgn");
        logoM.classList.toggle("logocolorchange");
        bone.classList.toggle("barcolorchange");
        btwo.classList.toggle("barcolorchangetwo");
        bthree.classList.toggle("barcolorchangeth");
       });
    workbtn.addEventListener('click',()=> {
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








    //for slider

function sliderMain() {


const productContainers = document.querySelectorAll('.product-container');
const nxtBtns = [...document.querySelectorAll('.nxt-btn')];
const preBtns = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
       
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

}
sliderMain();


// for time line for education

// calling classes


const rightOne = document.querySelector('.div-2005-info');
const rightThree = document.querySelector('.div-2021-info');
const rightTwo = document.querySelector('.div-2017');
const rightFour = document.querySelector('.div-2022');



window.addEventListener('scroll', leftOneF);
window.addEventListener('scroll', leftTwoF);
window.addEventListener('scroll', leftThreeF);
window.addEventListener('scroll', leftFourF);

window.addEventListener('scroll', rightOneF);
window.addEventListener('scroll', rightTwoF);
window.addEventListener('scroll', rightThreeF);
window.addEventListener('scroll', rightFourF);

// for left side  effect

function leftOneF(){
    const leftOne = document.querySelector('.div-2005');

    const screenHeighLefttOne = window.innerHeight / 1.25;
    const heightLeftOne = leftOne.getBoundingClientRect().top;


    if(heightLeftOne < screenHeighLefttOne) {
       leftOne.classList.add('after-2005-year')
    }
}
function leftTwoF(){
    const leftThree = document.querySelector('.div-2017-info');

    const screenHeighLeftTwo = window.innerHeight / 1.25;
    const heightLeftTwo = leftThree.getBoundingClientRect().top;


    if(heightLeftTwo < screenHeighLeftTwo) {
       leftThree.classList.add('after-2017-info')
    }
}
function leftThreeF(){
const leftTwo = document.querySelector('.div-2021');


    const screenHeighLeftThree = window.innerHeight / 1.32;
    const heightLeftThree = leftTwo.getBoundingClientRect().top;


    if(heightLeftThree< screenHeighLeftThree) {
       leftTwo.classList.add('after-2021-year')
    }
}
function leftFourF(){
const leftFour = document.querySelector('.div-2022-info');


    const screenHeighLefttFour = window.innerHeight / 1.37;
    const heightLeftFour = leftFour.getBoundingClientRect().top;


    if(heightLeftFour < screenHeighLefttFour) {
       leftFour.classList.add('after-2022-info')
    }
}
// for right side  effect

function rightOneF(){

    const screenHeighRightOne = window.innerHeight / 1.25;
    const heightRIghtOne = rightOne.getBoundingClientRect().top;


    if(heightRIghtOne < screenHeighRightOne) {
       rightOne.classList.add('after-2005-year')
    }
}
function rightTwoF(){

    const screenHeighRightTwo = window.innerHeight / 1.32;
    const heightRightTwo = rightThree.getBoundingClientRect().top;


    if(heightRightTwo < screenHeighRightTwo) {
       rightThree.classList.add('after-2017-info')
    }
}
function rightThreeF(){


    const screenHeighRightThree = window.innerHeight / 1.25;
    const heightRightThree = rightTwo.getBoundingClientRect().top;


    if(heightRightThree< screenHeighRightThree) {
      rightTwo.classList.add('after-2021-year')
    }
}
function rightFourF(){


    const screenHeighRightFour = window.innerHeight / 1.35;
    const heightRightFour = rightFour.getBoundingClientRect().top;


    if(heightRightFour < screenHeighRightFour) {
       rightFour.classList.add('after-2022-info')
    }
}

  

   
