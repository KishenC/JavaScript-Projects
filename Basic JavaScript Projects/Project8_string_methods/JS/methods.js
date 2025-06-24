// this will return where the search position of the string is
let text = "Mr. Black has a black house"
let position = text.search("Black");
document.getElementById("search").innerHTML = position;

// this will return the string to all of the uppercase letters 
let x = "Good Morning Ladies!";
let result = x.toUpperCase();
document.getElementById("upper").innerHTML = result;

// this will round the number to the nearest whole number
let num = 6.56793;
let n = num.toFixed();
document.getElementById("fixed").innerHTML = n;

// this will return the number of the value
let num2 = 21 / 7;
let a = num2.valueOf();
document.getElementById("value").innerHTML = a;