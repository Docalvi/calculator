/**
 * Created by emilioalvarado on 4/18/17.
 */
"use strict";


var numBtns = document.getElementsByClassName("number");
for (var i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function () {
        console.log(this.value);
        if (document.getElementById('display2').value == "") {
            document.getElementById('display').value += this.value
        } else {
            document.getElementById('display3').value += this.value
        }
    })
}

var operators = document.getElementsByClassName("opBtns");
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        console.log(this.value);
        document.getElementById('display2').value = this.value
    })
}
var clear = document.getElementById("clear");
clear.addEventListener("click", function () {
    document.getElementById("display2").value = '';
    document.getElementById("display").value = '';
    document.getElementById("display3").value = '';
});


equal.addEventListener("click", function () {
    var operator = document.getElementById("display2").value;
    var display = parseFloat(document.getElementById("display").value);
    var display3 = parseFloat(document.getElementById("display3").value);
    var result;
    switch (operator) {
        case "*":
            result = display * display3;
            console.log(result.value);
            break;
        case "+":
            result = display + display3;
            console.log(result.value);
            break;
        case "/":
            result = display / display3;
            console.log(result.value);
            break;
        case "-":
            result = display - display3;
            console.log(result.value);
            break;
    }
    document.getElementById("display").value = result;
    document.getElementById("display2").value = '';
    document.getElementById("display3").value = ''
});


// })();