import express from "express";
import BookController from "../controllers/livroController.js";

const routes = express.Router();

//listar TODOS os livros
routes.get("/books", BookController.listBooks);

//listar UM livro pelo ID
routes.get("/books/:id", BookController.listBookById);

//REGISTRAR um livro
routes.post("/books", BookController.registerBook);

//ATUALIZAR um livro pelo ID
routes.put("/books/:id", BookController.updateBookById);

//DELETE a book by ID
routes.delete("/books/:id", BookController.deleteBookById);

//routes.post("/books");

export default routes;
