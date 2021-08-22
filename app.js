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


var reviews = [
  {
    "author": "Zakk & Penguin",
    "description": "Stryker is an extremely dedicated to any task that drops in front of him. He volunteered to remodel and manage the GeoGlobeCraft Minecraft server discord. Stryker is able to complete any discord task you need done, including but not limited to: setting up bots, roles, channels with permissions (even things like DiscordSRV), and so much more (Stryker is always willing to learn more as well). If you are someone who does not want to worry about setting up and managing the technical aspects of your Discord, Stryker will have you covered!",
    "title": "GeoGlobeCraft",
    "date": "2021-07-20",
    "html": "            \n    <div class=\"wrap-box\">\n    <h2>GeoGlobeCraft</h2>\n    <i>5/5 stars - 2021-07-20</i>\n    <br>\n    <p style=\"text-align: center;\">\n      Stryker is an extremely dedicated to any task that drops in front of him. He volunteered to remodel and manage the GeoGlobeCraft Minecraft server discord. Stryker is able to complete any discord task you need done, including but not limited to: setting up bots, roles, channels with permissions (even things like DiscordSRV), and so much more (Stryker is always willing to learn more as well). If you are someone who does not want to worry about setting up and managing the technical aspects of your Discord, Stryker will have you covered!\n    </p>\n    <br>\n    <b style=\"text-align:right\">Zakk & Penguin</b>\n</div>"
  }, {
    "author": "Aiden",
    "description": "Stryker offered a great deal of service to helping managing our server's (AtlasMC) discord. He poured lots of time in making sure everything was dealt with, and in great condition. As a moderation team member, he also offered support in regards to being professional and offering help to anyone who required it.",
    "title": "Stryker on AtlasMC",
    "date": "2021-07-07",
    "html": "            \n    <div class=\"wrap-box\">\n    <h2>Stryker on AtlasMC</h2>\n    <i>5/5 stars - 2021-07-07</i>\n    <br>\n    <p style=\"text-align: center;\">\n      Stryker offered a great deal of service to helping managing our server's (AtlasMC) discord. He poured lots of time in making sure everything was dealt with, and in great condition. As a moderation team member, he also offered support in regards to being professional and offering help to anyone who required it.\n    </p>\n    <br>\n    <b style=\"text-align:right\">Aiden</b>\n</div>"
  }, {
    "author": "Telestic",
    "description": "Stryker is a very good discord mod, he has helped 6th Sense Esport's discord and have been keeping it updated well. He has good knowledge of how the servers work, good bots, addons, and probably everything in general to do with discords so I can hard vouch him since he has been working along side me.",
    "title": "Discord Mod",
    "date": "2021-07-07",
    "html": "            \n    <div class=\"wrap-box\">\n    <h2>Discord Mod</h2>\n    <i>5/5 stars - 2021-07-07</i>\n    <br>\n    <p style=\"text-align: center;\">\n      Stryker is a very good discord mod, he has helped 6th Sense Esport's discord and have been keeping it updated well. He has good knowledge of how the servers work, good bots, addons, and probably everything in general to do with discords so I can hard vouch him since he has been working along side me.\n    </p>\n    <br>\n    <b style=\"text-align:right\">Telestic</b>\n</div>"
  }, {
    "author": "badvent",
    "description": "Stryker has helped me make a discord server countless times, he has shown great moderating skills whilst i was alongside him on a server. He is also extremely calm and collective, it is almost impossible to get him to use full caps whilst in an argument etc. Another thing i'd like to point out is that this man is the kindest ever, the kindest i've seen on the internet in my entire life",
    "title": "Great person to work with",
    "date": "2021-06-16",
    "html": "            \n    <div class=\"wrap-box\">\n    <h2>Great person to work with</h2>\n    <i>5/5 stars - 2021-06-16</i>\n    <br>\n    <p style=\"text-align: center;\">\n      Stryker has helped me make a discord server countless times, he has shown great moderating skills whilst i was alongside him on a server. He is also extremely calm and collective, it is almost impossible to get him to use full caps whilst in an argument etc. Another thing i'd like to point out is that this man is the kindest ever, the kindest i've seen on the internet in my entire life\n    </p>\n    <br>\n    <b style=\"text-align:right\">badvent</b>\n</div>"
  }, {
    "author": "Chris Raj",
    "description": "I never thought I would need a Discord Developer until I met Stryker. He has made my life so much easier but setting up many things in my discord server that I would waste hours learning if I were to do it myself. Stryker is an all around great guy who is eager to help. He is very welcoming and will always treat you with kindness. I am very lucky to have him on my team and anyone who is fortunate enough to work with him will not regret it.",
    "title": "You will not be disappointed",
    "date": "2021-06-17",
    "html": "            \n    <div class=\"wrap-box\">\n    <h2>You will not be disappointed</h2>\n    <i>5/5 stars - 2021-06-17</i>\n    <br>\n    <p style=\"text-align: center;\">\n      I never thought I would need a Discord Developer until I met Stryker. He has made my life so much easier but setting up many things in my discord server that I would waste hours learning if I were to do it myself. Stryker is an all around great guy who is eager to help. He is very welcoming and will always treat you with kindness. I am very lucky to have him on my team and anyone who is fortunate enough to work with him will not regret it.\n    </p>\n    <br>\n    <b style=\"text-align:right\">Chris Raj</b>\n</div>"
  }
]
let nums = [0,1,2,3,4]
loadVouches()
console.log(JSON.stringify(reviews))

function loadVouches() {
  let cont = document.getElementById('reviewscont')
  for (let i = 0; i < 2; i++) {
    let randomReviewIndex = nums[Math.floor(Math.random() * nums.length)]
    console.log(randomReviewIndex);
    if (!randomReviewIndex) randomReviewIndex = nums[Math.floor(Math.random() * nums.length)]
    if (!randomReviewIndex) randomReviewIndex = nums[Math.floor(Math.random() * nums.length)]
    if (!randomReviewIndex) randomReviewIndex = nums[Math.floor(Math.random() * nums.length)]
    if (!randomReviewIndex) randomReviewIndex = nums[Math.floor(Math.random() * nums.length)]
    cont.insertAdjacentHTML('beforeend',reviews[randomReviewIndex].html)
    delete nums[randomReviewIndex]
  }
}