let n = document.querySelector("main");
let s = document.querySelector("nav");
let r, t, c, g;
t = document.querySelector(".nav-toggle");
r = {
    d: document.querySelector(".nav-toggle"),
    l: function(e) {
        e.preventDefault(), this.d.classList.toggle("expanded")
    }
};

g = document.getElementById('contactBtn');

c = document.querySelector(".nav-mobile");

let f = document.querySelector(".footer");

function showFooter() {
    f.style.display = 'block';
}

function nav() {
    if (c.style.width !== '100%') {
       c.style.width = '100%';
    } else {
        c.style.width = '0%';
    }
}

var i;
for (i = 0; i < 70; i++) {
    let snow = document.createElement('snow');
    document.body.appendChild(snow);
}

let scroll = window.scrollY;

if (window.scrollY)
    
setTimeout(function() {
    showFooter();
}, 2000)


t.addEventListener("click", function(e){
    r.l(e);
    nav();
})


function urlhash(link) {
    window.location.hash = link;
}

const sections = document.querySelectorAll(".section");

if (window.location.hash == '#about') {
    document.querySelector('#aboutlink').classList.remove('active');
let options = {
  rootMargin: "0px",
  threshold: 0.75
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
		const { target } = entry;
		
		if (entry.intersectionRatio >= 0.75) {
			target.classList.add("is-visible");
		} else {
			target.classList.remove("is-visible");
		}
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  const sectionChildren = [section.children];

  observer.observe(section);
});
