//= require_tree .
fullscreen();

function fullscreen() {
    var heights = window.innerHeight - 72.8;
    document.getElementById("home").style.height = heights + "px";
}