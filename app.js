"use strict";

var n = document.querySelector("html");
var s = document.querySelector("nav");
var r, t, c, g;
t = document.querySelector(".nav-toggle");
r = {
  d: document.querySelector(".nav-toggle"),
  l: function l(e) {
    e.preventDefault(), this.d.classList.toggle("expanded");
  }
};
g = document.getElementById('contactBtn');
c = document.querySelector(".nav-mobile");

function nav() {
  if (c.style.width !== '100%') {
    c.style.width = '100%';
  } else {
    c.style.width = '0%';
  }
}

function closeNav(e) {
  c.style.width = '0%';
  r.l(e);
}

var i;

for (i = 0; i < 70; i++) {
  var snow = document.createElement('snow');
  document.getElementById('add').appendChild(snow);
}

function currentScrollPercentage() {
  var er = document.querySelector('body');
  return parseInt((document.documentElement.scrollTop + er.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
}

if (currentScrollPercentage() === 0 || currentScrollPercentage() === 1) {
  document.getElementById('goDown').style.display = 'block';
} else {
  document.getElementById('goDown').style.display = 'none';
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

if (currentScrollPercentage() == 'Infinity') {
  document.getElementById('goDown').style.display = 'none';
}

t.addEventListener("click", function (e) {
  r.l(e);
  nav();
});
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

var donate = document.getElementById('donate');
var tooltip = document.getElementById("tooltip");
donate.addEventListener('mouseover', function () {
  tooltip.style.display = 'block';
  setTimeout(function () {
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateY(30px)';
  }, 5);
});
donate.addEventListener('mouseleave', function () {
  tooltip.style.opacity = '0';
  tooltip.style.transform = 'translateY(0px)';
  setTimeout(function () {
    tooltip.style.display = 'none';
  }, 500);
});