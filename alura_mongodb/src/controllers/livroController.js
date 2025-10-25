import book from "../models/Book.js";
import { autor } from "../models/Autor.js";

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
            const especificBook = await book.findById(id);
            const especificAutor = await autor.findById(especificBook.autor);

            //united is putting especificAutor in especificBook.autor
            const united = {
                ...especificBook._doc,
                autor: { ...especificAutor._doc },
            };

            res.status(200).json(united);
        } catch (error) {
            res.status(500).json({
                message: `finding book failed.`,
                error: `${error.message}`,
            });
        }
    }

    //registerABook
    static async registerBook(req, res) {
        const newBook = req.body;
        try {
            //const newBook = await book.create(req.body);

            const especificAutor = await autor.findById(newBook.autor);

            if (especificAutor != null) {
                const united = await book.create({
                    ...newBook,
                    autor: especificAutor.id,
                });

                res.status(201).json({
                    message: "book was registered!",
                    book: united,
                });
            } else if (especificAutor == null) {
                const newBook = await book.create(req.body);

                res.status(201).json({
                    message: "book was registered!",
                    book: newBook,
                });
            }
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
                newBook: newBook,
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
