class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoreBooks = [
           { 
             title: 'Book One',
             author: 'John Doe',
             isbn: '3434434'
           },
           {
             title: 'Book Two',
             author: 'John Doe',
             isbn: '45545'
           }
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));   
        };
        static addBookToList(book) {
            const list = document.querySelector('#book-list');

            const row = document.createElement('tr');

            row.innerHTML = `
             <td>${book.title}</td>
             <td>${book.author}</td>
             <td>${book.isbn}</td>
             <td><a href="a" class="btn btn=danger btn-sm delete">X</a></td>
            `;

            list.appendChild(row);
        }
        static deleteBook(el) {
            if(el.classList.contains('delete')) {
                el.parentElement.parentElement.remove();
            }
        }
        static clearFieds() {
            document.querySelector('title').value = '';
            document.querySelector('author').value = '';
            document.querySelector('isbn').value = '';
        }
    }
//Events: Display books
document.addEventListener('DOMContentLoaded', Ui.displayBooks);

//Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Prevent actual submit
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').nodeValue;
    const author = document.querySelector('#author').nodeValue;
    const isbn = document.querySelector('#isbn').value;
    
    //Validate
    if(title === '' || isbn === '') {
        alert('please fill in all fields');
    } else {
        //Instatiate book
    const book = new Book(title, author, isbn); 
    
    //Add a book to UI
    UI.addBookToList(book);

    //clear fields
    UI.clearFieds();
    }
})

//Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
});