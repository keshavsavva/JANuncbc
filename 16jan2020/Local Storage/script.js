var counter = localStorage.getItem("counter");

var countSpan = document.getElementById("count");

var incr = document.getElementById("increment");
var decr = document.getElementById("decrement");

function updateSpan(val) {
    countSpan.textContent = val;
}
// create function to uodate the span value


incr.addEventListener("click", function() {
    counter++;
    localStorage.setItem("counter", counter);
    updateSpan(counter);
});

decr.addEventListener("click", function() {
    if(counter > 0) {
        counter--;
        localStorage.setItem("counter", counter);
        updateSpan(counter);
    }
});

updateSpan(counter);