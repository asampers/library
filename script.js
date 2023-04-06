const catalogue = document.querySelector('#catalogue')

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false, 0);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 336, true, 1)
const book3 = new Book('Lord of the Flies', 'William Golding', 182, false, 2)

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
  return `<div id="book${book.index}" class="card text-center w-25 me-4">
        <div class="card-body">
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
      </div>`;  
}

function setSlider(book) {
  if (book.read === true) {
    return 'checked'
  }
}

function readStatus(book) {
  if (book.read === true) {
    return 'Read'
  };
  return 'Not Read'
}

function setReadStatus(book) {
  document.getElementById(`read${book.index}`).innerHTML = readStatus(book)
}


function displayBooks(myLibrary) {
  //some code to initially display any books
  myLibrary.forEach(book => {
  let card = createBookCard(book)
  catalogue.insertAdjacentHTML('afterbegin', card)
  }
  );
}

function deleteBook(index) {
  myLibrary.splice(index,1);
  document.getElementById(`book${index}`).remove();
  
}

function toggleRead(book) {
  book.read = !book.read
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
console.log(myLibrary)

displayBooks(myLibrary)

const sliders = document.querySelectorAll('.slider')

sliders.forEach(sld => sld.addEventListener('click', (e) => {
  let book = myLibrary[e.target.dataset.id]
  toggleRead(book);
  setReadStatus(book);
})
)

 