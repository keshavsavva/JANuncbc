var show = document.getElementById("show");
var hide = document.getElementById("hide");
var rightBox = document.getElementById("right");

function showBox() {
    rightBox.style.display = "block";
}

function hideBox() {
    rightBox.style.display = "none";
}

show.addEventListener("click", showBox);
// dont need to include parentheses after function due to addEvent Listener

hide.addEventListener("click", hideBox);