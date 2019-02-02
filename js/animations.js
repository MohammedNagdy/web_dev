// the animations for the home page <div>, the artcle <div> and the contact <div>

//fade in function
var fadeInFrom = 0;
var fadeOutFrom = 10;

function fadeIn(element){
  var target = document.getElementById(element);
  target.style.display = "block";
  var newSetting = fadeInFrom /10;
  target.style.opacity = newSetting;
  fadeInFrom++;
  // if condition when it hits full opacity
  if (fadeInFrom === 10){
    target.style.opacity = 1;
    clearTimeout(loopTimer);
    fadeInFrom = 0;
    return false;
  }

  var loopTimer = setTimeout('fadeIn(\''+element+'\')',100);

}

fadeIn("first-panel")

// animate scrolling
var links = document.querySelectorAll(".nav-items");
console.log(links[1]);

function scrollHorizontal(e) {
  if (e.target !== e.currentTarget){
    alert("yaoo this's been clicked");
    console.log('action');
  }
}

// listen to click on the navbar to move to another page
// for(i=0; i<links.length; i++){
  links.addEventListener("click", scrollHorizontal, false);
// }
