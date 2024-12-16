import * as bs from "../service/bookService.js"

export const defaultGetHandler = (req, res) => {
    res.status(200);
    res.send(bs.getAllBooks());
}

export const getBookByIdHandler = (req, res) => {
    var bookId = req.params.id;
    let book = bs.getBookById(bookId);
    if (book) {
        res.status(200);
        res.send(book);
    } else {
        res.status(404);
        res.send('book does not found');
    }
}

export const createBookHandler = (req, res) => {
    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price,
    };
    bs.insertBook(book);
    res.status(200);
    res.send(book);
}

export const modifyBookHandler = (req, res) => {
    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price,
    };
    let val = bs.modifyBook(book);
    if (val) {
        res.status(200);
        res.send(book);
    } else {
        res.status(500);
        res.send('book does not found');
    }
}

export const deleteBookHandler = (req, res) => {
    let bookId = req.params.bookId;
    var ans = bs.deleteBook(bookId);
    if (ans) {
        res.status(200);
        res.send();
    } else {
        res.status(404);
        res.send('book does not deleted');
    }
}