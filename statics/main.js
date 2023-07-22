document.addEventListener("DOMContentLoaded", function () {
  // When the DOM content is loaded, remove the preloader
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  preloader.id = "";
})


window.addEventListener("scroll", function () {
  var nameTrigger = this.document.getElementById("intro").offsetTop
  var scroll = this.window.pageYOffset

  var opacityTrigger = this.document.getElementById("about").offsetTop

  console.log(nameTrigger, scroll)
  if (scroll > nameTrigger) {
    this.document.getElementById("headerTTL").innerHTML = "Irfan<span class='yDot'>.</span>k"
    this.document.getElementById("nav-btn").style.display = "flex"
  } else {
    this.document.getElementById("headerTTL").innerHTML = "Portfolio"
    this.document.getElementById("nav-btn").style.display = "none"
  }

  if (scroll > opacityTrigger) {
    this.document.getElementById("header").style.background = "rgb(32, 32, 32, .91)"
  } else {
    this.document.getElementById("header").style.background = "rgb(32, 32, 32, 0.4)"
  }
})