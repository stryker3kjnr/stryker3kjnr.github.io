"use strict";

var n = document.getElementById("main");
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

var i;

for (i = 0; i < 70; i++) {
  var snow = document.createElement('snow');
  document.getElementById('add').appendChild(snow);
}

var a = n.scrollTop;
var b = n.scrollHeight;
var cc;

if (cc >= 1) {
  document.getElementById('goDown').style.display = 'none';
}

t.addEventListener("click", function (e) {
  r.l(e);
  nav();
});

function urlhash(link) {
  window.location.hash = link;
}

$(document).ready(function () {
  setTimeout(function () {
    $('section').each(function () {
      $(this).hide().fadeIn('500');
    });
  }, 1000);
});