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
  return `<div class="card text-center w-25 me-4">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle">By ${book.author}.</h6>
          
            <p><em>${book.pages} pages</em></p>
          
          <label class="switch">
            <input type="checkbox" ${setSlider(book)}></input>
            <span class="slider round"></span>
          </label>
        </div>
      </div>`;  
}

function setSlider(book) {
  if (book.read === true) {
    return 'checked'
  }
}

function toggleReadStatus(book) {
  if (book.read === true) {
    return 'Read'
  };
  return 'Not Read'
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