var connectTodd = document.querySelector(".mapTodd");

function hideTodd() {
    connectTodd.remove(".mapTodd");
}

var connectPhil = document.querySelector(".mapPhil");

function hidePhil() {
    connectPhil.remove(".mapPhil");
}

var connectEdit = document.querySelector("h2");

function switchName() {
    connectEdit.innerText = "Todd Doe";
}