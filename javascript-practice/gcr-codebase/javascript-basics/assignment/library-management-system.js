"use strict";

// Represent issue state as part of each book instance.
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return false;
        }
        this.isIssued = true;
        return true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("The Blue Umbrella", "Ruskin Bond", "9788129104595"),
    new Book("The Discovery of India", "Jawaharlal Nehru", "9780143031031", true),
    new Book("Malgudi Days", "R. K. Narayan", "9788185986173")
];

console.log("Available books:");
books.filter((book) => !book.isIssued).forEach((book) => console.log(`${book.title} by ${book.author} (${book.isbn})`));

// Look up the requested ISBN and issue the book only when it is available.
const requestedIsbn = "9788129104595";
const requestedBook = books.find((book) => book.isbn === requestedIsbn);
if (!requestedBook) {
    console.log(`No book found for ISBN ${requestedIsbn}.`);
} else if (requestedBook.issueBook()) {
    console.log(`Issued: ${requestedBook.title}`);
} else {
    console.log(`Already issued: ${requestedBook.title}`);
}