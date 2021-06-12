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

var root = $('#main');
$('a[href^="#"]').click(function () {
  var href = $.attr(this, 'href');
  root.animate({
    scrollTop: $(href).offset().top
  }, 1000, function () {
    window.location.hash = href;
  });
  return false;
});

function link(t) {
  var v = window.open(t, '_blank');
  v.focus();
}

if (window.location.hash === 'about') {
  document.getElementsByClassName('nav-links')[1].classList.add('active');
}
