//main.js
//a function that uses the += expression operator
function MyFunction() {
    var sentence = "Hello,";    //creating the variable
    sentence += "who are you!";     //using the += operator to add to the variable
    document.getElementById("Concatenate").innerHTML = sentence;    //using document.ElementById()
}