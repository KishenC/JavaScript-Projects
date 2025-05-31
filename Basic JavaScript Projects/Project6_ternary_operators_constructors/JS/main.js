//A function with HTML and JS using a ternary operation with input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
// A function to display the results of the Object Constructor in an HTML element
function Book (Title, Author, Year, Genre) {
    this.Book_Title = Title;
    this.Book_Author = Author;
    this.Book_Year = Year;
    this.Book_Genre = Genre;
}
var James = new Book("Harry Potter", "J.K Rowling", 1997, "Fantasy");
var Jack = new Book("Charlie and the Chocolate Factory", "Roald Dhal", 1964, "Fantasy");
var Bruce = new Book("The Bourne Identity", "Robert Ledlum", 1980, "Spy Thriller");
function MyFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Bruce favourite book is " +
    Bruce.Book_Title +
    ", It is written by " +
    Bruce.Book_Author +
    ", the book is an " +
    Bruce.Book_Genre +
    ", book and it was published in " +
    Bruce.Book_Year + "."; 
}
// A nested function adds a integer to a float/double
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = [3.1];
        function Plus_one() {Starting_point += 4;}
        Plus_one();
        return Starting_point;
    }
}
