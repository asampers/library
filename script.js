let myLibrary = [];

function Book(title, author, pages, read, index) {
  this.title = title
  this.author = author
  this. pages = pages
  this.read = read
  this.index = index
};

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {

}

function deleteBook() {

}

Book.prototype.toggleRead = function() {
  if (this.read === true) {
    return this.read = false
  };
  this.read = true  
}

