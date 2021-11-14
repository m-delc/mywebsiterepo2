const h2 = document.createElement("h2");
h2.textContent = "pure magic";

document.querySelector("body").appendChild(h2);

function changeBackground() {
    var text = document.getElementById("para").style.backgroundColor = "red";
}

function backToNormal() {
    var text = document.getElementById("para").style.backgroundColor = "";
}

function changeBackground() {
    var text = document.getElementById("para2").style.backgroundColor = "red";
}

function backToNormal() {
    var text = document.getElementById("para2").style.backgroundColor = "";
}