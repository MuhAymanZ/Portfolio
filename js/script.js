var X = document.getElementById("welc");
var Y = document.getElementById("web");

if (X.style.width < "22ch") {
    Y.style.visibility = "hidden"; 
}
function visible(){
    Y.style = "visible";
}
setTimeout(visible, 2500)

mybutton = document.getElementById("top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



