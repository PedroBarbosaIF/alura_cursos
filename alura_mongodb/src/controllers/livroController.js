import book from "../models/Book.js";

class BookController {
    //list ALL books
    static async listBooks(req, res) {
        try {
            const booksList = await book.find({});
            res.status(200).json(booksList);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - listing books failed`,
            });
        }
    }

    //list ONE book
    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const especifBook = await book.findById(id);
            res.status(200).json(especifBook);
        } catch (error) {
            res.status(500).json({
                message: `finding book failed.`,
                error: `${error.message}`
            });
        }
    }

    //registerABook
    static async registerBook(req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({
                message: "book was registered!",
                book: newBook,
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - book registry failed`,
            });
        }
    }

    //update a book
    static async updateBookById(req, res) {
        try {
            const id = req.params.id;
            const oldBook = await book.findByIdAndUpdate(id, req.body);
            const newBook = await book.findById(id);
            res.status(200).json({
                message: "book updated",
                olDbook: oldBook,
                newBook: newBook
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - book update failed`,
            });
        }
    }

    //delete a book by id
    static async deleteBookById(req, res) {
        try {
            const id = req.params.id;
            const especificBook = await book.findByIdAndDelete(id);
            res.status(200).json({
                message: "book deleted!",
                book: especificBook,
            });
        } catch (e) {
            res.status(500).json({
                message: `${error.message} - book delete failed`,
            });
        }
    }
}

export default BookController;
