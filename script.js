/* eslint-disable prefer-const */
const catalogue = document.querySelector('#catalogue');
const form = document.querySelector('#hidden-form');
const myLibrary = [];

// book constructor
function Book(title, author, pages, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false, 0);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 336, true, 1);
const book3 = new Book('Lord of the Flies', 'William Golding', 182, false, 2);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// remove book from myLibrary and on webpage
// eslint-disable-next-line no-unused-vars
function deleteBook(index) {
  myLibrary.splice(index, 1);
  document.getElementById(`book${index}`).remove();
}

// eslint-disable-next-line consistent-return
function setSlider(book) {
  if (book.read === true) {
    return 'checked';
  }
}

function readStatus(book) {
  return (book.read ? 'Read' : 'Not Read');
}

function setReadStatus(book) {
  document.getElementById(`read${book.index}`).innerHTML = readStatus(book);
}

function createBookCard(book) {
  return `<div class="col-12 col-sm-3">
      <div id="book${book.index}" class="mt-3 card text-center">
        <div class="card-body h">
          <h5 class="card-title">${book.title}</h5>
          <h6 class="card-subtitle">By ${book.author}.</h6>
            <p><em>${book.pages} pages</em></p>
          <label class="switch">
            <input type="checkbox" ${setSlider(book)}></input>
            <span class="slider round" data-id=${book.index}></span>
          </label>
          <div id="read${book.index}">${readStatus(book)}</div>
        </div>
        <button onclick='deleteBook(${book.index})' id="delete${book.index}" class="delete btn btn-sm btn-secondary">Delete book?</button>
      </div>
      </div`;
}

// initially display any books
function displayBooks(library) {
  library.forEach((book) => {
    let card = createBookCard(book);
    catalogue.insertAdjacentHTML('afterbegin', card);
  });
}

function toggleRead(book) {
  // eslint-disable-next-line no-param-reassign
  book.read = !book.read;
}

function addSliderClicker(slider) {
  slider.addEventListener('click', (e) => {
    let book = myLibrary.find((bk) => bk.index === e.target.dataset.id);
    toggleRead(book);
    setReadStatus(book);
  });
}
// get and create new book from form data, add to library and webpage
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let lastBook = myLibrary.at(-1);
  let formValue = event.target.elements;
  let newBook = new Book(
    formValue.title.value,
    formValue.author.value,
    formValue.pages.value,
    formValue.read.checked,
    (lastBook.index + 1),
  );
  form.reset();
  document.querySelector('.toggle-modal').click();
  addBookToLibrary(newBook);
  let card = createBookCard(newBook);
  catalogue.insertAdjacentHTML('afterbegin', card);
  let slider = document.querySelector('.slider');
  addSliderClicker(slider);
});

document.querySelectorAll('.slider').forEach((sld) => addSliderClicker(sld));

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
displayBooks(myLibrary);
