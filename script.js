const catalogue = document.querySelector('#catalogue')
let myLibrary = [];

function Book(title, author, pages, read, index) {
  this.title = title
  this.author = author
  this. pages = pages
  this.read = read
  this.index = index
};

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function createBookCard(book) {
  return `<div class="card text-center w-25">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle">${book.author}</h6>
          <ul class="list-group">
            <li class="list-group-item">${book.pages} pages</li>
          </ul>
          <label class="switch">
              <input type="checkbox"></input>
              <span class="slider"></span>
            </label>
        </div>
      </div>`;  
}


function removeBookFromDisplay() {
  //some code to delete book's html card
}

function displayBooks(myLibrary) {
  //some code to initially display any books
  myLibrary.forEach(book => {
  let card = createBookCard(book)
  catalogue.insertAdjacentHTML('afterbegin', card)
  }
  );
}

function deleteBook(book) {
  myLibrary.splice(book.index,1)
}

Book.prototype.toggleRead = function() {
  if (this.read === true) {
    return this.read = false
  };
  this.read = true  
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false, 0);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 336, true, 1)
const book3 = new Book('Lord of the Flies', 'William Golding', 182, false, 2)

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
console.log(myLibrary)

displayBooks(myLibrary)