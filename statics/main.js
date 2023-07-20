document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is loaded, remove the preloader
    var preloader = document.getElementById("preloader");
    setTimeout(function() {
        preloader.id="";
      }, 250);
  })