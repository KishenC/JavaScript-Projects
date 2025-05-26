function addition() { //Defineing and naming the addition function
    var add = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + add; //Print the result in HTML
}

function subtraction() { //Defineing and naming the subtraction function
    var sub = 10 - 5;
    document.getElementById("Sub").innerHTML = "10 - 5 = " + sub; //Print the result in HTML
}

function multiplication() { //Defineing and naming the multiplication function
    var multi = 500 * 10;
    document.getElementById("Multi").innerHTML = "500 * 100 = " + multi; //Print the result in HTML
}

function division() { //Defineing and naming the divsion function
    var div = 50 / 5;
    document.getElementById("Div").innerHTML = "50 / 5 = " + div; //Print the result in HTML
}

function random() { //Defineing and naming the random function
    document.getElementById("Ran").innerHTML = Math.random()*20; //Print the result in HTML
}

function modulus_operator() { //Defineing and naming the modulus function
    var modulus = 39 & 6;
    document.getElementById("Mod").innerHTML = "When you divide 39 by 6 you have a remainder of: " + modulus; //Print the result in HTML 
}

function Increment() { //Defineing and naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; //Saves the text of the HTML element to a variable 
    value++; //Add one to the value
    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML
}

function Decrement() { //Defineing and naming the decrement function
    var value = document.getElementById("DecrementText").innerHTML; //Saves the text of the HTML element to a variable
    value--; //Subtract one from the value
    document.getElementById("DecrementText").innerHTML = value; //Print the result in HTML
}
