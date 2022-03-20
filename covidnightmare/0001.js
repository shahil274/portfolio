


function colorMode() {
var button = document.querySelector('.dmode');
var navi = document.querySelector('nav');
var mainDiv = document.querySelector('.main-div');
var pAll = document.querySelector('.work');
var rec = document.querySelector('.rec');
var recText = document.querySelector('.rec-01-h');
var recTextt = document.querySelector('.rec-02-h');
var recTextth = document.querySelector('.rec-03-h');
var title = document.querySelector(' .title');
var title2 = document.querySelector(' .recent-post-2 h1');
var titlep1 = document.querySelector(' .recent-post-2 .rec-01-h');
var titlep2 = document.querySelector(' .recent-post-2 .rec-02-h');
var titlep3 = document.querySelector(' .recent-post-2 .rec-03-h');
var titleD = document.querySelector('.publishedon');
var logo= document.querySelector('.logo');
var finon= document.querySelector('.finon');
var finonsc= document.querySelector('.fa-instagram');
var finonsct= document.querySelector('.fa-linkedin');
var finonsctt= document.querySelector('.fa-twitter');
var picDiv= document.querySelector('.me-pic');
var rec03= document.querySelector('.rec-03');
var rec02= document.querySelector('.rec-02');
var rec01= document.querySelector('.rec-01');



button.addEventListener('click', ()=> {
mainDiv.classList.toggle('darkmodeMain');
navi.classList.toggle('darkmodeMain');
pAll.classList.toggle('darkmodeP');
rec.classList.toggle('darkmodeP');
recText.classList.toggle('darkmodeP');
recTextt.classList.toggle('darkmodeP');
recTextth.classList.toggle('darkmodeP');
title.classList.toggle('darkmodeP');
title2.classList.toggle('darkmodeP');
titlep1.classList.toggle('darkmodeP');
titlep2.classList.toggle('darkmodeP');
titlep3.classList.toggle('darkmodeP');
titleD.classList.toggle('darkmodeP');
logo.classList.toggle('darkmodeP');
finon.classList.toggle('darkmodeP');
finonsc.classList.toggle('darkmodeP');
finonsct.classList.toggle('darkmodeP');
finonsctt.classList.toggle('darkmodeP');
picDiv.classList.toggle('bor');
rec01.classList.toggle('bor');
rec02.classList.toggle('bor');
rec03.classList.toggle('bor');

button.classList.toggle('forbtn');



  
});
}

colorMode();