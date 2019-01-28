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
    return False;
  }

  var loopTimer = setTimeout('fadeIn(\''+element+'\')',100)

}

fadeIn("first-panel")
