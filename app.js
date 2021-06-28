"use strict";

var g = document.getElementById('contactBtn');

var i;
function currentScrollPercentage() {
  var er = document.querySelector('body');
  return parseInt((document.documentElement.scrollTop + er.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

function link(t) {
  var v = window.open(t, '_blank');
  v.focus();
}

var nav = false
var nave =document.querySelector('nav')
document.getElementById('mobileOpen').onclick = navToggle
function navToggle() {
  if (nav == true) {
    nav = false
    nave.classList.remove('open')
  } else {
    nav = true
    nave.classList.add('open')
  }
}

setTimeout(function(){
  document.querySelector('footer').style.opacity = '1'
  document.querySelector('footer').style.transform = 'translateY(0px)'
},1300)