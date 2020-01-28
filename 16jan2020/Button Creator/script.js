var container = document.getElementById("container");

function createButton(size) {
   
    for(var i = 0; i < size; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = "Button " + (i + 1);
        newButton.setAttribute("data-id", i + 1);// now each button has a unique ID
        container.appendChild(newButton);
    }
}

createButton(5);

container.addEventListener("click", function(e) {
    if (event.target.matches("button")) {//makes it so function only applies if target clicked is a button
        e.preventDefault();
        var id = event.target.getAttribute("data-id");//pulls the button ID
        alert("I am button number #" + id);//Adds button ID to alert
        console.log(event.target);
    }
})