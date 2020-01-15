var btnSave = document.getElementById("btnSave");

var txtUsername = document.querySelector("input[name=username]");
var txtEmail = document.querySelector("input[name=email]");

btnSave.addEventListener("click", function() {
    event.preventDefault(); //this makes it not behave as default
    console.log(txtUsername.value);
    console.log(txtEmail.value);
})