

var images = [

"../images/background/bg2.jpeg",
"../images/background/bg3.jpeg",
"../images/background/bg4.jpg",
"../images/background/bg5.jpg",
"../images/background/bg6.jpg",
"../images/background/bg1.jpeg",
"../images/background/bg7.jpg"
]


var bg = document.querySelector('html');

var i = 0;
setInterval(function(){
bg.style.backgroundImage = "url(" + images[i] +")";
i = i + 1;
if (i == images.length) {
    i = 0;
}

// lozad(bg, {
//   load: function(bg){
//       bg.src = el.dataset.src;
//       bg.onload = function() {
//           bg.classList.add('fade')
//       }
//   }
// }).observe();

}, 5000);
