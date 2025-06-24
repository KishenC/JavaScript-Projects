    // Concatenate a variable to a string of different parts to create a full sentence.
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "a dream";
    var part_3 = " that one day, ";
    var part_4 = "I will rise up";
    var part_5 = " and conquer the world!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
// Use the slice method to extract a section of a string.
function slice_Method() {
    var Sentence = "All work and no fun makes Jason a dull boy.";
    var Section = Sentence.slice(26, 31);
    document.getElementById("Slice").innerHTML = Section;
}
// string Method to convert a number to a string.
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
// Use the toPrecision method to format a number to a specified length.
function precision_Method() {
    var X = 12931.35352134612;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}