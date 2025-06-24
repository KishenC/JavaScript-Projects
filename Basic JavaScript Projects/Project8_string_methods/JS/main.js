//Using the .cocat() method
function full_Sentence() {
    var part_1 = "One, Two, Freddy's coming for you, ";
    var part_2 = "Three, Four, better lock your door, ";
    var part_3 = "Five, Six, grab your crucifix, ";
    var part_4 = "Seven, Eight, better stay up late, ";
    var part_5 = "Nine, Ten, never sleep again!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}
// Using the .slice() method
function slice_Method() {
    var sentence = "Rock n Roll";
    var section = sentence.slice(0, 5);
    document.getElementById("Slice").innerHTML = section;
}
// Using the .toString method
function string_Method() {
    var x = 3090;
    document.getElementById("ToString").innerHTML = x.toString();
}

// Using the .toPrecision() method
function precision_Method() {
    var x = 189.4631423441231;
    document.getElementById("Precision").innerHTML = x.toPrecision(5);
}