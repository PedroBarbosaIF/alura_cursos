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
                message: `${error.message} - finding book failed`,
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
            const updatedBook = await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"book updated", book: updatedBook});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - book update failed`,
            });
        }
    }

    static async delteBookById(req,res) {

    }
}

export default BookController;
