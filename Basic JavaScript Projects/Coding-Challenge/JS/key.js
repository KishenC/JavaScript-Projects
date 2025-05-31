function Book (Title, Author, Year, Genre) {
    this.Book_Title = Title;
    this.Book_Author = Author;
    this.Book_Year = Year;
    this.Book_Genre = Genre;
}
var Jack = new Book("Harry Potter", "J.K Rowling", 1997, "Fantasy");
var Emily = new Book("Charlie and the Chocolate Factory", "Roald Dahl", 1964, "Fantasy");
var Erik = new Book("The Bourne Identity", "Robert Ledlum", 1980, "Spy Thriller");
function MyFunction() {
    document.getElementById("New_and_This").innerHTML = "Erik favourite book is " + Erik.Book_Title + " it was written by " + Erik.Book_Author + " it is a " + Erik.Book_Genre + " Book."; 
}