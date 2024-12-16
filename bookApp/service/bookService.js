import fs from 'fs';

const DATA_FILE = "./bookApp/data/books.json";

const readData = () => {
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

const saveData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

export const getAllBooks = () => {
    return readData();
}
export const getBookById = (bookId) => {
    const books = readData();
    return books.find(b => b.bookId == bookId)
}

export const insertBook = (book) => {
    const books = readData();
    books.push(book);
    saveData(books);
}

export const modifyBook = (book) => {
    let isModified = false;
    let books = readData();
    let index = books.findIndex(b => b.bookId == book.Id);
    if (index > -1) {
        books[index] = book
        isModified = true;
        saveData(books);
    }

    return isModified;
}
export const deleteBook = (bookId) => {
    let isDeleted = false;
    let books = readData();
    let index = books.findIndex(b => b.bookId == bookId);
    if (index > -1) {
        books.slice(index, 1);
        isDeleted = true;
    }

    return isDeleted;
}