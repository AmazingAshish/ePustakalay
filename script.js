// Sample book data for demonstration purposes
let books = [
    { title: "If You're So Smart, Why Aren't You Happy?", author: "Raj Raghunathan" },
    { title: "Make Your Bed", author: "Admiral William H. McRaven" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "How to Win Friends & Influence People", author: "Dale Carnegie" },
    { title: "Declutter Your Mind", author: "S. J. Scott and Barrie Davenport" },
    { title: "Beyond Mars and Venus", author: "John Gray" },
    { title: "Awaken the Giant Within", author: "Tonny Robbins" },
    { title: "Can't Hurt Me", author: "David Goggins" },
    { title: "Get out of Your Own Way", author: "Dr. Mark Goulston" },
    { title: "The Man in the Mirror", author: "Patrick M. Morley" },
    { title: "You are a Badass", author: "Jen Sincero" },
    { title: "Who Moved my Cheese?", author: "Spencer Johnson" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey" },
];

const bookTitleInput = document.getElementById('book-title');
const authorNameInput = document.getElementById('author-name');
const addButton = document.getElementById('add-button');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const bookList = document.getElementById('books');

// Function to display the books
function displayBooks(bookArray) {
    bookList.innerHTML = "";
    bookArray.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${book.title}</strong> by ${book.author} 
            <button onclick="deleteBook(${index})"><i class="fas fa-trash-alt"></i></button>`;
        bookList.appendChild(listItem);
    });
}

// Function to add a new book
function addBook() {
    const title = bookTitleInput.value.trim();
    const author = authorNameInput.value.trim();
    if (title !== "" && author !== "") {
        const newBook = { title, author };
        books.push(newBook);
        displayBooks(books);
        bookTitleInput.value = "";
        authorNameInput.value = "";
    }
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks(books);
}

// Function to filter books based on search input
function searchBooks() {
    const searchText = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText)
    );
    displayBooks(filteredBooks);
}

// Event listeners
addButton.addEventListener('click', addBook);
searchButton.addEventListener('click', searchBooks);

// Initial display of all books
displayBooks(books);