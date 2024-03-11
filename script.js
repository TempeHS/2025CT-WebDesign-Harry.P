let enterName = prompt("Please enter your name")
let enterNumber;


if (enterName == "joe") {
    enterName = "joe mama"
}

loadDIV();

function loadDIV () {
    if (enterName == "wesley") {
    document.getElementById("ScriptThisDIV").innerHTML = "<H1>Mister Mike " + enterName + "<H1>"
    }
    else {
    document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "<H1>"
    }
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2>Guess a number from 1 to 10</H2>"
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<P>Chill buddy</P>"
}

function guessNumber() {
    let enterNumber = prompt("Enter da number")

}

