import express from "express";
import { addBook, viewBook, viewAllBooks, updateBook, deleteBook } from '../controllers/booksController.js'
import { authenticate } from '../middlewares/auth.js';

const booksRouter = express.Router();

// Add a book books/
booksRouter.post("/", authenticate, addBook);

// View a book books/:id
booksRouter.get("/id", authenticate, viewBook);

// View all books books/
booksRouter.get("/", authenticate, viewAllBooks);

// Edit/Update a book books/
booksRouter.put("/", authenticate, updateBook);

// Delete a book books/:id
booksRouter.delete("/id", authenticate, deleteBook);


export default booksRouter;




