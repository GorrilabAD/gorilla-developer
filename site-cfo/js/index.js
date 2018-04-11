
window.onload = function () {
  document.getElementById('menu').onclick = function () {
   var  x = document.getElementById('myTopnav');
   if (x.className === "topnav") {
    x.className += " responsive";
   } else {
    x.className = "topnav";
   }
 };

 let modal = document.getElementById('myModal');
 let btn = document.getElementById('myBtn');
 let span = document.getElementsByClassName('close')[0];

 btn.onclick = function () {
   modal.style.display = "block";
 }

 span.onclick = function () {
   modal.style.display = "none";
 }

 window.onclick = function (event) {
   if(event.target == modal) {
     modal.style.display = "none";
   }
 }

 }﻿;


 let modal = document.getElementById('myModal');
 let btn = document.getElementById('myBtn');
 let span = document.getElementsByClassName('close')[0];

 btn.onclick = function () {
   modal.style.display = "block";
 }

 span.onclick = function () {
   modal.style.display = "none";
 }

 window.onclick = function (event) {
   if(event.target == modal) {
     modal.style.display = "none";
   }
 }
