const title = document.querySelector(".title h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.background = 'tomato';
}

function handleWindowCopy() {
  alert('copier!');
}

function handleWindowOffline() {
  alert('SOS no WIFI')
}

function handleWindowOnline() {
  alert('All Good')
}

 // title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);

// title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseenter", handleMouseEnter);

// title.onmoustleave = handleMouseLeave;
title.addEventListener("mouseleave", handleMouseLeave); 


window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);