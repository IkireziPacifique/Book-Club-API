import Book from "../models/books.model.js";


//Add a Book
export async function addBook(req, res) {
    try {
        let book = await Book.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book added successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be added at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a book
export async function viewBook(req, res) {
    try {
        let allbooks = await Book.findAll({where: {book_id: req.params.id}});
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all books
export async function viewAllBooks(req, res) {
    try {
        let allbooks = await Book.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update book record
export async function updateBook(req, res) {
    try {
        let book = await Book.update(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book added successfully',
                data: book
            })
        } else {
            res.json({
                success: true,
                message: 'Book not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Delete a member
export async function deleteBook(req, res) {
    try {
        let book = await Book.delete({where: {book_id: req.params.id}});
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book was successfully deleted',
                data: book
            })
        } else {
            res.json({
                success: true,
                message: 'Book not found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
