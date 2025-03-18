/* kommentar med
flera rader */

//kommentar med en rad


function visaDialog(){
    alert('Hej Världen!');
}

//2025-03-13
function authorDialog(){
    alert("Jag har gjort webbsidan 2025")
}

function colorDialog(){
    document.getElementById("rubrik").innerHTML = "Elias";
    document.getElementById("text").style.backgroundColor = "lightblue";
}

function imageChanger(){
    document.getElementById("image").src = "spaghetti.jpg";
}

function imageChanger2(){
    document.getElementById("image").src = "timberners.png";
}

function minFunktion(){
    var x, text;

    x = document.getElementById("fname").value;

    text = "Hej " + x + "!";
    alert(text);
}
function Calculate(){

var value1 = parseFloat(document.getElementById("nummer1").value);
var value2 = parseFloat(document.getElementById("nummer2").value);
document.getElementById("svar").value = value1 / value2;
}
