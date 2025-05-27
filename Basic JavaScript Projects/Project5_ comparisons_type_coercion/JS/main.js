//main.js

//variable with a greater than Operative data type
//printing the data type of the variable x
var x = 10 == 10;
document.write(typeof x);
document.write("<br>");

//combination of a expression of a string and number
document.write("20" + 25);
document.write("<br>");

//utilising the == operator
document.write(15 == 15);
document.write("<br>");

//utilising the === operator
x = 25;
y = 15;
document.write(x === y);
document.write("<br>");

//utilising the > and && (and) operators
document.write(15 > 10 && 10 > 5);
document.write("<br>");

//utilising the < and || (or) operators
document.write(10 < 5 || 11 < 6 );
document.write("<br>");

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}