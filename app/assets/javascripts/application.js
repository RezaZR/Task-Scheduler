//= require_tree .
fullscreen();

function fullscreen() {
    var heights = window.innerHeight - 72.8;
    document.getElementById("home").style.height = heights + "px";
}

var todolistModal = document.getElementById('todolistModal');

var todolistBtn = document.getElementById("todolistBtn");

var todolistSpan = document.getElementsByClassName("close")[0];

todolistBtn.onclick = function() {
    todolistModal.style.display = "block";
}

todolistSpan.onclick = function() {
    todolistModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == todolistModal) {
        todolistModal.style.display = "none";
    }
}